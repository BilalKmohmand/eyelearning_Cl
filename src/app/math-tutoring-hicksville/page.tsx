import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("math");

export default function MathPage() {
  return (
    <>
      <JsonLd data={schemasForPage("math")} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Math Tutoring (Hicksville, NY)" },
        ]}
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                Foundational &amp; Critical-Thinking Mathematics
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Math Tutoring in Hicksville, NY
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                At Eye Level Learning Center of Hicksville, we build mathematical
                mastery by balancing fundamental computational fluency with deep,
                structured critical-thinking problem solving.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href="#math-booking"
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-lg transition-colors text-center min-h-[44px] flex items-center justify-center"
                >
                  Book Free Math Level Test
                </a>
                <a
                  href={`tel:${SITE.telephoneTel}`}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-lg transition-colors border border-slate-700 text-center min-h-[44px] flex items-center justify-center"
                >
                  Call {SITE.telephone}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-700 shadow-xl bg-slate-800">
                <Image
                  src={SITE.mathImage}
                  alt="Student working through individualized math booklets with instructor coaching"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Math covers here</h2>
            <p className="text-slate-600 leading-relaxed">
              Students work through foundational arithmetic and progress into
              problems that require critical thinking. Summit of Math is available
              for learners ready for advanced challenge beyond the core sequence.
              Placement begins with a free diagnostic level test, then a
              step-by-step curriculum with one-to-one coaching.
            </p>
          </div>
          <div id="math-booking" className="max-w-5xl">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
