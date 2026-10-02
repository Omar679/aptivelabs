import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { clients, services } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import OfferTabs from "@/components/OfferTabs";
import Marquee from "@/components/Marquee";
import { ServiceCard } from "@/components/Cards";
import { icons } from "@/components/icons";
import { Button, CTA, ClientLogo, PageHero, SectionHead } from "@/components/Sections";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDescription };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const Icon = icons[s.icon];
  const related = clients.filter((c) => s.clients?.includes(c.short));
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={`${s.n} · ${s.name}`} title={s.h1} lead={s.lead}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href={`/contact/?service=${s.slug}`}>{s.cta}</Button>
          <span className="ml-2 inline-flex items-center gap-3 text-sm text-haze">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-steel text-signal">
              <Icon size={18} />
            </span>
            {s.engagement.split(".")[0]}
          </span>
        </div>
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="The problem" title="Why this matters" />
            <Reveal delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed text-haze">{s.problem}</p>
            </Reveal>
            {s.extra && (
              <Reveal delay={0.2} className="mt-10 rounded-2xl border border-signal/30 bg-signal/5 p-7">
                <p className="font-semibold">{s.extra.title}</p>
                <ul className="mt-4 space-y-2 text-haze">
                  {s.extra.items.map((x) => (
                    <li key={x}>— {x}</li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.1} className="rounded-2xl border border-line bg-steel/20 p-8 md:p-10">
            <p className="eyebrow">What you get</p>
            <ul className="mt-8 space-y-5">
              {s.get.map((g, i) => (
                <Reveal as="li" key={g} delay={0.15 + i * 0.05} className="flex gap-4 text-lg">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-signal text-carbon">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {g}
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {s.offers && (
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHead eyebrow="What we offer" title={`${s.offers.length} ways we help`} />
            <div className="mt-12">
              <OfferTabs offers={s.offers} />
            </div>
            {s.packages && (
              <div className="mt-16">
                <Reveal>
                  <p className="eyebrow">{s.packages.title}</p>
                </Reveal>
                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  {s.packages.names.map((n, i) => (
                    <Reveal key={n} delay={i * 0.08}>
                      <div className={`group relative h-full overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 ${i === 1 ? "border-signal/50 bg-steel/40" : "border-line bg-ink/60 hover:border-signal/40"}`}>
                        <span className="font-mono text-sm text-signal">0{i + 1}</span>
                        <p className="mt-8 text-2xl font-semibold">{n}</p>
                        <p className="mt-3 text-sm text-haze">Monthly · quoted after assessment</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal>
                  <p className="mt-6 max-w-2xl text-haze">{s.packages.note}</p>
                </Reveal>
              </div>
            )}
          </div>
          {s.sectors && (
            <div className="mt-20">
              <Reveal className="mx-auto max-w-7xl px-6">
                <p className="eyebrow">{s.sectors.title}</p>
              </Reveal>
              <div className="mt-6">
                <Marquee speed={40}>
                  {s.sectors.items.map((x) => (
                    <span key={x} className="mx-3 whitespace-nowrap rounded-full border border-line px-6 py-3 text-lg text-haze transition-colors hover:border-signal hover:text-white">
                      {x}
                    </span>
                  ))}
                </Marquee>
              </div>
            </div>
          )}
        </section>
      )}

      {/* connected step journey */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead eyebrow="How it works" title={`${s.steps.length} steps, start to finish`} />
          <ol className="relative mt-16 grid gap-10 md:gap-6" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(180px, 1fr))` }}>
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-signal via-signal/40 to-transparent md:block" />
            {s.steps.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.1} className="relative">
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-signal bg-carbon font-mono text-sm text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-haze">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-line p-8">
            <p className="eyebrow">Best for</p>
            <p className="mt-5 text-xl leading-snug">{s.bestFor}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-line p-8">
            <p className="eyebrow">How we engage</p>
            <p className="mt-5 text-xl leading-snug">{s.engagement}</p>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-20 max-w-7xl px-6">
            <Reveal>
              <p className="eyebrow">Clients using this service</p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((c, i) => (
                <Reveal key={c.key} delay={i * 0.08} className="grid h-28 place-items-center rounded-2xl border border-line bg-ink/60 p-6 transition-colors hover:border-signal/40">
                  <ClientLogo k={c.key} name={c.name} className="h-10 max-w-[140px]" />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {s.faqs && (
          <div className="mx-auto mt-24 grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
            <SectionHead eyebrow="Questions" title="Common questions" />
            <Reveal delay={0.1}>
              <Accordion items={s.faqs} />
            </Reveal>
          </div>
        )}
      </section>

      <section className="border-t border-line py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow">Other services</p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.08}>
                <ServiceCard s={o} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA button={s.cta} />
    </>
  );
}
