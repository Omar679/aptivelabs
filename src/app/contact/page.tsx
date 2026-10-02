import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/content/site";
import QuoteForm from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: { absolute: "Request a Quote | Aptive Labs" },
  description: "Tell us what needs to work. Aptive Labs will assess it and send you a clear proposal. Kano, Nigeria, delivering nationwide.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us what needs to work"
        lead="We will assess it and send you a clear proposal covering scope, cost, timeline and support."
      />
      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <Suspense>
              <QuoteForm />
            </Suspense>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4">
            {[
              { Icon: Phone, label: "Call or WhatsApp", value: company.phone, href: company.phoneHref },
              { Icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
              { Icon: MapPin, label: "Location", value: `${company.city} · Delivering nationwide` },
            ].map(({ Icon, label, value, href }) => {
              const body = (
                <div className="flex gap-4 rounded-2xl border border-line p-6 transition-colors hover:border-signal/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-steel text-signal">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs uppercase tracking-widest text-haze">{label}</span>
                    <span className="mt-1 block break-all text-lg font-medium">{value}</span>
                  </span>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block">
                  {body}
                </a>
              ) : (
                <div key={label}>{body}</div>
              );
            })}
            <p className="px-2 pt-4 text-sm text-haze">{company.legalLine}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
