"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  GA_MEASUREMENT_ID,
  GTM_ID,
  trackBookCta,
  trackPhoneClick,
} from "@/lib/analytics";

/**
 * Google Tag Manager (GTM-W837H2Z5) + GA4 gtag helper / config.
 * Also captures tel: and book-level-test clicks into dataLayer.
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
      {/* Google Tag Manager */}
      <Script id="gtm-bootstrap" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      {/* dataLayer + gtag helper (as requested) + GA4 config */}
      <Script id="gtag-helper" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            send_page_view: true
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}

/** GTM noscript fallback — place as first child inside <body>. */
export function GoogleTagManagerNoscript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
