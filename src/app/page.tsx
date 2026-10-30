import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("home");

const steps = [
  {
    title: "Free level test",
    body: "Your child sits for a calm diagnostic at 760 S Broadway so we can see what is solid and what still needs practice.",
  },
  {
    title: "Parent conversation",
    body: "We walk you through the results in plain language and show the booklet path that fits your child—not a one-size grade label.",
  },
  {
    title: "Steady weekly coaching",
    body: "Your child works step-by-step booklets with one-to-one coaching, then practices at home between visits.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={schemasForPage("home")} />

      {/* Full-bleed photo hero — brand + one CTA */}
      <section className="relative min-h-[78vh] flex items-end overflow-hidden bg-slate-900 text-white">
        <Image
          src={SITE.heroImage}
          alt="Students working on individualized booklets at Eye Level Learning Center of Hicksville"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300 mb-4">
            Eye Level Learning Center of Hicksville
          </p>
          <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-5">
            Math &amp; English tutoring that meets your child where they are
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
            Pre-K through Grade 12 in Hicksville, NY. Start with a free level
            test—then a clear plan you can understand.
          </p>
          <Link
            href="/free-level-test/"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-base transition-colors shadow-lg shadow-amber-900/30"
          >
            Book Free Level Test
          </Link>
        </div>
      </section>

      {/* How it works strip */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              How it works for Hicksville families
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Three calm steps. No pressure to enroll on day one.
            </p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="relative pl-12 md:pl-0 md:pt-12">
                <span className="absolute left-0 top-0 md:left-0 md:top-0 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-amber-300 text-sm font-bold">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Two large program tiles */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Two programs. One Hicksville center.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link
              href="/math-tutoring-hicksville/"
              className="group relative min-h-[280px] overflow-hidden rounded-none sm:rounded-2xl bg-slate-900 text-white"
            >
              <Image
                src={SITE.mathImage}
                alt="Child working through Eye Level Math booklets"
                fill
                className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-300 mb-2">
                  Eye Level Math
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  From basic arithmetic to Summit of Math
                </h3>
                <p className="text-sm text-slate-200 max-w-md mb-4">
                  Calculation fluency plus critical-thinking problems, coached
                  one-to-one in small steps.
                </p>
                <span className="text-sm font-semibold text-amber-300 group-hover:underline">
                  Explore Math tutoring →
                </span>
              </div>
            </Link>

            <Link
              href="/english-tutoring-hicksville/"
              className="group relative min-h-[280px] overflow-hidden rounded-none sm:rounded-2xl bg-slate-900 text-white"
            >
              <Image
                src={SITE.englishImage}
                alt="Student practicing reading and writing at Eye Level Hicksville"
                fill
                className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-300 mb-2">
                  Eye Level English
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  Reading plus four kinds of writing
                </h3>
                <p className="text-sm text-slate-200 max-w-md mb-4">
                  Narrative, informational, opinion, and research—so school
                  writing feels less scary at home.
                </p>
                <span className="text-sm font-semibold text-amber-300 group-hover:underline">
                  Explore English tutoring →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust band — placeholder testimonial */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700 mb-4">
            From a Hicksville parent
          </p>
          <blockquote className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-4">
            “[PLACEHOLDER: Short parent quote about feeling clearer after the
            level test and seeing steadier homework habits.]”
          </blockquote>
          <p className="text-sm text-slate-500">
            — [PLACEHOLDER: Parent first name], Hicksville
          </p>
        </div>
      </section>

      {/* Hours + map */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Visit us in Hicksville, NY
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We serve families from Hicksville, Plainview, Bethpage, Syosset,
              Jericho, Westbury, Levittown, and Old Bethpage.
            </p>
            <address className="not-italic text-slate-900 font-semibold">
              {SITE.address.full}
            </address>
            <a
              href={`tel:${SITE.telephoneTel}`}
              className="inline-flex text-amber-700 font-bold hover:underline"
            >
              {SITE.telephoneDisplay}
            </a>
            <ul className="text-sm text-slate-700 space-y-2 border-t border-slate-200 pt-4">
              {SITE.hours.lines.map((line) => (
                <li key={line.days} className="flex justify-between gap-4 max-w-sm">
                  <span className="font-medium">{line.days}</span>
                  <span>{line.hours}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact/"
              className="inline-flex text-sm font-semibold text-slate-900 underline underline-offset-4"
            >
              Directions &amp; contact details
            </Link>
          </div>
          <div className="min-h-[280px] overflow-hidden border border-slate-200 bg-slate-200">
            <iframe
              title="Map to Eye Level Learning Center of Hicksville"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-73.545%2C40.748%2C-73.515%2C40.768&amp;layer=mapnik&amp;marker=40.758%2C-73.530"
              className="w-full h-full min-h-[280px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <PageCta
        tone="dark"
        heading="Curious what level fits your child?"
        body="Book a free level test at Eye Level Learning Center of Hicksville, or call and we’ll find a time that works for your family."
      />
    </>
  );
}
