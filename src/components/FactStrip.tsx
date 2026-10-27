import { SITE } from "@/lib/site";

export function FactStrip() {
  return (
    <section className="fact-strip" aria-label="Address, hours, and telephone">
      <div>
        <span className="fact-label">Address</span>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address.full)}`}
        >
          {SITE.address.full}
        </a>
      </div>
      <div>
        <span className="fact-label">Telephone</span>
        <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>
      </div>
      <div>
        <span className="fact-label">Hours</span>
        <span>{SITE.hours.summary}</span>
      </div>
    </section>
  );
}
