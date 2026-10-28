# Eye Level Learning Center of Hicksville

Local website for **Eye Level Learning Center of Hicksville** — Math and English tutoring at 760 S Broadway, Hicksville, NY 11801. Built for local SEO and AI answer engines (GEO), with original copy and a design distinct from the national Eye Level site.

Canonical domain: [https://www.myeyelevelhicksville.com](https://www.myeyelevelhicksville.com)

## Quick start

```bash
npm install
npm run dev -- --port 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm start -- --port 43123
```

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Home |
| `/math-tutoring-hicksville/` | Math tutoring |
| `/english-tutoring-hicksville/` | English tutoring |
| `/free-level-test/` | Free level test booking |
| `/faq/` | Parent FAQ |
| `/contact/` | Contact + map |
| `/privacy/` | Privacy policy (form consent) |

## Technical files

- App Router generates `/robots.txt` and `/sitemap.xml` (`src/app/robots.ts`, `src/app/sitemap.ts`)
- Static copies for Apache/Nginx deploys: `deploy/robots.txt`, `deploy/sitemap.xml`
- `public/llms.txt` — GEO summary for AI crawlers
- `public/404.html` — true 404 for static/Apache/Nginx
- `public/.htaccess` — Apache redirects, canonical host, security/cache headers
- `deploy/nginx.conf` — Nginx redirects, canonical host, security/cache headers
- `HANDOFF.md` — off-site checklist + JSON-LD validation steps
- `DESIGN.md` — design rationale
- `SEO-META.md` — title / description / canonical table

## Consultation form backend

`POST /api/consultation/` validates the form, saves the request to `data/consultations.jsonl`, and can notify staff by email and/or webhook.

Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=re_xxx                 # same provider used by the prior Django site
CONTACT_EMAIL_RECIPIENT=eyelevelhicksville@gmail.com
DEFAULT_FROM_EMAIL=Eye Level Hicksville <onboarding@resend.dev>
CONSULTATION_WEBHOOK_URL=             # optional CRM/Zapier/Make endpoint
```

Without `RESEND_API_KEY`, submissions are still stored locally so the form works in development. With the key set, each request is emailed to `CONTACT_EMAIL_RECIPIENT` (default `eyelevelhicksville@gmail.com`).

## Deploy (Vercel)

This site replaces the older Django + `vercel.json` Python build. The repo includes a Next.js `vercel.json`.

In the Vercel project **Build & Development Settings**:

1. Framework Preset: **Next.js** (not Other / Python)
2. Build Command: `npm run build` (default)
3. Output Directory: **leave empty** — do not set `public` or `static`
4. Install Command: `npm install`
5. Add env vars: `RESEND_API_KEY`, `CONTACT_EMAIL_RECIPIENT`, `DEFAULT_FROM_EMAIL`
6. Redeploy from the latest `main` commit

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, WebP imagery.

