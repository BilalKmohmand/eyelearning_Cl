import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("faq");

export default function FaqPage() {
  return (
    <>
      <JsonLd data={schemasForPage("faq")} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Parent FAQ" },
        ]}
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Parent Questions
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Parent FAQ for Tutoring in Hicksville, NY
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Straightforward answers for parents considering Eye Level Learning
            Center of Hicksville. For tuition details, book a free consultation—
            prices are not listed online because plans are individualized.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqList />
          <p className="mt-10">
            <Link
              href="/free-level-test/"
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-lg min-h-[44px]"
            >
              {SITE.cta}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
