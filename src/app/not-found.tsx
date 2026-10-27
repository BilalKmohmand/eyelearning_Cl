import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="container page-hero" style={{ minHeight: "50vh" }}>
      <h1>Page not found</h1>
      <p className="section-lead">
        The page you requested is not available at Eye Level Learning Center of
        Hicksville. Return to the homepage or call the center for help.
      </p>
      <p>
        <Link href="/" className="btn btn-primary">
          Go to homepage
        </Link>{" "}
        <a href={`tel:${SITE.telephoneTel}`} className="btn btn-ghost">
          Call {SITE.telephoneDisplay}
        </a>
      </p>
      <p>
        {SITE.name} · {SITE.address.full}
      </p>
    </div>
  );
}
