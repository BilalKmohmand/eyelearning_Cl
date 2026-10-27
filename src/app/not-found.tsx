import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="py-20 bg-slate-50 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
          Error 404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Page Not Located
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
          The page you requested is not available on the Eye Level Learning Center
          of Hicksville website. It may have been updated as part of our new site
          architecture.
        </p>

        <div className="p-6 bg-white rounded-xl border border-slate-200 mb-8 text-sm">
          <p className="text-slate-800 font-semibold mb-2">
            Looking to book a diagnostic level test or speak with an instructor?
          </p>
          <p className="text-slate-600 mb-3">Call our Hicksville center directly at:</p>
          <a
            href={`tel:${SITE.telephoneTel}`}
            className="text-xl font-bold text-amber-700 hover:underline block"
          >
            {SITE.telephone}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg transition-colors min-h-[44px] flex items-center justify-center"
          >
            Return to Homepage
          </Link>
          <a
            href={`tel:${SITE.telephoneTel}`}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-lg transition-colors min-h-[44px] flex items-center justify-center"
          >
            Call 516-597-5300
          </a>
        </div>
      </div>
    </div>
  );
}
