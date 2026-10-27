import { FAQ_ITEMS, SITE, type PageKey } from "./site";
import { absoluteUrl } from "./seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": SITE.businessId,
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl(SITE.logoPath),
    telephone: SITE.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    openingHoursSpecification: SITE.hours.openingHoursSpecification,
    areaServed: SITE.serviceArea.map((town) => ({
      "@type": "City",
      name: town,
    })),
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.youtube,
      SITE.social.corporate,
    ],
    parentOrganization: {
      "@type": "Organization",
      name: SITE.legalParent,
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: absoluteUrl(opts.path),
    areaServed: SITE.serviceArea.map((town) => ({
      "@type": "City",
      name: town,
    })),
    provider: {
      "@id": SITE.businessId,
    },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE.name}`,
    url: absoluteUrl("/contact/"),
    mainEntity: {
      "@id": SITE.businessId,
    },
  };
}

export function schemasForPage(page: PageKey): object[] {
  const base = [organizationSchema()];

  switch (page) {
    case "home":
      return [...base, faqPageSchema()];
    case "math":
      return [
        ...base,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Math Tutoring", path: "/math-tutoring-hicksville/" },
        ]),
        serviceSchema({
          name: "Math Tutoring in Hicksville",
          description:
            "Math tutoring covering basic arithmetic, critical-thinking math, and Summit of Math at Eye Level Learning Center of Hicksville.",
          path: "/math-tutoring-hicksville/",
          serviceType: "Math tutoring",
        }),
      ];
    case "english":
      return [
        ...base,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "English Tutoring", path: "/english-tutoring-hicksville/" },
        ]),
        serviceSchema({
          name: "English Tutoring in Hicksville",
          description:
            "Reading and writing tutoring in narrative, informational, opinion, and research forms at Eye Level Learning Center of Hicksville.",
          path: "/english-tutoring-hicksville/",
          serviceType: "English tutoring",
        }),
      ];
    case "levelTest":
      return [
        ...base,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Free Level Test", path: "/free-level-test/" },
        ]),
      ];
    case "faq":
      return [
        ...base,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Parent FAQ", path: "/faq/" },
        ]),
        faqPageSchema(),
      ];
    case "contact":
      return [
        ...base,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]),
        contactPageSchema(),
      ];
    default:
      return base;
  }
}
