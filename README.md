# Aptive Labs website

Site for **labs.aptiveindustries.com**. Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion and Lenis smooth scrolling. It exports to plain static files, so any host can serve it.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site written to ./out
```

## Change the text

All copy lives in one file: `src/content/site.ts` (company details, services, clients, process, values, leadership, certifications). It matches "Website & LinkedIn Copy v1" in Notion. Edit it there and rebuild.

When the business email exists, change `email` in `src/content/site.ts`.

## Switch on the quote form

A static site cannot send email by itself. The form posts to a form service:

1. Create a free form at Formspree (or similar) and copy its endpoint URL.
2. Set it as an environment variable before building:
   `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xyezqayr`
3. Rebuild and send a test request. Log each lead in the Notion Sales Pipeline (Stage: Lead, Source: Website).

Until it is set, the form tells visitors to call or email instead.

## Deploy

- **Vercel or Netlify (easiest):** import the project, set the environment variable above, and deploy. Then add `labs.aptiveindustries.com` as a custom domain and create the CNAME record they show you at your domain registrar.
- **Any web host / cPanel:** run `npm run build` and upload the contents of `out/` to the subdomain's folder.

## Before launch

- [ ] Domain and `labs` subdomain pointing to the host
- [ ] Business email replaces the Gmail address
- [ ] Privacy notice reviewed by the lawyer (remove the draft banner in `src/app/privacy/page.tsx` and fill the [bracketed] text)
- [ ] Quote form tested end to end
- [ ] LinkedIn URL in `src/content/site.ts` matches the real company page

## Animation map (inspired by Orchid Security, FMI Industries, WeEvolveIT)

| Pattern                                                                   | Where                      | File                           |
| ------------------------------------------------------------------------- | -------------------------- | ------------------------------ |
| Live node network hero (canvas, reacts to cursor)                         | Home hero                  | `components/NodeNetwork.tsx`   |
| Word-by-word masked headline rise                                         | Every H1/H2                | `components/Reveal.tsx`        |
| Scroll reveal (fade and rise)                                             | All sections               | `components/Reveal.tsx`        |
| Blurred sticky nav, hides on scroll down, mega-menu, circular mobile menu | Global                     | `components/Nav.tsx`           |
| Client logo marquee (pauses on hover)                                     | Home                       | `components/Marquee.tsx`       |
| Scroll-linked "four vendors become one team"                              | Home                       | `components/Converge.tsx`      |
| Cursor spotlight cards                                                    | Services, pillars, clients | `components/Cards.tsx`         |
| Count-up facts                                                            | Home                       | `components/Counter.tsx`       |
| Auto-advancing process tabs with progress bar                             | Home                       | `components/ProcessTabs.tsx`   |
| Giant outline text band                                                   | Home, About                | `components/Sections.tsx`      |
| Connected step journey                                                    | Service pages              | `app/services/[slug]/page.tsx` |
| FAQ accordion                                                             | Home, IT-as-a-Service      | `components/Accordion.tsx`     |
| Smooth weighted scroll                                                    | Global                     | `components/SmoothScroll.tsx`  |

All motion respects the visitor's "reduce motion" setting.

© 2026 Aptive Industries Limited. Aptive Labs is the IT division of Aptive Industries Limited, RC 9681118.
