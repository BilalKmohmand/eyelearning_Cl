import Link from "next/link";
import { SITE } from "@/lib/site";

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" role="region" aria-label="Quick actions">
      <a className="btn btn-secondary" href={`tel:${SITE.telephoneTel}`}>
        Call
      </a>
      <Link className="btn btn-primary" href="/free-level-test/">
        {SITE.ctaShort}
      </Link>
    </div>
  );
}
