import Link from "next/link";
import { SITE } from "@/lib/site";

export function MobileActionBar() {
  return (
    <nav
      aria-label="Mobile Quick Actions"
      className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 sm:hidden shadow-lg mobile-action-bar"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${SITE.telephoneTel}`}
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-sm rounded-lg min-h-[44px] transition-colors border border-slate-300"
          aria-label={`Call Eye Level Learning Center of Hicksville at ${SITE.telephone}`}
        >
          <svg
            className="w-4 h-4 text-amber-600 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="whitespace-nowrap">Call Center</span>
        </a>

        <Link
          href="/free-level-test/"
          className="flex items-center justify-center px-3 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-lg min-h-[44px] transition-colors shadow-sm whitespace-nowrap"
          aria-label="Book a free level test and consultation"
        >
          Book Free Test
        </Link>
      </div>
    </nav>
  );
}
