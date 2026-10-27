import { AtAGlance } from "@/components/AtAGlance";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { MapSection } from "@/components/MapSection";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schemasForPage("contact")} />
      <div className="container page-hero">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Contact" },
          ]}
        />
        <h1>Contact Eye Level Learning Center of Hicksville</h1>
        <p className="section-lead">
          Visit the center, call during open hours, or request a free level test
          and consultation online.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "grid", gap: "2rem" }}>
          <div className="panel">
            <h2>Visit or call</h2>
            <p>
              <strong>Address:</strong>{" "}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address.full)}`}
              >
                {SITE.address.full}
              </a>
            </p>
            <p>
              <strong>Telephone:</strong>{" "}
              <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>
            </p>
            <h3>Hours</h3>
            <ul>
              {SITE.hours.lines.map((line) => (
                <li key={line.days}>
                  {line.days}: {line.hours}
                </li>
              ))}
            </ul>
            <p>
              Service area includes Hicksville, Plainview, Bethpage, Syosset,
              Jericho, Westbury, Levittown, and Old Bethpage.
            </p>
          </div>

          <AtAGlance />

          <div style={{ maxWidth: "48rem" }}>
            <ConsultationForm />
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
