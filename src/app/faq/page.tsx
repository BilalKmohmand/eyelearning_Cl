import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

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

      <section className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400 mb-3">
            Parent FAQ · Hicksville, NY
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-4">
            Straight answers before you book
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Search by topic or open a question below. Still unsure? Call us—we
            are happy to talk through what the first visit looks like for your
            child.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqList />
          <p className="mt-10 text-sm text-slate-600">
            Ready when you are:{" "}
            <Link
              href="/free-level-test/"
              className="font-semibold text-amber-700 underline"
            >
              book a free level test
            </Link>
            .
          </p>
        </div>
      </section>

      <PageCta
        tone="dark"
        heading="Didn’t see your question?"
        body="Book a free level test and bring your questions to the parent review—or call the Hicksville center and ask us directly."
      />
    </>
  );
}
