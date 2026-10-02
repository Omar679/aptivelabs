"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { company, FORM_ENDPOINT } from "@/content/site";

const serviceOptions = ["IT-as-a-Service", "Software", "Data protection", "Security systems", "Network infrastructure", "Training", "Not sure"];
const slugToOption: Record<string, string> = {
  "it-as-a-service": "IT-as-a-Service",
  software: "Software",
  "data-protection": "Data protection",
  "security-systems": "Security systems",
  networks: "Network infrastructure",
  training: "Training",
};

type State = "idle" | "sending" | "sent" | "error" | "offline";

const field =
  "w-full rounded-xl border border-line bg-ink/70 px-4 py-3.5 text-white placeholder:text-graphite outline-none transition-colors focus:border-signal";

function Label({ children, optional }: { children: string; optional?: boolean }) {
  return (
    <span className="mb-2 block text-sm font-medium text-haze">
      {children}
      {optional && <span className="ml-1 text-graphite">(optional)</span>}
    </span>
  );
}

export default function QuoteForm() {
  const params = useSearchParams();
  const preset = slugToOption[params?.get("service") ?? ""] ?? "";
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORM_ENDPOINT) {
      setState("offline");
      return;
    }
    setState("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl border border-signal/40 bg-steel/30 p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-signal text-carbon">
          <Check />
        </span>
        <p className="mt-6 text-2xl font-semibold">Thank you.</p>
        <p className="mt-3 text-haze">We have received your request and will contact you to arrange the next step.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl border border-line bg-steel/20 p-6 md:grid-cols-2 md:p-10">
      <input type="hidden" name="_subject" value="New quote request from labs.aptiveindustries.com" />
      <label>
        <Label>Full name</Label>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label>
        <Label>Organisation</Label>
        <input name="organisation" required autoComplete="organization" className={field} />
      </label>
      <label>
        <Label>Email</Label>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label>
        <Label>Phone</Label>
        <input name="phone" type="tel" required autoComplete="tel" className={field} />
      </label>
      <label className="md:col-span-2">
        <Label>Service you need</Label>
        <select name="service" required defaultValue={preset} className={`${field} appearance-none`}>
          <option value="" disabled>
            Choose a service
          </option>
          {serviceOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label className="md:col-span-2">
        <Label>Tell us what needs to work</Label>
        <textarea name="message" required rows={5} className={field} />
      </label>
      <fieldset className="md:col-span-2">
        <Label optional>Preferred contact</Label>
        <div className="flex flex-wrap gap-3">
          {["Phone", "WhatsApp", "Email"].map((o) => (
            <label key={o} className="cursor-pointer">
              <input type="radio" name="preferred_contact" value={o} className="peer sr-only" />
              <span className="inline-block rounded-full border border-line px-5 py-2 text-sm text-haze transition-colors peer-checked:border-signal peer-checked:bg-signal/10 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-signal">
                {o}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex items-start gap-3 text-sm text-haze md:col-span-2">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-[#2BD47D]" />
        <span>
          I agree that Aptive Labs may use these details to respond to my enquiry, as described in the{" "}
          <Link href="/privacy/" className="text-signal underline underline-offset-4">
            Privacy notice
          </Link>
          .
        </span>
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 font-semibold text-carbon transition-shadow hover:shadow-[0_0_40px_rgba(43,212,125,0.5)] disabled:opacity-60"
        >
          {state === "sending" && <Loader2 size={16} className="animate-spin" />}
          Send request
        </button>
        <AnimatePresence>
          {(state === "offline" || state === "error") && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-xl border border-line bg-ink p-4 text-sm text-haze" role="status">
              {state === "offline" ? "Online requests are not switched on yet." : "Your request could not be sent."} Please call{" "}
              <a href={company.phoneHref} className="text-signal">
                {company.phone}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${company.email}`} className="break-all text-signal">
                {company.email}
              </a>
              .
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
