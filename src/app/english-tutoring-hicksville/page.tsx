import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("english");

export default function EnglishPage() {
  return (
    <>
      <JsonLd data={schemasForPage("english")} />
      <div className="container page-hero">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "English Tutoring" },
          ]}
        />
        <h1>English Tutoring in Hicksville, NY</h1>
        <p className="section-lead">
          Reading and writing tutoring at Eye Level Learning Center of
          Hicksville helps students build comprehension and express ideas with
          clarity across four writing forms.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <Image
            src="/images/english-desk.svg"
            alt="Open book and lined writing paper with a pen on a desk"
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
            <h2>Reading and writing together</h2>
            <p>
              English instruction develops reading alongside writing in four
              forms: narrative, informational, opinion, and research. Students
              practice organizing ideas, supporting claims, and revising for
              clarity.
            </p>
            <h3>Individual starting points</h3>
            <p>
              A free diagnostic level test identifies the right entry point. A
              step-by-step curriculum follows, with one-to-one coaching that
              keeps progress self-directed rather than locked to a classroom
              pace.
            </p>
            <h3>Convenient for Hicksville families</h3>
            <p>
              Because Math and English are offered in the same center, parents
              can schedule after-school support for both subjects at 760 S
              Broadway without managing separate locations.
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
