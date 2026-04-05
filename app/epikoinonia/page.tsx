import type { Metadata } from "next";
import { MessageCircle, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Επικοινωνία – IPTV Greek",
  description:
    "Επικοινωνήστε μαζί μας μέσω WhatsApp για άμεση βοήθεια, δωρεάν δοκιμή ή οποιαδήποτε ερώτηση.",
};

const reasons = [
  {
    icon: MessageCircle,
    title: "Άμεση Απάντηση",
    desc: "Απαντάμε σε μήνυμα WhatsApp μέσα σε λίγα λεπτά.",
  },
  {
    icon: Clock,
    title: "24/7 Διαθεσιμότητα",
    desc: "Είμαστε εδώ για σας κάθε ώρα, κάθε μέρα.",
  },
  {
    icon: Shield,
    title: "Δωρεάν Δοκιμή",
    desc: "Ζητήστε δωρεάν δοκιμαστική περίοδο 24 ωρών χωρίς δέσμευση.",
  },
];

const contactMethods = [
  {
    label: "WhatsApp",
    value: "+212 707 711 512",
    href: "https://wa.me/212707711512",
    icon: "💬",
    note: "24/7 — απαντάμε άμεσα",
  },
  {
    label: "Email",
    value: "goldengateiptv@gmail.com",
    href: "mailto:goldengateiptv@gmail.com",
    icon: "✉️",
    note: "Απάντηση εντός 24 ωρών",
  },
];

export default function EpikoinoniaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
        Επικοινωνία
      </h1>
      <p className="text-[#334155] text-lg mb-10 leading-relaxed">
        Για οποιαδήποτε ερώτηση, τεχνικό πρόβλημα ή αίτημα δοκιμής,
        επικοινωνήστε μαζί μας μέσω WhatsApp ή email.
      </p>

      {/* Reasons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#f0fdf4] rounded-2xl p-5 text-center"
          >
            <div className="inline-flex items-center justify-center w-11 h-11 bg-white rounded-full shadow-sm mb-3">
              <Icon className="w-5 h-5 text-[#059669]" />
            </div>
            <h3 className="font-semibold text-[#1e293b] mb-1">{title}</h3>
            <p className="text-sm text-[#334155] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Contact methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {contactMethods.map((m) => (
          <a
            key={m.label}
            href={m.href}
            target={m.href.startsWith("http") ? "_blank" : undefined}
            rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="text-3xl">{m.icon}</div>
            <div>
              <div className="font-semibold text-[#1e293b] group-hover:text-[#059669] transition-colors">
                {m.label}
              </div>
              <div className="text-sm text-[#059669] font-medium">{m.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{m.note}</div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA Card */}
      <div className="bg-[#059669] text-white rounded-2xl p-10 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-3">Μιλήστε μαζί μας τώρα</h2>
        <p className="text-emerald-100 mb-7 max-w-sm mx-auto">
          Πατήστε το κουμπί παρακάτω και θα συνδεθείτε απευθείας με την ομάδα υποστήριξής μας.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/212707711512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#059669] font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors"
          >
            💬 WhatsApp
          </a>
          <a
            href="mailto:goldengateiptv@gmail.com"
            className="inline-block bg-white/15 border border-white/30 text-white font-bold px-8 py-3 rounded-full hover:bg-white/25 transition-colors"
          >
            ✉️ Email
          </a>
        </div>
      </div>
    </div>
  );
}
