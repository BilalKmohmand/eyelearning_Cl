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
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Free Level Test" },
        ]}
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Diagnostic Assessment
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Free Level Test in Hicksville, NY
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Book a free diagnostic level test and consultation at Eye Level
            Learning Center of Hicksville. The test establishes your child’s
            starting point before any enrollment.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What to expect</h2>
            <ol className="list-decimal pl-5 space-y-3 text-slate-700 text-sm sm:text-base">
              <li>
                Request a visit by phone at{" "}
                <a href={`tel:${SITE.telephoneTel}`} className="text-amber-700 font-semibold underline">
                  {SITE.telephone}
                </a>{" "}
                or through the form below.
              </li>
              <li>Your child completes a diagnostic level test in Math, English, or both.</li>
              <li>
                An instructor reviews the results with you and outlines a step-by-step
                path with one-to-one coaching.
              </li>
            </ol>
            <p className="mt-4 text-sm text-slate-600">
              Learn more about{" "}
              <Link href="/math-tutoring-hicksville/" className="text-amber-700 font-semibold">
                Math tutoring
              </Link>{" "}
              or{" "}
              <Link href="/english-tutoring-hicksville/" className="text-amber-700 font-semibold">
                English tutoring
              </Link>
              .
            </p>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
