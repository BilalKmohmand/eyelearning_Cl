import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2 className="footer-title">{SITE.name}</h2>
          <p>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address.full)}`}>
              {SITE.address.full}
            </a>
          </p>
          <p>
            <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a>
          </p>
          <p>{SITE.hours.summary}</p>
        </div>

        <div>
          <h2 className="footer-title">Explore</h2>
          <ul className="footer-list">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Connect</h2>
          <ul className="footer-list">
            <li>
              <a href={SITE.social.facebook} rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={SITE.social.instagram} rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={SITE.social.youtube} rel="noopener noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href={SITE.social.corporate} rel="noopener noreferrer">
                Corporate center page
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ marginTop: "2rem", opacity: 0.75 }}>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} {SITE.name}. Franchise location of{" "}
          {SITE.legalParent}.
        </p>
      </div>
    </footer>
  );
}
