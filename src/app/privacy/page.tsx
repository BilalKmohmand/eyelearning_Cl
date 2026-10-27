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
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy" },
        ]}
      />
      <section className="bg-slate-900 text-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="mt-3 text-slate-300">
            How Eye Level Learning Center of Hicksville handles consultation requests.
          </p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-700 leading-relaxed">
          <p>
            Eye Level Learning Center of Hicksville (“we”) collects information you
            submit through the consultation form so we can schedule a free level test
            and consultation and respond to your inquiry.
          </p>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Information collected</h2>
            <p>
              Parent or guardian name, child’s name, grade, email address, telephone
              number, program of interest, preferred contact time, consent
              confirmation, and a fixed location value of Hicksville.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">How information is used</h2>
            <p>
              We use this information only to contact you about scheduling and center
              services. We do not sell personal information.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Contact</h2>
            <p>
              Questions about this policy may be directed to{" "}
              <a href={`tel:${SITE.telephoneTel}`} className="text-amber-700 font-semibold underline">
                {SITE.telephoneDisplay}
              </a>{" "}
              or in person at {SITE.address.full}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
