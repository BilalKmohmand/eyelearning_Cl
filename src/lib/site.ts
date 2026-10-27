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
    corporate: "https://www.myeyelevel.com/US/center/hicksville",
  },
  themeColor: "#0F2137",
  businessId: "https://www.myeyelevelhicksville.com/#organization",
  logoPath: "/images/logo.svg",
  heroImage: "/images/hicksville_learning_center_1793115709157.webp",
  mathImage: "/images/math_study_session_1793115709591.webp",
  englishImage: "/images/english_writing_session_1793115710023.webp",
  mapDirectionsUrl:
    "https://maps.google.com/?q=760+S+Broadway,+Hicksville,+NY+11801",
} as const;

export const FAQ_ITEMS = [
  {
    question: "How does the free level test work?",
    shortAnswer:
      "The free level test at Eye Level Learning Center of Hicksville is a diagnostic assessment administered in person to pinpoint your child's exact mathematical calculation, problem-solving, reading comprehension, and writing abilities before any instruction begins.",
    detailedAnswer:
      "Rather than assigning material according to grade level or chronological age, our diagnostic test discovers specific knowledge gaps and areas of strength. Following the test, our instructors conduct a personal consultation with parents to review results, demonstrate sample curriculum booklets, and outline a tailored, step-by-step learning trajectory.",
  },
  {
    question: "How are sessions scheduled at the Hicksville center?",
    shortAnswer:
      "Sessions at Eye Level Learning Center of Hicksville are scheduled during center hours: Tuesday through Friday from 3:00 PM to 7:00 PM, and Saturday from 10:00 AM to 2:00 PM, with students attending designated weekly time slots.",
    detailedAnswer:
      "Families select consistent weekly study sessions that accommodate their after-school and weekend commitments. During each visit, students complete tailored classroom work with one-to-one coaching and receive organized practice booklets for home completion between center visits.",
  },
  {
    question: "What grade levels are served at the Hicksville center?",
    shortAnswer:
      "Eye Level Learning Center of Hicksville serves students from Pre-K through Grade 12, with a primary instructional concentration on elementary and middle school learners building critical foundational mathematics and writing competence.",
    detailedAnswer:
      "Early learners in Pre-K and Kindergarten develop fine motor control, basic numeracy, phonics, and listening skills. Elementary and middle school students build mental arithmetic, geometry, critical-thinking word problem skills, reading comprehension, and formal writing. High school students benefit from advanced algebraic thinking through Summit of Math.",
  },
  {
    question: "How does the Eye Level method differ from traditional school instruction?",
    shortAnswer:
      "Unlike school classrooms that advance on fixed group pacing regardless of individual readiness, the Eye Level method begins at each student's verified comfort level, ensuring total concept mastery before introducing more complex topics.",
    detailedAnswer:
      "School curricula often leave partial learning gaps unaddressed as the class moves forward. Eye Level provides individualized small-step progression, active critical-thinking challenges, and instructor coaching that trains students to evaluate problems independently rather than relying on passive memorization.",
  },
  {
    question: "How does Eye Level compare with Kumon and Mathnasium in Hicksville?",
    shortAnswer:
      "Eye Level Learning Center of Hicksville delivers comprehensive math and four-domain English writing under one roof, whereas Mathnasium focuses solely on math and Kumon relies primarily on repetitive computational worksheets without critical-thinking math or formal essay coaching.",
    detailedAnswer:
      "At 760 S Broadway, families benefit from dual-subject enrichment in a single visit. In mathematics, Eye Level balances calculation drills with critical-thinking problem solving. In English, students master reading and write across narrative, informational, opinion, and research formats—providing broader educational development than single-subject or drill-only alternatives.",
  },
  {
    question: "How is tuition determined at Eye Level Learning Center of Hicksville?",
    shortAnswer:
      "Tuition is determined based on the specific academic program selected—Math, English, or both subjects—and your child's individualized study plan developed during the free diagnostic level test and consultation.",
    detailedAnswer:
      "Because every child's learning needs, starting level, and subject combination differ, tuition details and enrollment options are presented clearly to parents during the in-person consultation following the diagnostic evaluation, with no obligation to enroll.",
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
