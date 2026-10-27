import { SITE } from "@/lib/site";

export function MapSection() {
  return (
    <section className="section" aria-labelledby="map-heading">
      <div className="container">
        <h2 id="map-heading" className="section-title">
          Map and Directions
        </h2>
        <p className="section-lead">
          Eye Level Learning Center of Hicksville is at {SITE.address.full}.
          Families from Hicksville, Plainview, Bethpage, Syosset, Jericho,
          Westbury, Levittown, and Old Bethpage are welcome.
        </p>
        <iframe
          className="map-frame"
          title="Map showing Eye Level Learning Center of Hicksville at 760 S Broadway"
          src={SITE.mapEmbedUrl}
          width={800}
          height={320}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p style={{ marginTop: "1rem" }}>
          <a href={SITE.mapDirectionsUrl} rel="noopener noreferrer">
            Open map and directions
          </a>
          {" · "}
          <a href={`tel:${SITE.telephoneTel}`}>Call {SITE.telephoneDisplay}</a>
        </p>
      </div>
    </section>
  );
}
