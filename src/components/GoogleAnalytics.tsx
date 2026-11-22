"use client";

import { useEffect } from "react";
import { trackBookCta, trackPhoneClick } from "@/lib/analytics";

/**
 * Captures tel: and book-level-test clicks into dataLayer / gtag.
 * GTM + gtag bootstrap scripts live in root layout <head>/<body>.
 */
export function AnalyticsClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const telLink = target.closest('a[href^="tel:"]');
      if (telLink instanceof HTMLAnchorElement) {
        trackPhoneClick(window.location.pathname);
        return;
      }

      const bookLink = target.closest(
        'a[href="/free-level-test/"], a[href="/free-level-test"]'
      );
      if (bookLink instanceof HTMLAnchorElement) {
        trackBookCta(window.location.pathname);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
