import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { schemasForPage } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata("english");

const writingForms = [
  {
    title: "Narrative",
    prompt: "Sample prompt: “Write about a time your character helped a friend.”",
    body: "Characters, sequence, and a clear ending—stories that stay on track.",
  },
  {
    title: "Informational",
    prompt: "Sample prompt: “Explain how a seed becomes a plant.”",
    body: "Facts organized so a reader can learn something new without getting lost.",
  },
  {
    title: "Opinion",
    prompt: "Sample prompt: “Should recess be longer? Give two reasons.”",
    body: "A clear claim, reasons, and wording that sounds like your child’s voice.",
  },
  {
    title: "Research",
    prompt: "Sample prompt: “Use two sources to describe an animal’s habitat.”",
    body: "Gathering ideas, citing simply, and turning notes into a short report.",
  },
];

const readingSkills = [
  "Sounding out and recognizing words with growing confidence",
  "Understanding what a paragraph is really saying",
  "Noticing the main idea versus small details",
  "Talking back to a text with their own words",
];

const progression = [
  { title: "First sentence", detail: "A complete thought on the page" },
  { title: "Short paragraph", detail: "Ideas that stick together" },
  { title: "Multi-paragraph piece", detail: "Beginning, middle, and end" },
  { title: "Research report", detail: "Sources, structure, and revision" },
];

export default function EnglishTutoringPage() {
  return (
    <>
      <JsonLd data={schemasForPage("english")} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "English Tutoring Hicksville, NY" },
        ]}
      />

      {/* Editorial hero */}
      <section className="bg-[#f7f4ef] border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-800 mb-4">
            English tutoring · Hicksville, NY
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            From the first sentence to a research report
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto mb-8">
            Eye Level English helps your child read with understanding and write
            in the four forms schools ask for—without the Sunday-night panic.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/free-level-test/"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm"
            >
              Book Free Level Test
            </Link>
            <a
              href={`tel:${SITE.telephoneTel}`}
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg border border-stone-400 bg-white text-slate-900 font-semibold text-sm"
            >
              Call {SITE.telephone}
            </a>
          </div>
        </div>
      </section>

      {/* 2x2 writing forms */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Four writing forms, taught on purpose
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Each form has its own job. Your child practices one clear skill at
              a time so essays at school feel familiar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {writingForms.map((form) => (
              <article
                key={form.title}
                className="border border-stone-200 bg-[#fbfaf7] p-6 sm:p-8"
              >
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  {form.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {form.body}
                </p>
                <p className="text-xs sm:text-sm italic text-amber-900/90 border-l-2 border-amber-500 pl-3">
                  {form.prompt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reading skills + photo */}
      <section className="py-14 sm:py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Reading skills we strengthen
            </h2>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Strong writing grows from strong reading. At our Hicksville
              center, coaches notice where comprehension slips and rebuild from
              there.
            </p>
            <ul className="space-y-3">
              {readingSkills.map((skill) => (
                <li key={skill} className="flex gap-3 text-sm text-slate-100">
                  <span className="text-amber-400 font-bold" aria-hidden="true">
                    ✓
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[260px] overflow-hidden">
            <Image
              src={SITE.englishImage}
              alt="Reading and writing practice at Eye Level Learning Center of Hicksville"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Progression ribbon */}
      <section className="py-14 sm:py-16 bg-[#f7f4ef]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            From first sentence to research report
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {progression.map((step, index) => (
              <li
                key={step.title}
                className="bg-white border border-stone-200 p-5 text-center"
              >
                <span className="block text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-xs text-slate-600">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PageCta
        tone="amber"
        heading="Wondering which writing form needs the most help?"
        body="A free level test shows us where reading and writing stand today. We’ll explain it in parent-friendly language—no jargon."
      />
    </>
  );
}
