import { AtAGlance } from "@/components/AtAGlance";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schemasForPage("contact")} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Contact & Directions (Hicksville, NY)" },
        ]}
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Center Location &amp; Inquiries
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Contact Eye Level Learning Center of Hicksville
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Located at 760 S Broadway, Hicksville, NY 11801. Call 516-597-5300 or
            schedule an in-person diagnostic consultation using our request form.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Center Information</h2>
                <div className="space-y-4 text-sm text-slate-700">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="block text-slate-900 font-semibold mb-1">Business Name:</strong>
                    {SITE.name}
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="block text-slate-900 font-semibold mb-1">Physical Address:</strong>
                    {SITE.address.full}
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="block text-slate-900 font-semibold mb-1">Telephone:</strong>
                    <a href={`tel:${SITE.telephoneTel}`} className="text-amber-700 font-bold hover:underline">
                      {SITE.telephone}
                    </a>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <strong className="block text-slate-900 font-semibold mb-2">Operating Hours:</strong>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {SITE.hours.lines.map((line) => (
                        <li key={line.days}>
                          {line.days}: {line.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <a
                href={SITE.mapDirectionsUrl}
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
          <AtAGlance />
        </div>
      </section>
    </>
  );
}
