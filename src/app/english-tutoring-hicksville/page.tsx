import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("english");

export default function EnglishPage() {
  return (
    <>
      <JsonLd data={schemasForPage("english")} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "English Tutoring (Hicksville, NY)" },
        ]}
      />

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                Reading Comprehension &amp; Formal Writing Mastery
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                English Tutoring in Hicksville, NY
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Eye Level Learning Center of Hicksville guides students through
                structured reading comprehension, grammar conventions, vocabulary
                acquisition, and comprehensive writing across four vital forms.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href="#english-booking"
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-lg transition-colors text-center min-h-[44px] flex items-center justify-center"
                >
                  Book Free English Level Test
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
                  src={SITE.englishImage}
                  alt="Student reading literature and writing structured analytical notes at Eye Level Learning Center of Hicksville"
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
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-1">
              Writing Mastery
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Writing Instruction Across Four Essential Forms
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Writing is a decisive academic skill in elementary, middle, and high
              school. While standard programs focus on grammar worksheets alone, Eye
              Level teaches structured composition across four distinct genres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                form: "Form 01",
                title: "Narrative Writing",
                body: "Students construct engaging personal and imaginative narratives, structuring clear sequences of events, descriptive sensory details, character perspectives, and cohesive resolutions.",
              },
              {
                form: "Form 02",
                title: "Informational Writing",
                body: "Developing explanatory prose that clearly conveys factual knowledge, processes, and concepts using organized headings, logical topic sentences, and illustrative examples.",
              },
              {
                form: "Form 03",
                title: "Opinion Writing",
                body: "Training learners to articulate persuasive viewpoints supported by structured reasoning, textual citations, counter-argument evaluation, and decisive concluding statements.",
              },
              {
                form: "Form 04",
                title: "Research Writing",
                body: "Guiding students to gather textual evidence, synthesize findings across multiple reference sources, organize formal outlines, and draft analytical academic reports.",
              },
            ].map((item) => (
              <div key={item.form} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-amber-700 font-bold text-sm mb-2">{item.form}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="text-xs font-semibold tracking-wider uppercase text-amber-700">
                Core Language Arts
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Comprehensive Reading Comprehension &amp; Grammar
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Reading comprehension and writing are mutually reinforcing. Eye Level
                builds reading stamina and analytical precision through systematic
                study booklets tailored to each learner’s diagnostic baseline.
              </p>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="p-3.5 bg-white rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">
                    Phonics &amp; Vocabulary Acquisition:
                  </strong>
                  Etymology, context clues, prefixes, suffixes, and robust vocabulary
                  expansion.
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">Textual Analysis:</strong>
                  Identifying central themes, cause and effect, author’s purpose, and
                  figurative language.
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">
                    Grammar &amp; Sentence Mechanics:
                  </strong>
                  Parts of speech, punctuation rules, sentence variety, and paragraph
                  flow.
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                The Under One Roof Advantage in Hicksville
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Eye Level Learning Center of Hicksville (760 S Broadway), your
                family accesses both math and complete English reading and writing
                under one roof.
              </p>
              <div className="p-4 bg-slate-50 rounded-lg text-xs sm:text-sm text-slate-700 space-y-2">
                <p>
                  <strong>Versus Mathnasium Plainview Hicksville:</strong> Mathnasium
                  provides math-only instruction; Eye Level gives your child access to
                  comprehensive English writing and literature analysis in the same
                  center.
                </p>
                <p>
                  <strong>Versus Kumon (495 S Broadway):</strong> Kumon relies heavily
                  on repetitive worksheets and speed drills; Eye Level incorporates
                  dedicated four-domain writing composition and one-to-one coaching
                  that supports self-directed learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="english-booking" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationForm id="english-consultation-form" />
        </div>
      </section>
    </>
  );
}
