export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-Q0Q9FD0KMQ";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, params);
}

export function trackPhoneClick(location: string) {
  trackEvent("phone_click", {
    event_category: "engagement",
    event_label: location,
    phone_number: "516-597-5300",
  });
}

export function trackBookCta(location: string) {
  trackEvent("book_level_test_click", {
    event_category: "conversion",
    event_label: location,
  });
}

export function trackConsultationSubmit(program: string) {
  trackEvent("generate_lead", {
    event_category: "conversion",
    event_label: "consultation_form",
    program,
  });
  trackEvent("consultation_submit", {
    event_category: "conversion",
    program,
  });
}
