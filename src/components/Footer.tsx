import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company, services } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="glow -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/aptive-logo-horizontal-color-on-dark.svg" alt="Aptive" className="h-9 w-auto" />
            <p className="mt-6 text-2xl font-semibold">{company.tagline}</p>
            <p className="mt-3 max-w-sm text-haze">One team to build and run your technology.</p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-carbon transition-shadow hover:shadow-[0_0_32px_rgba(43,212,125,0.45)]"
            >
              Request a quote <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow">Services</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="text-haze transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-3 text-haze">
              <li>
                <a href={company.phoneHref} className="inline-flex items-center gap-3 hover:text-white">
                  <Phone size={16} className="text-signal" /> {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="inline-flex items-center gap-3 break-all hover:text-white">
                  <Mail size={16} className="shrink-0 text-signal" /> {company.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin size={16} className="text-signal" /> {company.city} · Delivering nationwide
              </li>
              <li>
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-haze md:flex-row md:items-center md:justify-between">
          <p>{company.legalLine}</p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="hover:text-white">
              Privacy notice
            </Link>
            <span>© 2026 {company.legal}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
