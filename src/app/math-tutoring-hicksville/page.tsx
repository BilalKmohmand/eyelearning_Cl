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
                  alt="Student solving step-by-step math problems at Eye Level Learning Center of Hicksville"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Dual-Focus Mathematical Structure
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Standard tutoring programs often train children solely in memorized
              calculation steps. Eye Level trains both calculation fluency and
              conceptual logic so students thrive in school exams and competitive
              STEM coursework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                Pillar One
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Basic Arithmetic Fluency
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Rapid, accurate computation is essential for mathematical
                confidence. Our systematic booklets guide students from number
                recognition through whole numbers, fractions, decimals, arithmetic
                operations, and equations.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                <li>Number sense &amp; mental arithmetic</li>
                <li>Four fundamental operations mastery</li>
                <li>Fractions, percentages, and proportions</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                Pillar Two
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Critical-Thinking Math
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Students apply logic to solve unfamiliar challenges. This branch
                develops spatial reasoning, geometric relationships, pattern
                recognition, and multi-sentence word problem analysis.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                <li>Spatial visualization &amp; geometry</li>
                <li>Multi-step mathematical reasoning</li>
                <li>Logic puzzles and pattern discovery</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                Pillar Three
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Summit of Math</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Designed for middle and high school students, Summit of Math
                provides rigorous secondary curriculum alignment, preparing learners
                for Pre-Algebra, Algebra I &amp; II, and Geometry.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                <li>Secondary curriculum alignment</li>
                <li>Algebraic expressions and graphing</li>
                <li>Standardized school exam readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              How Eye Level Math Compares Locally in Hicksville
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Long Island parents frequently compare Eye Level Learning Center of
              Hicksville with other local providers along South Broadway and
              throughout Nassau County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Eye Level vs. Mathnasium Plainview Hicksville
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mathnasium focuses exclusively on mathematics. At Eye Level Learning
                Center of Hicksville (760 S Broadway), families benefit from
                comprehensive math instruction plus complete four-domain English
                reading and writing under one roof, eliminating the need to
                coordinate two separate tutoring facilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Eye Level vs. Kumon (495 S Broadway, Hicksville)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kumon emphasizes repetitive calculation worksheets and speed drills.
                Eye Level balances foundational arithmetic with critical thinking,
                problem-solving depth, and one-to-one coaching that supports
                self-directed learning and genuine conceptual understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="math-booking" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationForm id="math-consultation-form" />
        </div>
      </section>
    </>
  );
}
