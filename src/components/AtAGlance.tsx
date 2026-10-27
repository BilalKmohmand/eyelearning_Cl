import { SITE } from "@/lib/site";

export function AtAGlance() {
  return (
    <section
      aria-labelledby="at-a-glance-heading"
      className="my-12 p-8 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 shadow-sm"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
          Center Overview
        </div>
        <h2 id="at-a-glance-heading" className="text-2xl font-bold text-white mb-6">
          At a Glance: Eye Level Learning Center of Hicksville
        </h2>

        <div className="space-y-4 text-base text-slate-200 leading-relaxed">
          <p>
            <strong className="text-white">Business Name:</strong> {SITE.name}.
          </p>
          <p>
            <strong className="text-white">Address:</strong> {SITE.address.full}.
          </p>
          <p>
            <strong className="text-white">Telephone:</strong>{" "}
            <a
              href={`tel:${SITE.telephoneTel}`}
              className="text-amber-400 font-semibold hover:underline"
            >
              {SITE.telephone}
            </a>
            .
          </p>
          <p>
            <strong className="text-white">Hours:</strong> Tuesday to Friday, 3:00
            PM to 7:00 PM; Saturday, 10:00 AM to 2:00 PM; closed Sunday and Monday.
          </p>
          <p>
            <strong className="text-white">Programs:</strong> Eye Level Math (basic
            arithmetic and critical-thinking math), Eye Level English (reading, and
            writing across narrative, informational, opinion, and research formats),
            and Summit of Math.
          </p>
          <p>
            <strong className="text-white">Grade Range:</strong> Pre-K through Grade
            12, with primary emphasis on elementary and middle school students.
          </p>
          <p>
            <strong className="text-white">Educational Method:</strong> A diagnostic
            level test establishes the exact starting point; a systematic,
            step-by-step curriculum follows; instructors provide one-to-one coaching
            that supports self-directed learning.
          </p>
          <p>
            <strong className="text-white">Booking Process:</strong> Parents book a
            free level test and consultation by calling {SITE.telephone} or completing
            the consultation request form on this website.
          </p>
        </div>
      </div>
    </section>
  );
}
