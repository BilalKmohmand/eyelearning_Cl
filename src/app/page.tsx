import Image from "next/image";
import Link from "next/link";
import { AtAGlance } from "@/components/AtAGlance";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      <JsonLd data={schemasForPage("home")} />

      <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                Eye Level Learning Center of Hicksville · 760 S Broadway
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Math and English Tutoring in Hicksville, NY
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Diagnostic-driven math and reading/writing instruction for students
                in Pre-K through Grade 12. We combine foundational calculation
                speed with critical thinking and formal four-domain writing under
                one roof.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href="#consultation-form"
                  className="px-7 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm sm:text-base rounded-lg transition-colors shadow-sm text-center min-h-[44px] flex items-center justify-center"
                >
                  Book Free Level Test &amp; Consultation
                </a>
                <a
                  href={`tel:${SITE.telephoneTel}`}
                  className="px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base rounded-lg transition-colors border border-slate-700 text-center min-h-[44px] flex items-center justify-center gap-2"
                >
                  <span>Call {SITE.telephone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                <Image
                  src={SITE.heroImage}
                  alt="Students focused on individualized math and writing booklets at Eye Level Learning Center of Hicksville"
                  width={640}
                  height={420}
                  priority
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-900/90 border-t border-slate-700 text-xs text-slate-300">
                  Focused small-step learning at 760 S Broadway, Hicksville, NY.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Center Location and Operating Hours"
        className="bg-slate-100 border-y border-slate-200 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg border border-slate-300 text-amber-700 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="block font-semibold text-slate-900">Center Address</span>
                <span className="text-slate-700">{SITE.address.full}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg border border-slate-300 text-amber-700 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="block font-semibold text-slate-900">Center Telephone</span>
                <a href={`tel:${SITE.telephoneTel}`} className="text-amber-700 font-bold hover:underline">
                  {SITE.telephone}
                </a>
                <span className="block text-xs text-slate-600">Tap to call our Hicksville staff</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg border border-slate-300 text-amber-700 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="block font-semibold text-slate-900">Operating Hours</span>
                <span className="text-slate-700 text-xs sm:text-sm block">Tue – Fri: 3:00 PM – 7:00 PM</span>
                <span className="text-slate-700 text-xs sm:text-sm block">Sat: 10:00 AM – 2:00 PM · Sun &amp; Mon: Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AtAGlance />
      </div>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-1">Methodology</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              The Three-Step Eye Level Instructional Method
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Eye Level takes an individualized, student-centric approach. We assess
              each child from their eye level to build lifelong mastery, genuine
              confidence, and self-directed study habits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 01",
                title: "Diagnostic Level Test",
                body: "A thorough in-person assessment pinpointing your child’s current computation accuracy, critical problem solving, and reading/writing capabilities. This identifies specific knowledge gaps without guessing.",
              },
              {
                step: "Step 02",
                title: "Systematic, Step-by-Step Curriculum",
                body: "Students progress through structured, incremental learning booklets. Small learning steps allow children to achieve 100% mastery of each concept before proceeding to the next level.",
              },
              {
                step: "Step 03",
                title: "One-to-One Instructor Coaching",
                body: "Certified instructors provide individualized feedback and guided coaching during weekly sessions, cultivating self-directed learning skills that translate directly into classroom success.",
              },
            ].map((item) => (
              <div key={item.step} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-amber-700 font-bold text-lg mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-1">Curriculum Breadth</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Comprehensive Math and English Under One Roof
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Most tutoring providers force families to travel between different
              specialty centers. At Eye Level Learning Center of Hicksville, your
              child receives complete mathematics instruction and full-spectrum
              writing development under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">Mathematics Curriculum</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Eye Level Math &amp; Summit of Math</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Eye Level Math balances fundamental arithmetic calculation with dedicated critical thinking and applied reasoning.
                </p>
                <div className="space-y-4 text-sm text-slate-700 mb-6">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="block text-slate-900 mb-1">Basic Arithmetic:</strong>
                    Builds speed, computation fluency, and accuracy in addition, subtraction, multiplication, division, fractions, and decimals.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="block text-slate-900 mb-1">Critical-Thinking Math:</strong>
                    Develops spatial reasoning, pattern recognition, depth of logic, multi-step word problems, and real-world mathematical application.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="block text-slate-900 mb-1">Summit of Math:</strong>
                    Advanced, curriculum-aligned secondary mathematics for middle and high school students preparing for rigorous coursework.
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link href="/math-tutoring-hicksville/" className="text-sm font-semibold text-amber-700 hover:text-amber-800">
                  Explore Math Curriculum Details →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">Language Arts Curriculum</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Eye Level English</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Eye Level English develops complete language mastery, pairing fundamental reading fluency with systematic training in four writing genres.
                </p>
                <div className="space-y-4 text-sm text-slate-700 mb-6">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="block text-slate-900 mb-1">Reading Comprehension:</strong>
                    Phonics, vocabulary acquisition, textual analysis, identifying main ideas, and inferential reading skills.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="block text-slate-900 mb-1">Four Forms of Writing:</strong>
                    Direct guided practice in narrative, informational, opinion, and research writing, building confident communicators.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="block text-slate-900 mb-1">Grammar &amp; Mechanics:</strong>
                    Sentence composition, punctuation, parts of speech, and paragraph structuring for school excellence.
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link href="/english-tutoring-hicksville/" className="text-sm font-semibold text-amber-700 hover:text-amber-800">
                  Explore English Curriculum Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-1">Local Hicksville Advantage</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why Hicksville Families Choose Eye Level
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When evaluating learning centers along South Broadway and throughout Nassau County, understanding instructional differences helps you select the best program for your child.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Both Math &amp; English Writing Under One Roof</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Families save time with consolidated scheduling. Our Hicksville center provides rigorous math together with comprehensive four-domain writing instruction in a single location at 760 S Broadway.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Differentiating from Mathnasium Plainview Hicksville</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                While Mathnasium provides mathematics-only coaching, Eye Level provides both mathematics and full English reading and essay writing, ensuring balanced academic growth across all core school subjects.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Differentiating from Kumon (495 S Broadway)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kumon relies heavily on repetitive calculation worksheets and timed drills. Eye Level balances foundational arithmetic with critical-thinking logic, word problems, and one-to-one coaching that supports independent thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-1">Parent Questions</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions for Hicksville Parents
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Clear answers regarding testing, scheduling, differences from school instruction, and tuition determination at 760 S Broadway.
            </p>
          </div>
          <FaqList />
          <p className="mt-8">
            <Link href="/faq/" className="text-sm font-semibold text-amber-700 hover:text-amber-800">
              View the full parent FAQ →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationForm id="consultation-form" />
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-semibold tracking-wider uppercase text-amber-700">Visit Our Center</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Map &amp; Directions to 760 S Broadway, Hicksville
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Eye Level Learning Center of Hicksville is conveniently situated on South Broadway (Route 107), easily accessible from the Long Island Expressway (LIE / I-495), Northern State Parkway, and Southern State Parkway.
              </p>
              <div className="p-4 bg-white rounded-lg border border-slate-200 text-sm space-y-2">
                <div><strong className="text-slate-900">Address:</strong> {SITE.address.full}</div>
                <div>
                  <strong className="text-slate-900">Telephone:</strong>{" "}
                  <a href={`tel:${SITE.telephoneTel}`} className="text-amber-700 font-bold underline">{SITE.telephone}</a>
                </div>
                <div><strong className="text-slate-900">Hours:</strong> Tue–Fri 3:00 PM – 7:00 PM | Sat 10:00 AM – 2:00 PM</div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Serving Nearby Communities</h3>
                <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                  {SITE.serviceArea.map((town) => (
                    <span key={town} className="bg-white px-2.5 py-1 rounded border border-slate-200">{town}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200 relative flex items-center justify-center text-center p-6">
                  <div className="space-y-2">
                    <div className="font-bold text-slate-900 text-base">{SITE.name}</div>
                    <div className="text-slate-600 text-sm">{SITE.address.full}</div>
                    <div className="text-xs text-slate-500">Located on South Broadway between Old Country Road and Plainview Road</div>
                    <div className="pt-3">
                      <a
                        href={SITE.mapDirectionsUrl}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-md text-xs font-semibold hover:bg-slate-800 transition-colors"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
