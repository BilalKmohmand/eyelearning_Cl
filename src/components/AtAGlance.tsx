import { SITE } from "@/lib/site";

export function AtAGlance() {
  return (
    <aside className="glance" aria-labelledby="at-a-glance-heading">
      <h2 id="at-a-glance-heading" className="section-title">
        At a Glance
      </h2>
      <p>
        Eye Level Learning Center of Hicksville is located at 760 S Broadway,
        Hicksville, NY 11801.
      </p>
      <p>
        The telephone number is {SITE.telephoneDisplay}. Hours are Tuesday to
        Friday, 3:00 PM to 7:00 PM, and Saturday, 10:00 AM to 2:00 PM. The center
        is closed Sunday and Monday.
      </p>
      <p>
        Programs include Math (basic arithmetic and critical-thinking math),
        English (reading, and writing in narrative, informational, opinion, and
        research forms), and Summit of Math. The center serves children in Pre-K
        through Grade 12, with emphasis on elementary and middle school.
      </p>
      <p>
        A diagnostic level test establishes the starting point. A systematic,
        step-by-step curriculum follows. Instructors provide one-to-one coaching
        that supports self-directed learning. Parents book a free level test and
        consultation by phone or through the form on this website.
      </p>
    </aside>
  );
}
