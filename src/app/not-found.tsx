import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20 bg-slate-50">
      <div className="max-w-xl text-center space-y-6">
        <div className="text-xs font-semibold tracking-wider uppercase text-amber-700">
          404 Error
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Page not found
        </h1>
        <p className="text-slate-600 leading-relaxed">
          The page you requested is not available at Eye Level Learning Center of
          Hicksville. Return to the homepage or call the center for help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg min-h-[44px] inline-flex items-center justify-center"
          >
            Go to homepage
          </Link>
          <a
            href={`tel:${SITE.telephoneTel}`}
            className="px-6 py-3 bg-white border border-slate-300 text-slate-900 font-semibold rounded-lg min-h-[44px] inline-flex items-center justify-center"
          >
            Call {SITE.telephoneDisplay}
          </a>
        </div>
        <p className="text-sm text-slate-500">
          {SITE.name} · {SITE.address.full}
        </p>
      </div>
    </div>
  );
}
