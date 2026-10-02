import type { Metadata } from "next";
import { certifications, company, leadership, privacyCertification, values } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/Cards";
import { CTA, PageHero, SectionHead, TextBand } from "@/components/Sections";

export const metadata: Metadata = {
  title: { absolute: "About Aptive Labs | IT Company in Kano, Nigeria" },
  description: "Aptive Labs is the IT division of Aptive Industries Limited. One team to build and run your technology, based in Kano and working nationwide.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Aptive Labs"
        lead="Aptive Labs is a Kano-based IT company. We write software, help organisations comply with data protection law, design and install networks, set up CCTV and access control, and look after companies' IT every month."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-2xl font-medium leading-snug md:text-3xl">
              We set Aptive Labs up to be the one accountable partner that most businesses are missing.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-haze">
            <p>
              The same team that builds your systems stays responsible for keeping them running, and documents everything so you are never locked out
              of your own technology.
            </p>
            <p>Aptive Labs is the IT division of Aptive Industries Limited, incorporated in Nigeria in 2026.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2">
          {[
            ["Our mission", "To give Nigerian businesses technology they can depend on: built properly, documented clearly, and supported by people they can reach."],
            ["Our vision", "A Nigeria where businesses do not need to look abroad for technology they can trust, because it is being built to that standard here."],
          ].map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <SpotlightCard className="md:p-12">
                <p className="eyebrow">{t}</p>
                <p className="mt-8 text-2xl font-medium leading-snug md:text-3xl">{b}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="What we value" title="How we work, every time" />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {values.map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.08} className="group bg-carbon p-8 transition-colors hover:bg-steel/40">
                <span className="font-mono text-sm text-signal">0{i + 1}</span>
                <h3 className="mt-10 text-xl font-semibold">{t}.</h3>
                <p className="mt-3 text-haze">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TextBand />

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Leadership"
              title="Directors who lead every engagement"
              lead="For each project we bring in specialist engineers and developers from our network of vetted consultants."
            />
            <ul className="mt-12 border-t border-line">
              {leadership.map(([n, r], i) => (
                <Reveal as="li" key={n} delay={i * 0.08} className="flex items-baseline justify-between gap-4 border-b border-line py-6">
                  <span className="text-2xl font-semibold">{n}</span>
                  <span className="font-mono text-sm text-haze">{r}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead eyebrow="Certifications" title="Held by our team" />
            <div className="mt-12 grid gap-4">
              {[...certifications, [privacyCertification, "Data protection and privacy"]].map(([n, d], i) => (
                <Reveal key={n} delay={i * 0.08}>
                  <SpotlightCard className="!p-6">
                    <p className="text-xl font-semibold">{n}</p>
                    <p className="mt-1 text-haze">{d}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 rounded-2xl border border-line p-6 font-mono text-sm text-haze">
              <p className="eyebrow mb-3">Company details</p>
              {company.legal} · RC {company.rc} · TIN {company.tin} · {company.city}
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
