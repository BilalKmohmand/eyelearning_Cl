import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Hicksville, NY Learning Center",
  description:
    "Privacy practices for consultation requests submitted to Eye Level Learning Center of Hicksville.",
  alternates: {
    canonical: `${SITE.url}/privacy/`,
    languages: {
      "en-US": `${SITE.url}/privacy/`,
      "x-default": `${SITE.url}/privacy/`,
    },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="container page-hero" style={{ maxWidth: "48rem" }}>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy" },
        ]}
      />
      <h1>Privacy Policy</h1>
      <p>
        Eye Level Learning Center of Hicksville (“we”) collects information you
        submit through the consultation form so we can schedule a free level
        test and consultation and respond to your inquiry.
      </p>
      <h2>Information collected</h2>
      <p>
        Parent or guardian name, child’s name, grade, email address, telephone
        number, program of interest, preferred contact time, consent
        confirmation, and a fixed location value of Hicksville.
      </p>
      <h2>How information is used</h2>
      <p>
        We use this information only to contact you about scheduling and center
        services. We do not sell personal information.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy may be directed to{" "}
        <a href={`tel:${SITE.telephoneTel}`}>{SITE.telephoneDisplay}</a> or in
        person at {SITE.address.full}.
      </p>
    </div>
  );
}
