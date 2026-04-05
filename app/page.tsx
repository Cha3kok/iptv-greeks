import type { Metadata } from "next";
import Link from "next/link";
import { Tv, Shield, Zap, Headphones, Check, Star, ChevronDown } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import PricingToggle from "@/components/PricingToggle";
import AnimatedCounter from "@/components/AnimatedCounter";
import CountdownTimer from "@/components/CountdownTimer";
import DeviceLogos from "@/components/DeviceLogos";

export const metadata: Metadata = {
  title: "IPTV Greek – Ελληνικά Κανάλια HD & 4K | 10.000+ Κανάλια",
  description:
    "Η #1 ελληνική IPTV υπηρεσία. 10.000+ κανάλια σε HD & 4K, αθλητικά, VOD. Δωρεάν δοκιμή 24 ωρών. Ενεργοποίηση σε λεπτά μέσω WhatsApp.",
  alternates: { canonical: "https://iptvgreeks.gr" },
  openGraph: {
    title: "IPTV Greek – Ελληνικά Κανάλια HD & 4K",
    description: "10.000+ κανάλια σε HD & 4K. Δωρεάν δοκιμή 24 ωρών.",
    url: "https://iptvgreeks.gr",
  },
};

const features = [
  {
    icon: Tv,
    title: "10.000+ Κανάλια",
    desc: "Ελληνικά, αθλητικά, διεθνή κανάλια σε HD και 4K.",
  },
  {
    icon: Zap,
    title: "Άμεση Ενεργοποίηση",
    desc: "Λογαριασμός ενεργός σε λιγότερο από 5 λεπτά.",
  },
  {
    icon: Shield,
    title: "Anti-Freeze Τεχνολογία",
    desc: "Σταθερή ροή χωρίς διακοπές — ακόμα και σε αγώνες.",
  },
  {
    icon: Headphones,
    title: "24/7 Υποστήριξη",
    desc: "Τεχνική βοήθεια μέσω WhatsApp ανά πάσα στιγμή.",
  },
];

const included = [
  "Mega, ANT1, Alpha, Star, Open, ΣΚΑΙ, ΕΡΤ",
  "Nova Sports & Cosmote Sport",
  "Champions League & Super League",
  "VOD — χιλιάδες ταινίες & σειρές",
  "Συμβατό με Xtream / M3U / MAG",
  "Έως 2 ταυτόχρονες συνδέσεις",
  "Catch-up TV (7 ημέρες)",
  "Δωρεάν δοκιμή 24 ωρών",
];

const testimonials = [
  {
    name: "Νίκος Π.",
    location: "Αθήνα",
    rating: 5,
    text: "Εξαιρετική υπηρεσία! Παρακολουθώ όλα τα αθλητικά χωρίς κανένα πρόβλημα. Η υποστήριξη ήταν άμεση και με βοήθησε στη ρύθμιση.",
  },
  {
    name: "Μαρία Κ.",
    location: "Μελβούρνη, Αυστραλία",
    rating: 5,
    text: "Επιτέλους μπορώ να παρακολουθώ ελληνική τηλεόραση από την Αυστραλία χωρίς καθυστερήσεις. Ακριβώς αυτό που χρειαζόμουν!",
  },
  {
    name: "Γιώργος Μ.",
    location: "Θεσσαλονίκη",
    rating: 5,
    text: "3 χρόνια πελάτης. Η ποιότητα είναι σταθερά εξαιρετική. Το καλύτερο IPTV που έχω δοκιμάσει στην Ελλάδα.",
  },
  {
    name: "Ελένη Δ.",
    location: "Λονδίνο, ΗΒ",
    rating: 5,
    text: "Ζω στο Λονδίνο και χρησιμοποιώ IPTV Greek για να παρακολουθώ τα ελληνικά νέα κάθε μέρα. Τέλεια ποιότητα εικόνας!",
  },
];

const trustBadges = [
  { count: 55000, suffix: "+", sub: "Ζωντανά Κανάλια" },
  { count: 5000, suffix: "+", sub: "Ικανοποιημένοι Πελάτες" },
  { count: 90000, suffix: "+", sub: "Ταινίες & Σειρές" },
  { count: 99, suffix: ".9%", sub: "Uptime" },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IPTV Greek",
  description:
    "Premium ελληνική IPTV υπηρεσία με 10.000+ κανάλια σε HD & 4K.",
  url: "https://iptvgreeks.gr",
  provider: {
    "@type": "Organization",
    name: "IPTV Greek",
    url: "https://iptvgreeks.gr",
  },
  areaServed: "GR",
  serviceType: "IPTV Streaming",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#059669] via-[#047857] to-[#1e293b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#ffffff_0%,_transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/20">
            ✅ Δωρεάν δοκιμή 24 ωρών — χωρίς δέσμευση
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
            Ελληνική IPTV σε{" "}
            <span className="text-yellow-300">HD & 4K</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Παρακολουθήστε πάνω από{" "}
            <strong className="text-white">10.000 κανάλια</strong> — Ελληνικά,
            αθλητικά και διεθνή — σε οποιαδήποτε συσκευή, οπουδήποτε στον
            κόσμο.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/212707711512"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#059669] font-bold px-8 py-4 rounded-full hover:bg-emerald-50 transition-colors text-base shadow-lg"
            >
              🎉 Δωρεάν Δοκιμή 24 Ωρών
            </a>
            <Link
              href="/rythmisi-iptv"
              className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base"
            >
              Οδηγός Ρύθμισης
            </Link>
          </div>
          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-emerald-100">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> Χωρίς πιστωτική κάρτα</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> Ενεργοποίηση σε 5 λεπτά</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> Ακύρωση οποτεδήποτε</span>
          </div>
          <CountdownTimer />
        </div>
      </section>

      {/* Trust badges — animated */}
      <section className="bg-[#1e293b] text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustBadges.map((b) => (
              <div key={b.sub}>
                <div className="text-3xl font-extrabold text-[#34d399]">
                  <AnimatedCounter target={b.count} suffix={b.suffix} />
                </div>
                <div className="text-sm text-gray-400 mt-1">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DeviceLogos />

      {/* Features */}
      <section className="py-16 px-4 bg-[#f0fdf4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e293b] mb-3">
            Γιατί να επιλέξετε IPTV Greek;
          </h2>
          <p className="text-center text-[#334155] mb-10 max-w-xl mx-auto">
            Η πιο αξιόπιστη ελληνική IPTV υπηρεσία με τεχνολογία αιχμής και
            υποστήριξη 24/7.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-[#059669]" />
                </div>
                <h3 className="font-semibold text-[#1e293b] mb-2">{title}</h3>
                <p className="text-sm text-[#334155] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">
                Τι περιλαμβάνεται σε κάθε πακέτο
              </h2>
              <p className="text-[#334155] mb-6 leading-relaxed">
                Κάθε συνδρομή IPTV Greek περιλαμβάνει πλήρη πρόσβαση σε όλα τα
                κανάλια και χαρακτηριστικά — χωρίς κρυφές χρεώσεις.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#334155]">
                    <span className="flex items-center justify-center w-5 h-5 bg-green-100 rounded-full shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#059669] to-[#1e293b] rounded-3xl p-8 text-white text-center shadow-xl">
              <div className="text-5xl mb-4">📺</div>
              <h3 className="text-xl font-bold mb-2">Συμβατό με όλες τις συσκευές</h3>
              <p className="text-emerald-100 text-sm mb-6 leading-relaxed">
                Smart TV, Android Box, Firestick, iPhone, PC, MAG Box και οποιαδήποτε συσκευή με internet.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {["Smart TV", "Android", "iOS", "Firestick", "MAG", "PC"].map((d) => (
                  <span key={d} className="bg-white/20 px-3 py-1 rounded-full">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-[#f0fdf4]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e293b] mb-3">
            Απλές & Διαφανείς Τιμές
          </h2>
          <p className="text-center text-[#334155] mb-10">
            Χωρίς κρυφές χρεώσεις — ακυρώστε οποτεδήποτε.
          </p>
          <PricingToggle />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e293b] mb-3">
            Τι λένε οι πελάτες μας
          </h2>
          <p className="text-center text-[#334155] mb-10">
            Πάνω από 5.000 ικανοποιημένοι χρήστες σε Ελλάδα και εξωτερικό.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-[#334155] leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div>
                  <div className="font-semibold text-[#1e293b] text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#f0fdf4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e293b] mb-3">
            Συχνές Ερωτήσεις
          </h2>
          <p className="text-center text-[#334155] mb-10">
            Έχετε απορίες; Βρείτε απαντήσεις παρακάτω.
          </p>
          <FAQAccordion />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-[#059669] to-[#1e293b] text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Έτοιμοι να ξεκινήσετε;
        </h2>
        <p className="text-emerald-100 mb-8 max-w-md mx-auto text-lg">
          Δοκιμάστε δωρεάν για 24 ώρες — χωρίς πιστωτική κάρτα, χωρίς δέσμευση.
        </p>
        <a
          href="https://wa.me/212707711512"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#059669] font-bold px-10 py-4 rounded-full hover:bg-emerald-50 transition-colors text-lg shadow-xl"
        >
          Επικοινωνήστε μέσω WhatsApp
        </a>
      </section>
    </>
  );
}
