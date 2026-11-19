"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  GA_MEASUREMENT_ID,
  trackBookCta,
  trackPhoneClick,
} from "@/lib/analytics";

/**
 * Loads GA4 and captures key conversion clicks (tel: + book CTAs).
 */
export function GoogleAnalytics() {
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

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
