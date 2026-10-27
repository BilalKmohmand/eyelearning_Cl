export const SITE = {
  name: "Eye Level Learning Center of Hicksville",
  shortName: "Eye Level Hicksville",
  legalParent: "Eye Level",
  url: "https://www.myeyelevelhicksville.com",
  telephone: "516-597-5300",
  telephoneTel: "+15165975300",
  telephoneDisplay: "(516) 597-5300",
  email: null as string | null,
  address: {
    street: "760 S Broadway",
    city: "Hicksville",
    state: "NY",
    postalCode: "11801",
    country: "US",
    full: "760 S Broadway, Hicksville, NY 11801",
  },
  hours: {
    summary:
      "Tuesday to Friday, 3:00 PM to 7:00 PM; Saturday, 10:00 AM to 2:00 PM; closed Sunday and Monday",
    lines: [
      { days: "Tuesday–Friday", hours: "3:00 PM – 7:00 PM" },
      { days: "Saturday", hours: "10:00 AM – 2:00 PM" },
      { days: "Sunday–Monday", hours: "Closed" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "15:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
  },
  programs: ["Math", "English", "Summit of Math"] as const,
  gradeRange: "Pre-K through Grade 12",
  gradeEmphasis: "elementary and middle school",
  method:
    "A diagnostic level test establishes the starting point; a systematic, step-by-step curriculum follows; instructors provide one-to-one coaching that supports self-directed learning.",
  cta: "Book a free level test and consultation",
  ctaShort: "Book Free Test",
  serviceArea: [
    "Hicksville",
    "Plainview",
    "Bethpage",
    "Syosset",
    "Jericho",
    "Westbury",
    "Levittown",
    "Old Bethpage",
  ],
  social: {
    facebook: "https://www.facebook.com/EyeLevelEducation",
    instagram: "https://www.instagram.com/eyeleveleducation/",
    youtube: "https://www.youtube.com/channel/UC4V1Y4QQDLumBVTI24PCYCw",
    corporate:
      "https://www.myeyelevel.com/US/center/hicksville",
  },
  differentiator:
    "Math and English writing are offered under one roof. The nearest comparable math-only center is Mathnasium Plainview Hicksville, and Kumon operates at 495 S Broadway, Hicksville.",
  themeColor: "#0D2137",
  businessId: "https://www.myeyelevelhicksville.com/#organization",
  logoPath: "/images/logo.svg",
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=-73.533%2C40.752%2C-73.513%2C40.768&layer=mapnik&marker=40.760%2C-73.523",
  mapDirectionsUrl:
    "https://www.openstreetmap.org/?mlat=40.760&mlon=-73.523#map=17/40.760/-73.523",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/math-tutoring-hicksville/", label: "Math" },
  { href: "/english-tutoring-hicksville/", label: "English" },
  { href: "/free-level-test/", label: "Free Level Test" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How does the free level test work?",
    answer:
      "The free level test is a diagnostic assessment that identifies your child’s current starting point in Math or English before any enrollment decision is made at Eye Level Learning Center of Hicksville. An instructor then reviews the results with you in a consultation and explains strengths, gaps, and the next curriculum steps. No payment is required to take the test or attend the consultation. You leave with a clear picture of a recommended path forward.",
  },
  {
    question: "How do I schedule a free level test and consultation?",
    answer:
      "Call (516) 597-5300 or submit the consultation form on this website to request a free level test and consultation at Eye Level Learning Center of Hicksville. Share your child’s grade and program of interest so staff can prepare the correct diagnostic and confirm a visit during published center hours. Visits are arranged Tuesday through Friday from 3:00 PM to 7:00 PM, and Saturday from 10:00 AM to 2:00 PM. The center is closed Sunday and Monday.",
  },
  {
    question: "What grades does Eye Level Learning Center of Hicksville serve?",
    answer:
      "Eye Level Learning Center of Hicksville serves children in Pre-K through Grade 12, with particular emphasis on elementary and middle school learners who need steady after-school support. Programs include Math, English reading and writing, and Summit of Math, with placement based on a diagnostic level test rather than grade alone. Math covers basic arithmetic and critical-thinking math; English includes reading and writing in narrative, informational, opinion, and research forms. Families from Hicksville and nearby towns are welcome.",
  },
  {
    question: "How does Eye Level differ from school instruction?",
    answer:
      "Eye Level supplements school instruction with a diagnostic starting point and a systematic, step-by-step curriculum paced to each child rather than to a whole classroom. Instructors provide one-to-one coaching that supports self-directed learning, helping students fill gaps and build ahead without replacing their school program. Math and English writing are available under one roof, so families can address both subjects in a single after-school setting at the Hicksville center.",
  },
  {
    question:
      "How does Eye Level compare with Kumon and Mathnasium in Hicksville?",
    answer:
      "Eye Level Learning Center of Hicksville offers both Math and English writing under one roof, which distinguishes it from nearby math-only options parents often compare. Mathnasium Plainview Hicksville focuses on mathematics, and Kumon operates at 495 S Broadway, Hicksville, while Eye Level begins with a free diagnostic level test. A step-by-step curriculum and one-to-one coaching then support self-directed progress. Parents comparing centers can book a free consultation to see the fit firsthand.",
  },
  {
    question: "How is tuition determined?",
    answer:
      "Tuition depends on the program selected, the child’s diagnostic placement, and the individualized study plan discussed during the free consultation at Eye Level Learning Center of Hicksville. No prices are published on this website because each plan is prepared after the level test and reviewed with parents before enrollment. Call (516) 597-5300 or request a free level test to receive tuition details specific to your child.",
  },
] as const;

export type PageKey =
  | "home"
  | "math"
  | "english"
  | "levelTest"
  | "faq"
  | "contact";

export const PAGE_SEO: Record<
  PageKey,
  {
    path: string;
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  }
> = {
  home: {
    path: "/",
    title: "Math & English Tutoring | Hicksville, NY",
    description:
      "Eye Level Learning Center of Hicksville offers Math and English tutoring for Pre-K–12. Book a free level test at 760 S Broadway.",
    ogTitle: "Eye Level Learning Center of Hicksville",
    ogDescription:
      "Neighborhood Math and English tutoring in Hicksville, NY. Book a free level test and consultation.",
  },
  math: {
    path: "/math-tutoring-hicksville/",
    title: "Math Tutoring Hicksville, NY | Eye Level",
    description:
      "Math tutoring in Hicksville covering arithmetic, critical thinking, and Summit of Math. Book a free diagnostic level test today.",
    ogTitle: "Math Tutoring in Hicksville, NY",
    ogDescription:
      "Step-by-step Math tutoring with one-to-one coaching at Eye Level Learning Center of Hicksville.",
  },
  english: {
    path: "/english-tutoring-hicksville/",
    title: "English Tutoring Hicksville, NY | Eye Level",
    description:
      "Reading and writing tutoring in Hicksville: narrative, informational, opinion, and research. Book a free level test.",
    ogTitle: "English Tutoring in Hicksville, NY",
    ogDescription:
      "Reading and four forms of writing instruction at Eye Level Learning Center of Hicksville.",
  },
  levelTest: {
    path: "/free-level-test/",
    title: "Free Math Level Test | Hicksville, NY",
    description:
      "Book a free diagnostic level test and consultation at Eye Level Learning Center of Hicksville. Call (516) 597-5300.",
    ogTitle: "Free Level Test in Hicksville, NY",
    ogDescription:
      "Start with a free diagnostic level test for Math or English at our Hicksville learning center.",
  },
  faq: {
    path: "/faq/",
    title: "Parent FAQ | Tutoring Hicksville, NY",
    description:
      "Answers for parents about scheduling, grades, Eye Level vs Kumon and Mathnasium, and tuition consultations in Hicksville.",
    ogTitle: "Parent FAQ — Eye Level Hicksville",
    ogDescription:
      "Plain answers about the free level test, programs, and how Eye Level compares with other Hicksville centers.",
  },
  contact: {
    path: "/contact/",
    title: "Contact | Learning Center Hicksville, NY",
    description:
      "Visit 760 S Broadway, Hicksville, NY 11801 or call (516) 597-5300. Book a free level test and consultation.",
    ogTitle: "Contact Eye Level Learning Center of Hicksville",
    ogDescription:
      "Address, hours, phone, and consultation form for Eye Level Learning Center of Hicksville.",
  },
};
