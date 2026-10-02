import type { Metadata } from "next";
import Link from "next/link";
import { clients } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/Cards";
import { CTA, ClientLogo, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: { absolute: "Our Clients | Aptive Labs" },
  description: "Businesses that run their IT with Aptive Labs, and the software and security systems we have built for them.",
};

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Clients who rely on us"
        lead="Four of our clients run their entire IT with us as a service. Others came to us for software and security systems."
      />
      <section className="pb-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 0.08}>
              <SpotlightCard>
                <div className="flex h-full flex-col">
                  <div className="grid h-32 place-items-center rounded-xl bg-white/[0.03]">
                    <ClientLogo k={c.key} name={c.name} className="h-12 max-w-[170px]" />
                  </div>
                  <p className="mt-6 font-mono text-xs uppercase tracking-widest text-signal">{c.service}</p>
                  <h2 className="mt-2 text-xl font-semibold">{c.name}</h2>
                  <p className="mt-3 text-haze">{c.line}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA title="Want to be next?" lead="Tell us what needs to work and we will send you a clear proposal." />
      <p className="sr-only">
        <Link href="/contact/">Request a quote</Link>
      </p>
    </>
  );
}
