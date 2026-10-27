import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("levelTest");

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

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Diagnostic Starting Point · No Obligation
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Book a Free Diagnostic Level Test in Hicksville, NY
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Discover your child’s precise mathematical calculation abilities,
            critical-thinking depth, reading comprehension, and writing proficiency
            with an in-person diagnostic assessment at 760 S Broadway.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              What to Expect During the Diagnostic Evaluation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every child learns at a distinctive pace. The Eye Level diagnostic
              evaluation identifies what your child has mastered and reveals specific
              knowledge gaps that standard classroom tests often overlook.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-amber-700 font-bold text-sm mb-2">Stage 01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Comprehensive Assessment
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your child completes age-appropriate diagnostic assessment booklets
                under the observation of our instructional staff. We evaluate speed,
                accuracy, reasoning logic, and problem-solving habits.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-amber-700 font-bold text-sm mb-2">Stage 02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Parent Consultation &amp; Review
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our center director reviews the diagnostic evaluation directly with
                you. We review specific strengths, explain missing foundational steps,
                and answer all questions regarding your child’s learning trajectory.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-amber-700 font-bold text-sm mb-2">Stage 03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Tailored Learning Plan
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We present an individualized study roadmap starting exactly at your
                child’s comfortable mastery point, ensuring steady small-step
                progression without academic frustration.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <ConsultationForm id="level-test-form" />
          </div>
        </div>
      </section>
    </>
  );
}
