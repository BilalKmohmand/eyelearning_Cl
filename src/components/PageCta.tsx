import Link from "next/link";
import { SITE } from "@/lib/site";

type PageCtaProps = {
  heading?: string;
  body?: string;
  tone?: "light" | "dark" | "amber";
  className?: string;
};

export function PageCta({
  heading = "Ready to see where your child stands?",
  body = "Book a free level test at our Hicksville center, or call us and we’ll help you choose a time that fits your week.",
  tone = "light",
  className = "",
}: PageCtaProps) {
  const shell =
    tone === "dark"
      ? "bg-slate-900 text-white"
      : tone === "amber"
        ? "bg-amber-50 border border-amber-200 text-slate-900"
        : "bg-slate-100 border border-slate-200 text-slate-900";

  const muted =
    tone === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <section className={`py-14 sm:py-16 ${shell} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className={`text-2xl sm:text-3xl font-bold ${tone === "dark" ? "text-white" : "text-slate-900"}`}>
          {heading}
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed max-w-2xl mx-auto ${muted}`}>
          {body}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
          <Link
            href="/free-level-test/"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-colors"
          >
            Book Free Level Test
          </Link>
          <a
            href={`tel:${SITE.telephoneTel}`}
            className={`inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${
              tone === "dark"
                ? "bg-slate-800 hover:bg-slate-700 text-white border border-slate-600"
                : "bg-white hover:bg-slate-50 text-slate-900 border border-slate-300"
            }`}
          >
            Call {SITE.telephone}
          </a>
        </div>
      </div>
    </section>
  );
}
