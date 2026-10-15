const ALLOWED_ORIGIN = "https://tomdhn.github.io";
const UPSTREAM_URL = "https://txtangob.tx-connect.com/IWS_ASMX/Service.asmx";
const MAX_BODY_BYTES = 1024 * 1024;
const SOAP_ACTION_PATTERN = /^"http:\/\/transics\.org\/[A-Za-z][A-Za-z0-9_]*"$/;
const ALLOWED_REQUEST_HEADERS = new Set(["content-type", "soapaction"]);

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, SOAPAction",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function textResponse(status, message, originAllowed) {
  const headers = new Headers({
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store"
  });
  if (originAllowed) {
    Object.entries(corsHeaders()).forEach(([key, value]) => headers.set(key, value));
  }
  return new Response(message, { status, headers });
}

async function readLimitedBody(request) {
  const declaredLength = Number(request.headers.get("Content-Length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    throw new RangeError("SOAP request body exceeds the 1 MiB limit.");
  }
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new RangeError("SOAP request body exceeds the 1 MiB limit.");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(total);
  let offset = 0;
  chunks.forEach((chunk) => {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  });
  return new TextDecoder("utf-8", { fatal: true }).decode(body);
}

export default {
  async fetch(request) {
    const origin = request.headers.get("Origin");
    const originAllowed = origin === ALLOWED_ORIGIN;
    if (!originAllowed) return textResponse(403, "Origin is not allowed.", false);

    if (request.method === "OPTIONS") {
      const requestedMethod = request.headers.get("Access-Control-Request-Method");
      const requestedHeaders = (request.headers.get("Access-Control-Request-Headers") || "")
        .split(",")
        .map((header) => header.trim().toLowerCase())
        .filter(Boolean);
      if (requestedMethod !== "POST" || requestedHeaders.some((header) => !ALLOWED_REQUEST_HEADERS.has(header))) {
        return textResponse(403, "Preflight request is not allowed.", true);
      }
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (request.method !== "POST") {
      return textResponse(405, "Only POST requests are supported.", true);
    }

    const contentType = request.headers.get("Content-Type") || "";
    if (!/^text\/xml(?:\s*;|$)/i.test(contentType)) {
      return textResponse(415, "Content-Type must be text/xml.", true);
    }
    const soapAction = request.headers.get("SOAPAction") || "";
    if (!SOAP_ACTION_PATTERN.test(soapAction)) {
      return textResponse(400, "A valid TxTango SOAPAction is required.", true);
    }

    let body;
    try {
      body = await readLimitedBody(request);
    } catch (error) {
      if (error instanceof RangeError) return textResponse(413, error.message, true);
      if (error instanceof TypeError) return textResponse(400, "Request body must be valid UTF-8.", true);
      throw error;
    }
    if (!body.trim()) return textResponse(400, "SOAP request body cannot be empty.", true);

    let upstream;
    try {
      upstream = await fetch(UPSTREAM_URL, {
        method: "POST",
        headers: {
          "Content-Type": contentType,
          "SOAPAction": soapAction
        },
        body
      });
    } catch {
      return textResponse(502, "Unable to reach the TxTango SOAP service.", true);
    }

    const headers = new Headers(corsHeaders());
    headers.set("Cache-Control", "no-store");
    const upstreamContentType = upstream.headers.get("Content-Type");
    if (upstreamContentType) headers.set("Content-Type", upstreamContentType);
    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers
    });
  }
};
