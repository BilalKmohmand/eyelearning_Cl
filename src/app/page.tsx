import Image from "next/image";
import Link from "next/link";
import { AtAGlance } from "@/components/AtAGlance";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FactStrip } from "@/components/FactStrip";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { MapSection } from "@/components/MapSection";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      <JsonLd data={schemasForPage("home")} />

      <section className="container hero">
        <div className="reveal">
          <p className="hero-brand">Eye Level Learning Center of Hicksville</p>
          <h1>Math and English Tutoring in Hicksville, NY</h1>
          <p className="section-lead" style={{ marginTop: "1rem" }}>
            After-school Math and English instruction for Pre-K through Grade 12,
            with a free diagnostic level test to set the starting point and
            one-to-one coaching that supports self-directed learning.
          </p>
          <div className="hero-cta">
            <Link href="/free-level-test/" className="btn btn-primary">
              {SITE.cta}
            </Link>
            <a href={`tel:${SITE.telephoneTel}`} className="btn btn-ghost">
              Call {SITE.telephoneDisplay}
            </a>
          </div>
        </div>
        <div className="hero-visual reveal reveal-delay">
          <Image
            src="/images/hero-study.svg"
            alt="Calm study desk with books beside a window overlooking trees"
            width={800}
            height={600}
            priority
          />
        </div>
      </section>

      <FactStrip />

      <section className="section" aria-labelledby="process-heading">
        <div className="container">
          <h2 id="process-heading" className="section-title">
            A clear three-step process
          </h2>
          <p className="section-lead">
            Every student begins with measurement, then follows a sequenced plan
            with coaching that builds independence.
          </p>
          <div className="process-grid">
            <article className="process-step panel reveal">
              <div className="process-num" aria-hidden="true">
                01
              </div>
              <h3>Diagnostic level test</h3>
              <p>
                A free level test establishes the accurate starting point in Math
                or English before any enrollment decision.
              </p>
            </article>
            <article className="process-step panel reveal reveal-delay">
              <div className="process-num" aria-hidden="true">
                02
              </div>
              <h3>Step-by-step curriculum</h3>
              <p>
                A systematic curriculum advances one carefully designed step at a
                time, matched to what the diagnostic reveals.
              </p>
            </article>
            <article className="process-step panel reveal reveal-delay-2">
              <div className="process-num" aria-hidden="true">
                03
              </div>
              <h3>One-to-one coaching</h3>
              <p>
                Instructors coach each student individually so learning stays
                self-directed, steady, and accountable.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "rgba(255,255,255,0.55)" }}
        aria-labelledby="compare-heading"
      >
        <div className="container">
          <h2 id="compare-heading" className="section-title">
            Math and English under one roof
          </h2>
          <p className="section-lead">
            Families in Hicksville can address both subjects in a single
            neighborhood center rather than coordinating separate programs.
          </p>
          <div className="compare-grid">
            <article className="panel">
              <h3>Math</h3>
              <p>
                Instruction covers basic arithmetic and critical-thinking math,
                with Summit of Math available for advanced study. Placement is
                based on the diagnostic, not grade alone.
              </p>
              <Link href="/math-tutoring-hicksville/">
                Explore Math tutoring in Hicksville
              </Link>
            </article>
            <article className="panel">
              <h3>English</h3>
              <p>
                Reading is paired with writing in four forms: narrative,
                informational, opinion, and research—skills that transfer across
                school subjects.
              </p>
              <Link href="/english-tutoring-hicksville/">
                Explore English tutoring in Hicksville
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="reasons-heading">
        <div className="container">
          <h2 id="reasons-heading" className="section-title">
            Reasons families choose this Hicksville center
          </h2>
          <ul className="reasons-list">
            <li>
              <h3>Local and easy to reach</h3>
              <p>
                Located at 760 S Broadway in Hicksville, serving nearby towns
                including Plainview, Bethpage, Syosset, Jericho, Westbury,
                Levittown, and Old Bethpage.
              </p>
            </li>
            <li>
              <h3>Two subjects, one center</h3>
              <p>
                Math and English writing are offered together. Nearby math-only
                options include Mathnasium Plainview Hicksville; Kumon operates
                at 495 S Broadway, Hicksville.
              </p>
            </li>
            <li>
              <h3>Starts with a free diagnostic</h3>
              <p>
                The primary next step is a free level test and consultation—no
                guesswork about where to begin.
              </p>
            </li>
            <li>
              <h3>Built for Pre-K through Grade 12</h3>
              <p>
                Programs support a wide age range, with emphasis on elementary
                and middle school learners who need steady after-school practice.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="home-faq-heading">
        <div className="container">
          <h2 id="home-faq-heading" className="section-title">
            Parent FAQ
          </h2>
          <p className="section-lead">
            Direct answers about testing, scheduling, grades, and how this
            center compares with other Hicksville options.
          </p>
          <FaqList />
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/faq/">View the full parent FAQ</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="consultation-form">
        <div className="container" style={{ maxWidth: "48rem" }}>
          <ConsultationForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AtAGlance />
        </div>
      </section>

      <MapSection />
    </>
  );
}
