import type { Metadata } from 'next'
import PricingToggle from '@/components/PricingToggle'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Τιμολόγια IPTV – Πλάνα & Τιμές 2026',
  description: 'Δείτε όλα τα πλάνα IPTV Greek: Βασικό, Standard, Premium & Reseller. Τιμές από €5/μήνα. Δωρεάν δοκιμή 24 ωρών χωρίς πιστωτική κάρτα.',
  openGraph: {
    title: 'Τιμολόγια IPTV – Πλάνα & Τιμές 2026',
    description: 'Δείτε όλα τα πλάνα IPTV Greek από €5/μήνα. Δωρεάν δοκιμή 24 ωρών.',
  },
}

const faqs = [
  { q: 'Υπάρχει δωρεάν δοκιμή;', a: 'Ναι! Προσφέρουμε 24ωρη δωρεάν δοκιμή χωρίς πιστωτική κάρτα. Επικοινωνήστε μαζί μας μέσω WhatsApp.' },
  { q: 'Πώς γίνεται η πληρωμή;', a: 'Δεχόμαστε PayPal, κάρτες και άλλες ψηφιακές μεθόδους. Η ενεργοποίηση γίνεται αμέσως μετά την πληρωμή.' },
  { q: 'Μπορώ να αλλάξω πλάνο;', a: 'Βεβαίως. Μπορείτε να αναβαθμίσετε ή να υποβαθμίσετε οποτεδήποτε χωρίς επιπλέον χρέωση.' },
  { q: 'Πόσες συσκευές μπορώ να συνδέσω;', a: 'Ανάλογα με το πλάνο: Βασικό 1 σύνδεση, Standard 2, Premium 3, Reseller έως 10+.' },
]

export default function TimologiaPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#0f172a] py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-500/30">
            💰 Τιμολόγια 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Επιλέξτε το Πλάνο σας
          </h1>
          <p className="text-emerald-100 text-lg mb-2">
            Από <span className="font-bold text-white">€15/μήνα</span> — χωρίς κρυφές χρεώσεις.
          </p>
          <p className="text-emerald-300 text-sm">
            ✅ Δωρεάν δοκιμή 24 ωρών — χωρίς πιστωτική κάρτα
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-4">
        <PricingToggle />
      </section>

      {/* Comparison table */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Σύγκριση Πλάνων</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-white">
            <thead>
              <tr className="bg-white/5 text-emerald-300">
                <th className="text-left px-4 py-3 font-semibold">Χαρακτηριστικό</th>
                <th className="text-center px-4 py-3 font-semibold">Βασικό</th>
                <th className="text-center px-4 py-3 font-semibold">Standard</th>
                <th className="text-center px-4 py-3 font-semibold bg-emerald-900/30">Premium ⭐</th>
                <th className="text-center px-4 py-3 font-semibold">Reseller</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ['Κανάλια', '5.000+', '8.000+', '10.000+', '10.000+'],
                ['Ποιότητα', 'HD', 'HD & FHD', '4K Ultra HD', '4K Ultra HD'],
                ['Συνδέσεις', '1', '2', '3', '10+'],
                ['VOD / Ταινίες', '✓', '✓', '✓', '✓'],
                ['Σειρές / Series', '—', '✓', '✓', '✓'],
                ['Catch-up TV', '—', '—', '✓', '✓'],
                ['Αντι-freeze', '✓', '✓', '✓', '✓'],
                ['Υποστήριξη 24/7', '✓', '✓', '✓', 'Προτεραιότητα'],
                ['Δωρεάν δοκιμή 24ω', '✓', '✓', '✓', '✓'],
              ].map(([feature, basic, std, premium, reseller]) => (
                <tr key={feature} className="hover:bg-white/3 transition-colors">
                  <td className="px-4 py-3 text-slate-300">{feature}</td>
                  <td className="px-4 py-3 text-center text-slate-400">{basic}</td>
                  <td className="px-4 py-3 text-center text-slate-400">{std}</td>
                  <td className="px-4 py-3 text-center font-semibold text-emerald-300 bg-emerald-900/20">{premium}</td>
                  <td className="px-4 py-3 text-center text-slate-400">{reseller}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Συχνές Ερωτήσεις</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="font-semibold text-white mb-1">{q}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-900/40 to-slate-900 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Έτοιμοι να Ξεκινήσετε;</h2>
        <p className="text-slate-300 mb-8">Δωρεάν δοκιμή 24 ωρών — άμεση ενεργοποίηση</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/212707711512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-bold px-8 py-4 rounded-full transition-colors text-lg shadow-lg shadow-emerald-900/40"
          >
            💬 Δωρεάν Δοκιμή 24 Ωρών
          </a>
          <Link
            href="/epikoinonia"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            📞 Επικοινωνία
          </Link>
        </div>
      </section>
    </div>
  )
}
