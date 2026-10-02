"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/content/site";
import { icons } from "./icons";

const links = [
  { href: "/services/", label: "Services", dropdown: true },
  { href: "/clients/", label: "Clients" },
  { href: "/about/", label: "About" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const path = usePathname();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 300 && y > prev && !open);
  });

  useEffect(() => {
    setOpen(false);
    setDrop(false);
  }, [path]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 md:px-6 ${
            scrolled || open ? "border-line bg-carbon/75 backdrop-blur-xl" : "border-transparent bg-transparent"
          }`}
        >
          <Link href="/" aria-label="Aptive Labs home" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/aptive-logo-horizontal-color-on-dark.svg" alt="Aptive" className="h-7 w-auto md:h-8" />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href} className="relative" onMouseEnter={() => l.dropdown && setDrop(true)} onMouseLeave={() => l.dropdown && setDrop(false)}>
                <Link
                  href={l.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white ${
                    path?.startsWith(l.href) ? "text-white" : "text-haze"
                  }`}
                >
                  {l.label}
                  {l.dropdown && <ChevronDown size={14} className={`transition-transform ${drop ? "rotate-180" : ""}`} />}
                </Link>
                {l.dropdown && (
                  <AnimatePresence>
                    {drop && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.22 }}
                        className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3"
                      >
                        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-carbon/95 p-2 shadow-2xl backdrop-blur-xl">
                          {services.map((s) => {
                            const Icon = icons[s.icon];
                            return (
                              <Link key={s.slug} href={`/services/${s.slug}/`} className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-steel/50">
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-steel text-signal">
                                  <Icon size={17} strokeWidth={1.7} />
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-white">{s.name}</span>
                                  <span className="mt-0.5 block text-xs leading-snug text-haze">{s.short}</span>
                                </span>
                              </Link>
                            );
                          })}
                          <Link href="/services/" className="flex items-center justify-between rounded-xl p-3 text-sm font-semibold text-signal hover:bg-steel/50">
                            All services <ArrowUpRight size={15} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact/"
              className="hidden rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-carbon transition-all hover:shadow-[0_0_32px_rgba(43,212,125,0.45)] sm:inline-flex"
            >
              Request a quote
            </Link>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 overflow-y-auto bg-carbon px-6 pb-10 pt-28 md:hidden"
          >
            <div className="glow -right-20 top-10 h-72 w-72" />
            <ul className="relative space-y-1">
              {[{ href: "/", label: "Home" }, ...links, { href: "/contact/", label: "Request a quote" }].map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.06 }}>
                  <Link href={l.href} className="flex items-center justify-between border-b border-line py-5 text-3xl font-semibold">
                    {l.label}
                    <ArrowUpRight className="text-signal" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="relative mt-8 grid gap-2">
              <p className="eyebrow mb-2">Services</p>
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}/`} className="text-haze hover:text-white">
                  {s.name}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
