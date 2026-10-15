# TxTango SOAP proxy

This Cloudflare Worker forwards SOAP `POST` requests to the fixed TxTango ASMX endpoint. It permits browser requests only from `https://tomdhn.github.io`, handles CORS preflight requests, limits request bodies to 1 MiB, and does not log credentials or SOAP payloads.

## Deploy from PowerShell

Install a current Node.js LTS version first. Then open PowerShell in this directory and run:

```powershell
npx wrangler@latest login
npx wrangler@latest deploy
```

The deploy output shows the Worker URL, usually `https://txtango-soap-proxy.<your-subdomain>.workers.dev`.

## Connect GitHub Pages

Open the published TxTango API page and paste the deployed URL into the **Cloudflare Worker URL** field at the top. The page uses that URL as the request destination; the URL is not saved after reload.

## Configuration and security

- If the published site uses another origin, change `ALLOWED_ORIGIN` in `src/index.js` to the exact site origin (scheme and host, without a path), then deploy again.
- CORS only restricts browser access; it does not authenticate callers or prevent command-line clients from calling the Worker. TxTango credentials are still required by the upstream service. Do not put credentials in this Worker or in the static site source.
- The Worker has a fixed upstream URL and does not forward arbitrary hosts.
