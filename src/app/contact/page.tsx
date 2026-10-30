import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("contact");

const directions = [
  {
    route: "From the Long Island Expressway (I-495)",
    detail:
      "[PLACEHOLDER: Exit guidance toward S Broadway / Hicksville.] Continue to 760 S Broadway. Look for Eye Level Learning Center of Hicksville at street level.",
  },
  {
    route: "From the Northern State Parkway",
    detail:
      "[PLACEHOLDER: Exit guidance toward Hicksville / Broadway.] Follow local signs to S Broadway and continue to 760.",
  },
  {
    route: "From the Southern State Parkway",
    detail:
      "[PLACEHOLDER: Exit guidance toward Hicksville.] Connect to local roads ending at S Broadway; the center is at 760 S Broadway.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schemasForPage("contact")} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Contact" },
        ]}
      />

      {/* Map first */}
      <section className="bg-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-[320px] sm:min-h-[420px] w-full">
            <iframe
              title="Map showing Eye Level Learning Center of Hicksville at 760 S Broadway"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-73.545%2C40.748%2C-73.515%2C40.768&amp;layer=mapnik&amp;marker=40.758%2C-73.530"
              className="w-full h-[320px] sm:h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700 mb-2">
                Contact · Hicksville, NY
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                Find us on S Broadway
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                Stop by during center hours or call ahead. To schedule a free
                level test, use the booking page—we keep the form in one place
                so nothing gets lost.
              </p>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-6 space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Address
              </h2>
              <address className="not-italic text-lg font-bold text-slate-900">
                {SITE.address.full}
              </address>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`tel:${SITE.telephoneTel}`}
                  className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm"
                >
                  Call {SITE.telephone}
                </a>
                <a
                  href={SITE.mapDirectionsUrl}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 font-semibold text-sm"
                >
                  Open in Google Maps
                </a>
              </div>
              <p className="text-xs text-slate-500">
                Prefer email?{" "}
                <span className="font-medium text-slate-700">
                  [PLACEHOLDER: center email address]
                </span>
              </p>
            </div>

            <Link
              href="/free-level-test/"
              className="inline-flex items-center justify-center w-full min-h-[48px] px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm"
            >
              Book Free Level Test
            </Link>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Center hours
              </h2>
              <table className="w-full text-sm text-left border border-slate-200">
                <caption className="sr-only">
                  Eye Level Learning Center of Hicksville weekly hours
                </caption>
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Day
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SITE.hours.lines.map((line) => (
                    <tr key={line.days} className="border-t border-slate-200">
                      <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                        {line.days}
                      </th>
                      <td className="px-4 py-3 text-slate-700">{line.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Driving directions
              </h2>
              <ul className="space-y-4">
                {directions.map((item) => (
                  <li
                    key={item.route}
                    className="border-l-2 border-amber-500 pl-4"
                  >
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      {item.route}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
