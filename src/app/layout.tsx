import type { Metadata, Viewport } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://labs.aptiveindustries.com"),
  title: { default: "Aptive Labs | IT Support, Software, Networks and CCTV", template: "%s | Aptive Labs" },
  description:
    "Aptive Labs builds and runs the technology Nigerian businesses rely on: IT support, software, networks and surveillance, from Kano to nationwide.",
  openGraph: {
    type: "website",
    siteName: "Aptive Labs",
    locale: "en_NG",
    images: [{ url: "/brand/og-cover.png", width: 1200, height: 630, alt: "Aptive Labs. Built here. Built properly." }],
  },
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/favicon-32.png", sizes: "32x32" }], apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "#0F1419" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-carbon text-white antialiased">
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
