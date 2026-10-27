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

- `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`
- `public/404.html` (true 404 for static/Apache/Nginx)
- `public/.htaccess` — Apache redirects, canonical host, security/cache headers
- `deploy/nginx.conf` — Nginx redirects, canonical host, security/cache headers
- `HANDOFF.md` — off-site checklist + JSON-LD validation steps
- `DESIGN.md` — design rationale

## Consultation form

`POST /api/consultation` validates the payload and returns JSON. Wire this stub to your CRM or email provider before production; delivery is outside the front-end scope.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, original SVG assets.
