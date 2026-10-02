import type { Metadata } from "next";
import { services } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/Cards";
import { Button, CTA, PageHero, SectionHead } from "@/components/Sections";

export const metadata: Metadata = {
  title: { absolute: "IT Services in Nigeria | Aptive Labs" },
  description: "IT-as-a-Service, software, CCTV and access control, networks and staff training from one accountable team in Kano, delivering nationwide.",
};

const cardText: Record<string, string> = {
  "it-as-a-service": "We become your IT department under a monthly agreement.",
  software: "Software built by our own developers around how your business works.",
  "data-protection": "NDPA compliance consulting, virtual DPO, privacy audits and DPIAs.",
  "security-systems": "CCTV surveillance and access control, designed for your site and installed properly.",
  networks: "Office and site networks planned, installed and documented by a MikroTik-certified team.",
  training: "Practical training in cybersecurity awareness, productivity tools and AI literacy.",
};

const models = [
  ["Monthly agreement", "IT-as-a-Service, network management, maintenance", "Monthly fee based on agreed scope"],
  ["Project", "Software, websites, installations, privacy audits and DPIAs", "Quoted after assessment"],
  ["Support or maintenance", "After a launch or installation", "Agreed per system"],
  ["Training", "Cybersecurity, productivity tools, AI literacy", "Per session or per group"],
  ["Virtual DPO", "Ongoing data protection compliance and DPO support", "Monthly fee based on agreed scope"],
];

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Six services, one accountable team" lead="Use one service, or let IT-as-a-Service tie them all together." />
      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08} className="lg:col-span-2">
              <ServiceCard s={{ ...s, short: cardText[s.slug] }} featured={i < 3} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="How we engage"
            title="How we work with you"
            lead="Every engagement includes a written proposal, one named contact, early notice of any change, and documentation of what we build."
          />
          <div className="mt-14 overflow-hidden rounded-2xl border border-line">
            <div className="hidden grid-cols-3 gap-6 border-b border-line bg-steel/40 px-8 py-4 font-mono text-xs uppercase tracking-widest text-haze md:grid">
              <span>Model</span>
              <span>Used for</span>
              <span>Pricing</span>
            </div>
            {models.map(([m, u, p], i) => (
              <Reveal key={m} delay={i * 0.06} className="grid gap-2 border-b border-line px-8 py-6 transition-colors last:border-0 hover:bg-steel/20 md:grid-cols-3 md:gap-6">
                <span className="text-lg font-semibold">{m}</span>
                <span className="text-haze">{u}</span>
                <span className="text-signal">{p}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Button href="/contact/">Request a quote</Button>
          </Reveal>
        </div>
      </section>
      <CTA />
    </>
  );
}
