# Parent-focused redesign — change log & copy

## 1. What changed on each page

| Page | Changes |
| --- | --- |
| **All** | Logo in header/footer; favicon + OG use EL mark; competitor names removed sitewide; booking form removed except Free Level Test; CTAs link to `/free-level-test/` + tap-to-call |
| **Home** | Full-bleed photo hero (one primary button); 3-step how-it-works; two program tiles; placeholder parent trust quote; hours + map; no form |
| **Math** | Split “child experience” hero; dark level ladder; sample booklet preview; progress timeline; no form |
| **English** | Editorial cream hero; 2×2 writing-form cards with sample prompts; reading skills list; sentence→report progression; no form |
| **Free Level Test** | Vertical 3-stage timeline; what-to-bring / how-long box; **only** booking form; sticky mobile call bar |
| **Parent FAQ** | Search + accordion grouped by Getting Started / Schedule & Grades / Method / Tuition; new parent questions |
| **Contact** | Map-first; address card; hours table; LIE / Northern State / Southern State directions; call + Book CTA; **no form** |

## 2. Full page copy (section order)

### Home
1. **Hero** — Brand: Eye Level Learning Center of Hicksville. H1: Math & English tutoring that meets your child where they are. Support: Pre-K through Grade 12 in Hicksville, NY. Start with a free level test—then a clear plan you can understand. CTA: Book Free Level Test.
2. **How it works** — Free level test → Parent conversation → Steady weekly coaching (bodies as on page).
3. **Programs** — Math tile / English tile (as on page).
4. **Trust** — [PLACEHOLDER] parent quote + name.
5. **Visit** — Address, phone, hours, service-area towns, map.
6. **CTA band** — Book Free Level Test + Call.

### Math
1. Split hero — H1: What math feels like for your child here (+ body on page).
2. Level ladder — Pre-K → arithmetic → critical thinking → Summit of Math.
3. Sample booklet preview — Warm-up / Guided / Independent ([PLACEHOLDER] photo note).
4. Progress timeline — Week one / Along the way / Over time.
5. CTA band.

### English
1. Editorial hero — H1: From the first sentence to a research report.
2. Four writing forms with sample prompts (Narrative, Informational, Opinion, Research).
3. Reading skills list (4 bullets on page).
4. Progression: First sentence → paragraph → multi-paragraph → research report.
5. CTA band.

### Free Level Test
1. H1: Book your child’s free level test.
2. Stages: Diagnostic → Parent review → Clear next-step plan.
3. What to bring / How long ([PLACEHOLDER: 45–75 minutes]).
4. Booking form (sole site form).

### Parent FAQ
Questions & answers live in `src/lib/site.ts` (`FAQ_ITEMS`), grouped Getting Started / Schedule & Grades / Method / Tuition.

### Contact
1. Map.
2. H1: Find us on S Broadway + address card + call / maps / [PLACEHOLDER email].
3. Hours table.
4. Directions from LIE / Northern State / Southern State ([PLACEHOLDER] exit detail).

## 3. Design notes

| Page | Layout / rhythm | Color & imagery |
| --- | --- | --- |
| Home | Full-bleed hero → strip → 2 tiles → quote → map split | Navy overlay on photo; amber CTA |
| Math | Horizontal split → dark vertical ladder → booklet grid → amber timeline | Photo left; slate-900 ladder |
| English | Centered editorial → 2×2 cards → dark skills → 4-step ribbon | Warm paper `#f7f4ef`; stone borders |
| Level test | Narrow single column; sticky call on mobile | White / slate-50; amber timeline |
| FAQ | Dark intro → accordion list | Slate-900 header; white panels |
| Contact | Edge-to-edge map → 5/7 split content | Map first; hours as real table |

Brand constants: navy `#0F2137`, amber accent, Plus Jakarta Sans / DM Sans.

## 4. Logo SVG

See `public/images/logo.svg`, `public/favicon.svg`, and inline `BrandLogo` component. Mark: navy rounded square, amber eye, white book baseline + “Eye Level / HICKSVILLE” wordmark.

## 5. Final checklist

- [x] No Kumon / Mathnasium (or other competitor) names remain in app copy
- [x] Consultation form appears only on `/free-level-test/`
- [x] Every primary page uses a different section structure
- [x] Logo in header & footer; favicon + OG updated
- [x] Parent-focused tone; [PLACEHOLDER] marks where facts are unknown
- [x] URLs, nav labels, SEO titles preserved; FAQ/contact descriptions cleaned of competitors
- [x] LocalBusiness schema still driven from `SITE` NAP + hours
