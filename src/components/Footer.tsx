import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-24 sm:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <BrandLogo variant="dark" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              A calm, step-by-step Math and English learning center for families
              in Hicksville, NY. We start with a free level test, then coach
              your child one-to-one through clear booklets—from Pre-K through
              Grade 12.
            </p>
            <div className="text-xs text-slate-500">
              Franchise location of Eye Level (Daekyo).
            </div>
          </div>

          <div>
            <h2 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              For Parents
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link href="/math-tutoring-hicksville/" className="hover:text-white transition-colors">
                  Math Tutoring
                </Link>
              </li>
              <li>
                <Link href="/english-tutoring-hicksville/" className="hover:text-white transition-colors">
                  English Tutoring
                </Link>
              </li>
              <li>
                <Link href="/free-level-test/" className="hover:text-white transition-colors text-amber-400 font-medium">
                  Book Free Level Test
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-white transition-colors">
                  Parent FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  Contact &amp; Directions
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Visit Us
            </h2>
            <p className="text-slate-300 font-medium mb-1">{SITE.address.full}</p>
            <p className="mb-4">
              <a
                href={`tel:${SITE.telephoneTel}`}
                className="text-amber-400 font-bold hover:underline"
              >
                {SITE.telephone}
              </a>
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <div>
                <strong className="text-slate-300">Tue – Fri:</strong> 3:00 PM – 7:00 PM
              </div>
              <div>
                <strong className="text-slate-300">Saturday:</strong> 10:00 AM – 2:00 PM
              </div>
              <div>
                <strong className="text-slate-300">Sun &amp; Mon:</strong> Closed
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Nearby Towns We Serve
            </h2>
            <div className="text-xs text-slate-300 flex flex-wrap gap-x-2 gap-y-1 mb-6">
              {SITE.serviceArea.map((town, idx) => (
                <span key={town}>
                  {town}
                  {idx < SITE.serviceArea.length - 1 ? " ·" : ""}
                </span>
              ))}
            </div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">
              Official Profiles
            </h3>
            <ul className="text-xs text-slate-400 space-y-1.5">
              <li>
                <a href={SITE.social.corporate} rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Corporate Center Listing
                </a>
              </li>
              <li>
                <a href={SITE.social.facebook} rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href={SITE.social.instagram} rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={SITE.social.youtube} rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span>{SITE.address.full}</span>
            <span>·</span>
            <a href={`tel:${SITE.telephoneTel}`} className="hover:text-slate-400">
              {SITE.telephone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
