import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { FAQ_ITEMS, SITE } from "@/lib/site";

export const metadata = buildMetadata("faq");

export default function FaqPage() {
  return (
    <>
      <JsonLd data={schemasForPage("faq")} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Parent FAQ (Hicksville, NY)" },
        ]}
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Clear Answers for Families
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Frequently Asked Questions in Hicksville, NY
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Find detailed information regarding our diagnostic level testing, session
            scheduling, grade coverage, curriculum comparisons, and tuition
            determination at Eye Level Learning Center of Hicksville.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {item.question}
              </h2>
              <div className="p-4 bg-white rounded-lg border border-slate-200 mb-4">
                <span className="block text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                  Direct Response
                </span>
                <p className="text-slate-900 font-medium text-sm sm:text-base leading-relaxed">
                  {item.shortAnswer}
                </p>
              </div>
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Supporting Detail
                </span>
                <p>{item.detailedAnswer}</p>
              </div>
            </article>
          ))}

          <div className="p-8 bg-amber-50 rounded-xl border border-amber-200 text-center space-y-4">
            <h3 className="text-xl font-bold text-amber-950">
              Have More Questions for Our Hicksville Instructors?
            </h3>
            <p className="text-sm text-amber-900 max-w-xl mx-auto">
              Our instructional team at 760 S Broadway is happy to discuss your
              child’s specific learning needs and demonstrate sample booklets in
              person.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/free-level-test/"
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-lg transition-colors min-h-[44px] inline-flex items-center justify-center"
              >
                Book Free Level Test
              </Link>
              <a
                href={`tel:${SITE.telephoneTel}`}
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm rounded-lg transition-colors border border-slate-300 min-h-[44px] inline-flex items-center justify-center"
              >
                Call {SITE.telephone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
