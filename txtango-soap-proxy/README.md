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

The GitHub Pages client is preconfigured with `https://txtango-soap-proxy.dhoine-tom.workers.dev/`. Open the published page and confirm that URL appears in the **Cloudflare Worker URL** field. Update the value in `index.html` if you redeploy the Worker under a different URL.

## Configuration and security

- If the published site uses another origin, change `ALLOWED_ORIGIN` in `src/index.js` to the exact site origin (scheme and host, without a path), then deploy again.
- CORS only restricts browser access; it does not authenticate callers or prevent command-line clients from calling the Worker. TxTango credentials are still required by the upstream service. Do not put credentials in this Worker or in the static site source.
- The Worker has a fixed upstream URL and does not forward arbitrary hosts.
