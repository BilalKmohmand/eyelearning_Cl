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
      <div className="container page-hero">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Parent FAQ" },
          ]}
        />
        <h1>Parent FAQ for Tutoring in Hicksville, NY</h1>
        <p className="section-lead">
          Straightforward answers for parents considering Eye Level Learning
          Center of Hicksville. For tuition details, book a free consultation—
          prices are not listed online because plans are individualized.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <FaqList />
          <p style={{ marginTop: "2rem" }}>
            Ready for the next step?{" "}
            <Link href="/free-level-test/" className="btn btn-primary">
              {SITE.cta}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
