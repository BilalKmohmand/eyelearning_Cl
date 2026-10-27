import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("levelTest");

export default function FreeLevelTestPage() {
  return (
    <>
      <JsonLd data={schemasForPage("levelTest")} />
      <div className="container page-hero">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Free Level Test" },
          ]}
        />
        <h1>Free Level Test in Hicksville, NY</h1>
        <p className="section-lead">
          Book a free diagnostic level test and consultation at Eye Level
          Learning Center of Hicksville. The test establishes your child’s
          starting point before any enrollment.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div className="panel">
            <h2>What to expect</h2>
            <ol>
              <li>
                Request a visit by phone at{" "}
                <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>{" "}
                or through the form below.
              </li>
              <li>
                Your child completes a diagnostic level test in Math, English,
                or both.
              </li>
              <li>
                An instructor reviews the results with you and outlines a
                step-by-step path with one-to-one coaching.
              </li>
            </ol>
            <p>
              Visits are scheduled during center hours: Tuesday to Friday, 3:00
              PM to 7:00 PM, and Saturday, 10:00 AM to 2:00 PM. The center is
              closed Sunday and Monday.
            </p>
            <p>
              Prefer to call now?{" "}
              <a href={`tel:${SITE.telephoneTel}`} className="btn btn-secondary">
                Call {SITE.telephoneDisplay}
              </a>
            </p>
            <p style={{ marginTop: "1rem" }}>
              Learn more about{" "}
              <Link href="/math-tutoring-hicksville/">Math tutoring</Link> or{" "}
              <Link href="/english-tutoring-hicksville/">English tutoring</Link>
              .
            </p>
          </div>

          <div style={{ maxWidth: "48rem" }}>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
