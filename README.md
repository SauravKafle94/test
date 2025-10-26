
# Saurav Kafle — Personal Website

A fast, static portfolio built with HTML, CSS, and a sprinkle of JS. Ready to deploy on GitHub Pages, Netlify, or Vercel.

## Structure
```
.
├── index.html
├── robots.txt
├── sitemap.xml
├── humans.txt
└── assets
    ├── css
    │   └── styles.css
    ├── js
    │   └── main.js
    └── img
        └── favicon.svg
```

## Customize
- Update links in `index.html` (GitHub, LinkedIn, X, email).
- Edit content in the **Projects**, **Skills**, **Blog**, and **About** sections.
- Replace `assets/img/favicon.svg` if you have a logo.

## Deploy (Option A: GitHub Pages)
1. Create a repository named `sauravkafle.com.np` (or any name).
2. Push these files to the repo root (branch `main`).
3. In **Settings → Pages**, set **Source** to `Deploy from a branch` and choose `main` and `/root`.
4. Add a file named `CNAME` at repo root containing `sauravkafle.com.np` to bind your domain.
5. In your domain DNS (registrar or Cloudflare), set:
   - **A** records for apex `@` to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - **CNAME** record for `www` → `your-username.github.io`.
6. Wait 30–60 minutes for DNS to propagate.

## Deploy (Option B: Netlify)
1. Create a Netlify account and **New site** → **Import from Git**.
2. Connect your repository; build settings: `No build` (it’s static).
3. In **Domain management**, add custom domain `sauravkafle.com.np`.
4. In DNS, set apex `@` A records to `75.2.60.5` and `76.76.21.21`. For `www`, set CNAME → your Netlify subdomain.

## Deploy (Option C: Vercel)
1. Create a Vercel project from the repository.
2. Add domain `sauravkafle.com.np` in **Settings → Domains**.
3. Set CNAME for `www` → `cname.vercel-dns.com`. For apex, follow Vercel’s recommended A records or use an ANAME/ALIAS if supported.

## HTTPS
Ensure you enable HTTPS/SSL in your host (GitHub Pages/Netlify/Vercel will issue certificates once DNS is correct).

## Troubleshooting
- Use https://dnschecker.org to verify records.
- If using Cloudflare, set proxy **OFF** (DNS‑only) initially, then turn it on after Pages/Netlify is serving.

---

Questions? Ping me.
