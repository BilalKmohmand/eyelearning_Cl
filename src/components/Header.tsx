"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-name">Eye Level Learning Center</span>
          <span className="brand-place">of Hicksville</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/free-level-test/" className="btn btn-primary">
            {SITE.ctaShort}
          </Link>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? "✕" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`container nav-mobile${open ? " open" : ""}`}
      >
        <nav aria-label="Mobile primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/free-level-test/"
            className="btn btn-primary"
            style={{ marginTop: "1rem", width: "100%" }}
            onClick={() => setOpen(false)}
          >
            {SITE.ctaShort}
          </Link>
        </nav>
      </div>
    </header>
  );
}
