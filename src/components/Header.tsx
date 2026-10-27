"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/site";

const navItems = [
  { label: "Math Tutoring", path: "/math-tutoring-hicksville/" },
  { label: "English Tutoring", path: "/english-tutoring-hicksville/" },
  { label: "Free Level Test", path: "/free-level-test/" },
  { label: "Parent FAQ", path: "/faq/" },
  { label: "Contact", path: "/contact/" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path.replace(/\/$/, ""));
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-slate-900 hover:text-amber-700 transition-colors whitespace-nowrap shrink-0"
          >
            Eye Level Learning Center of Hicksville
          </Link>

          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`whitespace-nowrap shrink-0 py-2 border-b-2 transition-colors ${
                  isActive(item.path)
                    ? "border-amber-600 text-slate-900 font-semibold"
                    : "border-transparent hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${SITE.telephoneTel}`}
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4 text-amber-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>{SITE.telephone}</span>
            </a>
            <Link
              href="/free-level-test/"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] flex items-center"
            >
              Book Free Test
            </Link>
          </div>

          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium min-h-[44px] flex items-center ${
                isActive(item.path)
                  ? "bg-amber-50 text-amber-900 font-semibold"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${SITE.telephoneTel}`}
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-800 min-h-[44px]"
            >
              <span>Call:</span>
              <span className="text-amber-700">{SITE.telephone}</span>
            </a>
            <Link
              href="/free-level-test/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-amber-600 text-white font-semibold rounded-lg text-sm min-h-[44px] flex items-center justify-center"
            >
              Book Free Level Test
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
