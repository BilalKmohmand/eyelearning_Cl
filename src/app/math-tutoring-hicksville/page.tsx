import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("math");

const ladder = [
  { label: "Pre-K – early number sense", detail: "Counting, shapes, and comfort with numbers" },
  { label: "Elementary arithmetic", detail: "Facts, place value, fractions, and fluency" },
  { label: "Critical-thinking math", detail: "Word problems and multi-step reasoning" },
  { label: "Summit of Math", detail: "Secondary topics for middle and high school" },
];

const progress = [
  {
    title: "Week one: we find the right step",
    body: "After the level test, your child starts a booklet that feels reachable—not too easy, not overwhelming.",
  },
  {
    title: "Along the way: accuracy, then speed",
    body: "Instructors coach one-to-one so your child understands why an answer works before racing through drills.",
  },
  {
    title: "Over time: independence you can see",
    body: "Fewer hints needed, cleaner homework habits, and readiness for the next booklet on the ladder.",
  },
];

export default function MathTutoringPage() {
  return (
    <>
      <JsonLd data={schemasForPage("math")} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Math Tutoring Hicksville, NY" },
        ]}
      />

      {/* Child-experience lead — split */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src={SITE.mathImage}
              alt="Student working through Eye Level Math booklets in Hicksville"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex flex-col justify-center bg-slate-50">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700 mb-3">
              Math tutoring in Hicksville, NY
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              What math feels like for your child here
            </h1>
            <p className="text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
              Your child opens a booklet matched to their level, works a small
              set of problems, and gets quiet one-to-one coaching when a step
              sticks. No loud classroom race—just clear next steps from basic
              arithmetic through critical thinking and Summit of Math.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/free-level-test/"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm"
              >
                Book Free Level Test
              </Link>
              <a
                href={`tel:${SITE.telephoneTel}`}
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 font-semibold text-sm"
              >
                Call {SITE.telephone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Level ladder */}
      <section className="py-14 sm:py-18 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            The Eye Level Math ladder
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-10 max-w-2xl">
            We place your child on the step they are ready for—then climb only
            when that step is solid.
          </p>
          <ol className="space-y-0">
            {ladder.map((rung, index) => (
              <li
                key={rung.label}
                className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start border-l-2 border-amber-500/60 pl-6 pb-10 last:pb-0 relative"
              >
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-amber-500" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    Step {index + 1}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-1">{rung.label}</h3>
                  <p className="text-sm text-slate-300">{rung.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sample booklet preview */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Inside a sample booklet
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Booklets move in small pages: a short warm-up, guided practice,
              then independent problems. At the free level test consultation,
              we show you sample pages so you can see how each step builds.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Warm-up facts", "Guided example", "Independent try"].map(
              (label, i) => (
                <div
                  key={label}
                  className="aspect-[3/4] border border-dashed border-slate-300 bg-slate-50 p-4 flex flex-col justify-between"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Page {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-2">{label}</p>
                    <div className="space-y-2">
                      <div className="h-2 bg-slate-200 rounded w-full" />
                      <div className="h-2 bg-slate-200 rounded w-4/5" />
                      <div className="h-2 bg-slate-200 rounded w-3/5" />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500">Sample layout</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Progress timeline */}
      <section className="py-14 sm:py-16 bg-amber-50/60 border-y border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            What progress looks like
          </h2>
          <div className="space-y-8">
            {progress.map((item, index) => (
              <article key={item.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-white text-sm font-bold">
                    {index + 1}
                  </span>
                  {index < progress.length - 1 ? (
                    <span className="w-px flex-1 bg-amber-200 mt-2" aria-hidden="true" />
                  ) : null}
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        tone="light"
        heading="Want to see your child’s math starting point?"
        body="Book a free level test at our Hicksville center. We’ll show you the ladder step that fits—and how Summit of Math fits later if they need it."
      />
    </>
  );
}
