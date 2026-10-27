import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("math");

export default function MathPage() {
  return (
    <>
      <JsonLd data={schemasForPage("math")} />
      <div className="container page-hero">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Math Tutoring" },
          ]}
        />
        <h1>Math Tutoring in Hicksville, NY</h1>
        <p className="section-lead">
          Eye Level Learning Center of Hicksville provides Math instruction in
          basic arithmetic, critical-thinking math, and Summit of Math for
          students in Pre-K through Grade 12.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <Image
            src="/images/math-desk.svg"
            alt="Graph paper, geometric shapes, and math notes arranged on a study desk"
            width={800}
            height={500}
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "0.75rem",
              border: "1px solid var(--color-line)",
            }}
          />

          <div className="panel">
            <h2>What Math covers here</h2>
            <p>
              Students work through foundational arithmetic and progress into
              problems that require critical thinking. Summit of Math is
              available for learners ready for advanced challenge beyond the
              core sequence.
            </p>
            <h3>How placement works</h3>
            <p>
              A diagnostic level test establishes the starting point. From
              there, a systematic, step-by-step curriculum guides practice while
              instructors provide one-to-one coaching that supports
              self-directed learning.
            </p>
            <h3>Why parents pair Math with English</h3>
            <p>
              Unlike nearby math-only centers such as Mathnasium Plainview
              Hicksville, this location also offers English reading and writing
              under one roof. Kumon operates at 495 S Broadway, Hicksville;
              families comparing options can begin with a free consultation
              here.
            </p>
            <p>
              <Link href="/free-level-test/" className="btn btn-primary">
                {SITE.cta}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "48rem" }}>
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
