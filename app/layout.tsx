import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyBar from "@/components/StickyBar";
import CookieBanner from "@/components/CookieBanner";
import ExitIntent from "@/components/ExitIntent";
import BackToTop from "@/components/BackToTop";
import SocialProof from "@/components/SocialProof";

const BASE_URL = "https://iptvgreeks.gr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IPTV Greek – Ελληνικά Κανάλια HD & 4K | 10.000+ Κανάλια",
    template: "%s | IPTV Greek",
  },
  description:
    "Αξιόπιστη IPTV υπηρεσία με πάνω από 10.000 κανάλια — Ελληνικά, αθλητικά και διεθνή σε HD & 4K. Δωρεάν δοκιμή 24 ωρών. Άμεση ενεργοποίηση μέσω WhatsApp.",
  keywords: [
    "IPTV Greek",
    "ελληνικά κανάλια",
    "iptv ελληνικά",
    "greek iptv",
    "ελληνική iptv",
    "iptv 4k",
    "nova sport iptv",
    "cosmote sport iptv",
  ],
  authors: [{ name: "IPTV Greek" }],
  creator: "IPTV Greek",
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: BASE_URL,
    siteName: "IPTV Greek",
    title: "IPTV Greek – Ελληνικά Κανάλια HD & 4K",
    description:
      "Πάνω από 10.000 κανάλια σε HD & 4K. Δωρεάν δοκιμή 24 ωρών.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IPTV Greek – Ελληνικά Κανάλια",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Greek – Ελληνικά Κανάλια HD & 4K",
    description:
      "Πάνω από 10.000 κανάλια σε HD & 4K. Δωρεάν δοκιμή 24 ωρών.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "IPTV Greek",
  description: "Αξιόπιστη IPTV υπηρεσία με πάνω από 10.000 κανάλια σε HD & 4K για ελληνικές κοινότητες παγκοσμίως.",
  url: BASE_URL,
  telephone: "+212707711512",
  email: "goldengateiptv@gmail.com",
  priceRange: "€€",
  areaServed: "GR",
  serviceType: "IPTV Streaming Service",
  sameAs: [`https://wa.me/212707711512`],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="h-full">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <StickyBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <CookieBanner />
        <ExitIntent />
        <SocialProof />
      </body>
    </html>
  );
}
