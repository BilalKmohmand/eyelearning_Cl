import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("levelTest");

const stages = [
  {
    title: "Diagnostic assessment",
    body: "Your child works through age-appropriate booklets while our instructors observe how they think—not just what they score.",
  },
  {
    title: "Parent review",
    body: "We sit with you, explain strengths and gaps in plain language, and answer every “what does this mean for school?” question.",
  },
  {
    title: "Clear next-step plan",
    body: "You leave with a recommended starting level and booklet path. Enrollment is optional—take the information home.",
  },
];

export default function FreeLevelTestPage() {
  return (
    <>
      <JsonLd data={schemasForPage("levelTest")} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Free Level Test (Hicksville, NY)" },
        ]}
      />

      {/* Sticky call affordance on mobile */}
      <div className="sticky top-20 z-30 sm:hidden bg-amber-600 text-white">
        <a
          href={`tel:${SITE.telephoneTel}`}
          className="flex items-center justify-center gap-2 min-h-[44px] text-sm font-semibold"
        >
          Call {SITE.telephone} to book
        </a>
      </div>

      <section className="bg-white py-12 sm:py-16 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-700 mb-3">
            Free · No obligation · Hicksville, NY
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Book your child’s free level test
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            One visit at 760 S Broadway shows you where Math and/or English
            truly stand—and what a calm plan would look like from here.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Three stages on your first visit
          </h2>
          <ol className="relative border-l-2 border-amber-500/50 ml-3 space-y-10">
            {stages.map((stage, index) => (
              <li key={stage.title} className="pl-8 relative">
                <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{stage.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 bg-amber-50/50 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-800 mb-3">
                What to bring
              </h2>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4">
                <li>Your child and a parent or guardian</li>
                <li>Glasses, if they use them</li>
                <li>Optional: a recent quiz or writing sample</li>
                <li>Questions you want answered after the test</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-800 mb-3">
                How long it takes
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Plan on about <strong>45 to 75 minutes</strong> for the
                diagnostic plus parent conversation, depending on Math,
                English, or both.
              </p>
              <p className="text-sm text-slate-600">
                Prefer to talk first?{" "}
                <a
                  href={`tel:${SITE.telephoneTel}`}
                  className="font-semibold text-amber-800 underline"
                >
                  Call {SITE.telephone}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-50" id="book">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Request a time that works for your family
            </h2>
            <p className="text-sm text-slate-600">
              Submit the form below and we’ll confirm by phone or email. Or
              call{" "}
              <a
                href={`tel:${SITE.telephoneTel}`}
                className="font-semibold text-amber-700 hover:underline"
              >
                {SITE.telephone}
              </a>{" "}
              during center hours.
            </p>
          </div>
          <ConsultationForm id="level-test-form" />
          <p className="mt-6 text-center text-sm text-slate-500">
            Looking for directions?{" "}
            <Link href="/contact/" className="underline font-medium text-slate-700">
              See our contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
