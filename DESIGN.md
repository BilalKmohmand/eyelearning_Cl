# Design rationale

1. Direction: “Quiet Study Hall” — calm neighborhood education, not a national franchise template.
2. Palette: ink navy `#0D2137`, mist paper `#F3F6F8`, forest accent `#2F6F5E`, warm CTA `#B86A1C`.
3. Display type: Fraunces (Georgia fallback). Text type: Figtree (Segoe UI fallback).
4. Spacing scale: 4–96px via `--space-*`; components use shared `.btn`, `.panel`, `.section` tokens.
5. Layout: sticky local header + mobile Call / Book bar; homepage order matches the brief exactly.
6. Imagery: original SVG study illustrations (no national-site photos, GIFs, or autoplay video).
7. Motion: restrained rise-in on hero/process only; respects `prefers-reduced-motion`.
8. Distinct from national Eye Level: local-first IA, NAP strip, GEO “At a Glance,” no country nav or locator.
