export const SITE = {
  name: "Eye Level Learning Center of Hicksville",
  shortName: "Eye Level Hicksville",
  legalParent: "Eye Level",
  url: "https://www.myeyelevelhicksville.com",
  telephone: "516-597-5300",
  telephoneTel: "+15165975300",
  telephoneDisplay: "(516) 597-5300",
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
  cta: "Book a free level test",
  ctaShort: "Book Free Level Test",
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
    corporate: "https://www.myeyelevel.com/US/center/hicksville",
  },
  themeColor: "#0F2137",
  businessId: "https://www.myeyelevelhicksville.com/#organization",
  logoPath: "/images/eye-level-logo.png",
  heroImage: "/images/hicksville_learning_center_1793115709157.webp",
  mathImage: "/images/math_study_session_1793115709591.webp",
  englishImage: "/images/english_writing_session_1793115710023.webp",
  mapDirectionsUrl:
    "https://maps.google.com/?q=760+S+Broadway,+Hicksville,+NY+11801",
} as const;

export type FaqCategory =
  | "Getting Started"
  | "Schedule & Grades"
  | "Method"
  | "Tuition";

export const FAQ_ITEMS: ReadonlyArray<{
  category: FaqCategory;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
}> = [
  {
    category: "Getting Started",
    question: "How does the free level test work?",
    shortAnswer:
      "Your child takes a short in-person diagnostic at our Hicksville center so we can see exactly what they know in math and/or English before any lessons begin.",
    detailedAnswer:
      "We do not place children by grade alone. The level test finds strengths and gaps, then we sit with you to walk through the results, show sample booklets, and outline a calm, step-by-step plan. There is no obligation to enroll.",
  },
  {
    category: "Getting Started",
    question: "What should we bring to the level test?",
    shortAnswer:
      "Bring your child, a parent or guardian, and any recent school work or report notes you want us to see. Pencils and booklets are provided at the center.",
    detailedAnswer:
      "If your child wears glasses, please bring them. Optional items that help the conversation: a recent quiz, a writing sample, or a note from a teacher about topics that feel hard. Arrive a few minutes early so your child can settle in.",
  },
  {
    category: "Getting Started",
    question: "How long does the first visit take?",
    shortAnswer:
      "Plan on about 45 to 75 minutes for the diagnostic plus a parent conversation, depending on whether you choose Math, English, or both.",
    detailedAnswer:
      "The assessment itself is paced for your child—not a race. Afterward, we review results with you so you leave knowing what the starting level means and what the next weeks would look like if you enroll.",
  },
  {
    category: "Schedule & Grades",
    question: "How are sessions scheduled at the Hicksville center?",
    shortAnswer:
      "Students come during center hours: Tuesday–Friday 3:00–7:00 PM and Saturday 10:00 AM–2:00 PM, on a consistent weekly slot you choose with us.",
    detailedAnswer:
      "We work around after-school activities when we can. At each visit your child works through their booklets with one-to-one coaching, then takes home clear practice for the days between sessions.",
  },
  {
    category: "Schedule & Grades",
    question: "What grade levels do you serve?",
    shortAnswer:
      "We welcome students from Pre-K through Grade 12 at Eye Level Learning Center of Hicksville.",
    detailedAnswer:
      "Younger learners build early number sense, phonics, and confidence. Elementary and middle school students strengthen arithmetic, problem solving, reading, and writing. Older students can continue into Summit of Math for secondary topics.",
  },
  {
    category: "Method",
    question: "How is Eye Level different from regular school homework help?",
    shortAnswer:
      "School moves the whole class forward together. We start at your child’s verified level and only move ahead when a step is truly solid.",
    detailedAnswer:
      "Each booklet is a small, clear step. Instructors coach one-to-one so your child learns to think through a problem—not just copy an answer. That rhythm builds confidence that carries back into the classroom.",
  },
  {
    category: "Method",
    question: "How do parents track progress?",
    shortAnswer:
      "You hear from us after the level test, see the booklet path we recommend, and can ask for check-ins on accuracy, speed, and independence as weeks go by.",
    detailedAnswer:
      "Progress shows up as cleaner work, fewer hints needed, and readiness for the next booklet. We keep check-ins practical: what improved, what still needs practice, and what comes next. Call the center anytime you want an update between visits.",
  },
  {
    category: "Tuition",
    question: "How is tuition determined?",
    shortAnswer:
      "Tuition depends on the program you choose—Math, English, or both—and the study plan built from your child’s free level test.",
    detailedAnswer:
      "Because every starting level and schedule is different, we share clear tuition options during the consultation after the diagnostic. You can take the information home with no pressure to decide on the spot.",
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
      "Answers for parents about the free level test, schedules, grades, our method, and tuition consultations in Hicksville, NY.",
    ogTitle: "Parent FAQ — Eye Level Hicksville",
    ogDescription:
      "Plain answers about the free level test, programs, schedules, and what to expect at Eye Level Learning Center of Hicksville.",
  },
  contact: {
    path: "/contact/",
    title: "Contact | Learning Center Hicksville, NY",
    description:
      "Visit 760 S Broadway, Hicksville, NY 11801 or call (516) 597-5300. Hours, directions, and how to book a free level test.",
    ogTitle: "Contact Eye Level Learning Center of Hicksville",
    ogDescription:
      "Address, hours, phone, and directions for Eye Level Learning Center of Hicksville.",
  },
};
