import { clients, pillars, processSteps, services } from "@/content/site";
import NodeNetwork from "@/components/NodeNetwork";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import Accordion from "@/components/Accordion";
import ProcessTabs from "@/components/ProcessTabs";
import Converge from "@/components/Converge";
import { Reveal, SplitText } from "@/components/Reveal";
import { ServiceCard, SpotlightCard } from "@/components/Cards";
import { Button, CTA, ClientLogo, SectionHead, TextBand } from "@/components/Sections";

const faqs: [string, string][] = [
  ["Do you only work in Kano?", "No. We are based in Kano and work with clients across Nigeria."],
  ["Can we use just one service?", "Yes. Use one service, or let IT-as-a-Service tie them all together."],
  ["Do you help with NDPA compliance?", "Yes. We provide compliance consulting, virtual DPO support, privacy audits and DPIAs. We are not yet an NDPC-licensed DPCO; where one is required we work alongside a licensed DPCO."],
  ["How is pricing set?", "Monthly agreements are priced on the agreed scope. Projects are quoted after an assessment. Training is priced per session or per group."],
  ["What do we get before any work starts?", "A written proposal that sets out the scope, cost, timeline and support, and one named contact."],
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32">
        <NodeNetwork className="absolute inset-0 h-full w-full opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-carbon)_75%)]" />
        <div className="glow -left-40 top-1/4 h-[30rem] w-[30rem] opacity-60" />
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-3 rounded-full border border-line bg-carbon/60 px-4 py-2 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Aptive Labs · Kano, Nigeria
            </p>
          </Reveal>
          <SplitText
            text="IT support, software, networks and surveillance for Nigerian businesses."
            className="mt-8 max-w-5xl text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            delay={0.1}
          />
          <Reveal delay={0.6}>
            <p className="mt-8 max-w-xl text-lg text-haze md:text-xl">
              One team to build and run your technology. <span className="text-white">Built here. Built properly.</span>
            </p>
          </Reveal>
          <Reveal delay={0.75} className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact/">Request a quote</Button>
            <Button href="/services/" variant="ghost">
              See our services
            </Button>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-haze md:flex">
          Scroll
          <span className="h-10 w-px overflow-hidden bg-line">
            <span className="block h-1/2 w-full animate-[scrollcue_1.8s_ease-in-out_infinite] bg-signal" />
          </span>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-line bg-ink py-12">
        <p className="mb-8 px-6 text-center text-sm text-haze">
          Exobridge Industries, Ezyride, NomAgro and Anavam run their IT with Aptive Labs as a service.
        </p>
        <Marquee speed={32}>
          {clients.map((c) => (
            <div key={c.key} className="mx-10 flex h-14 items-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 md:mx-14">
              <ClientLogo k={c.key} name={c.name} className="h-9 max-w-[150px] md:h-11" />
            </div>
          ))}
        </Marquee>
      </section>

      {/* PROBLEM */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="The problem" title="Four vendors. Nobody owns the problem." />
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg leading-relaxed text-haze">
                Most businesses deal with one company for software, another for the network, another for the cameras, and someone else when a
                computer fails. When something stops working, calls go back and forth and nothing gets fixed.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white">
                Aptive Labs is the one accountable partner instead. The team that builds your systems stays responsible for keeping them running.
              </p>
            </Reveal>
          </div>
          <Converge />
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 md:py-32">
        <div className="glow right-0 top-20 h-96 w-96 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHead eyebrow="What we do" title="Six services, one accountable team" />
            <Reveal>
              <Button href="/services/" variant="ghost">
                All services
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08} className="lg:col-span-2">
                <ServiceCard s={s} featured={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="border-y border-line">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
          {[
            [4, "clients run their IT with us as a service"],
            [6, "named clients across software, security and IT"],
            [6, "services from one accountable team"],
            [3, "cloud and network certifications held by our IT team"],
          ].map(([n, label], i) => (
            <Reveal key={i} delay={i * 0.08} className={`border-line py-12 pr-6 ${i % 2 ? "pl-6 border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}>
              <Counter to={n as number} className="font-mono text-5xl font-medium text-signal md:text-7xl" />
              <p className="mt-4 max-w-[14rem] text-sm text-haze md:text-base">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="Why Aptive Labs" title="Built properly, by one team, here." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <SpotlightCard>
                  <span className="font-mono text-sm text-signal">0{i + 1}</span>
                  <h3 className="mt-10 text-2xl font-semibold">{p.title}.</h3>
                  <p className="mt-4 text-haze">{p.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="How we work"
            title="Six steps, from first call to long-term support"
            lead="Every engagement starts with a written proposal that sets out the scope, cost, timeline and support."
          />
          <div className="mt-14">
            <ProcessTabs steps={processSteps} />
          </div>
        </div>
      </section>

      <TextBand />

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
          <SectionHead eyebrow="Questions" title="Good to know" />
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}

