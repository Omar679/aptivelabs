import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Aptive Labs collects and uses personal data submitted through this website, in line with the Nigeria Data Protection Act 2023.",
  robots: { index: false },
};

const sections: [string, string][] = [
  ["Who we are", "Aptive Industries Limited (RC 9681118), trading as Aptive Labs, Kano, Nigeria, is responsible for personal data collected through this website."],
  ["What we collect", "The details you enter in the quote request form: name, organisation, email, phone number, the service you are interested in and your message."],
  ["Why we use it", "To respond to your enquiry, prepare a proposal and follow up with you. We rely on your consent, given when you submit the form."],
  ["Who we share it with", "Only our staff and consultants who need it to respond to you. We do not sell your data. [List any service providers, e.g. website hosting or form provider.]"],
  ["How long we keep it", "[Period, e.g. 24 months after our last contact], unless you become a client, in which case contract records are kept as the law requires."],
  ["Your rights", "You can ask to see, correct or delete your data, or withdraw consent, by contacting [privacy contact email]. You can also complain to the Nigeria Data Protection Commission."],
  ["Security", "We protect your data with [measures]."],
  ["Changes", "We will update this notice when our practices change. Last updated: [date]."],
];

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy notice" />
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-5 text-sm text-yellow-100">
            <strong>Draft: pending legal review.</strong> This notice is a starting draft aligned to the Nigeria Data Protection Act 2023. Text in
            [brackets] will be completed after review.
          </div>
          <div className="mt-12 space-y-10">
            {sections.map(([h, b]) => (
              <div key={h} className="border-b border-line pb-10">
                <h2 className="text-xl font-semibold">{h}</h2>
                <p className="mt-3 leading-relaxed text-haze">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
