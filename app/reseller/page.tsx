import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reseller IPTV – Γίνε Μεταπωλητής & Κέρδισε Χρήματα',
  description: 'Γίνε reseller της IPTV Greek υπηρεσίας και κέρδισε έως 50% προμήθεια. Panel διαχείρισης, απεριόριστοι πελάτες, 24/7 υποστήριξη.',
  openGraph: {
    title: 'IPTV Reseller Program – Κέρδισε Παθητικό Εισόδημα',
    description: 'Γίνε μεταπωλητής IPTV Greek. Panel διαχείρισης, έως 50% κέρδος, 24/7 υποστήριξη.',
  },
}

const plans = [
  {
    name: 'Starter',
    credits: '10',
    price: '€30',
    perCredit: '€3.00',
    margin: 'έως 40%',
    features: ['10 credits (subscriptions)', 'Panel διαχείρισης', 'Δημιουργία line/MAG/M3U', 'Chat υποστήριξη'],
    highlight: false,
  },
  {
    name: 'Pro',
    credits: '30',
    price: '€75',
    perCredit: '€2.50',
    margin: 'έως 50%',
    features: ['30 credits', 'Panel διαχείρισης', 'Δημιουργία line/MAG/M3U', 'Προτεραιότητα υποστήριξης', 'Sub-reseller δυνατότητα'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    credits: '100+',
    price: 'Επικοινωνία',
    perCredit: 'Διαπραγμάτευση',
    margin: 'Μέγιστο κέρδος',
    features: ['Απεριόριστα credits', 'White-label δυνατότητα', 'Dedicated server option', '24/7 προτεραιότητα', 'Custom branding'],
    highlight: false,
  },
]

const benefits = [
  { icon: '💰', title: 'Υψηλές Προμήθειες', desc: 'Κερδίστε έως 50% σε κάθε πώληση. Αναλογική τιμολόγηση.' },
  { icon: '🖥️', title: 'Panel Διαχείρισης', desc: 'Πλήρες dashboard για δημιουργία, ανανέωση και διαχείριση συνδρομών.' },
  { icon: '⚡', title: 'Άμεση Ενεργοποίηση', desc: 'Δημιουργείτε accounts για τους πελάτες σας σε δευτερόλεπτα.' },
  { icon: '🌐', title: 'White-Label', desc: 'Δυνατότητα προώθησης με το δικό σας brand (Pro & Enterprise).' },
  { icon: '📊', title: 'Στατιστικά', desc: 'Real-time reports για πωλήσεις, ανανεώσεις και έσοδα.' },
  { icon: '🛡️', title: 'Υποστήριξη 24/7', desc: 'Αποκλειστικό κανάλι επικοινωνίας για resellerς με προτεραιότητα.' },
]

const steps = [
  { num: '01', title: 'Επικοινωνήστε μαζί μας', desc: 'Στείλτε μήνυμα μέσω WhatsApp ή email. Θα σας απαντήσουμε εντός 1 ώρας.' },
  { num: '02', title: 'Επιλέξτε πλάνο', desc: 'Αγοράστε credits. Κάθε credit = 1 μήνα συνδρομή για έναν πελάτη.' },
  { num: '03', title: 'Λάβετε πρόσβαση στο Panel', desc: 'Αποκτάτε άμεσα πρόσβαση στο reseller dashboard.' },
  { num: '04', title: 'Ξεκινήστε να πουλάτε', desc: 'Δημιουργείτε accounts για τους πελάτες σας και κερδίζετε.' },
]

export default function ResellerPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#0f172a] py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-500/30">
            🤝 Reseller Program
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Γίνε Μεταπωλητής IPTV
          </h1>
          <p className="text-emerald-100 text-lg mb-2">
            Κέρδισε παθητικό εισόδημα πουλώντας IPTV Greek συνδρομές.
          </p>
          <p className="text-emerald-300 font-semibold mb-8">
            💰 Έως 50% κέρδος ανά πώληση
          </p>
          <a
            href="https://wa.me/212707711512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-bold px-8 py-4 rounded-full transition-colors text-lg shadow-lg shadow-emerald-900/40"
          >
            💬 Ξεκινήστε Τώρα
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Γιατί να Γίνεις Reseller;</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {benefits.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <span className="text-3xl block mb-3">{icon}</span>
              <h3 className="text-white font-bold mb-1">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Πλάνα Reseller</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(({ name, credits, price, perCredit, margin, features, highlight }) => (
            <div
              key={name}
              className={`rounded-2xl p-6 border transition-transform hover:-translate-y-1 ${
                highlight
                  ? 'bg-gradient-to-br from-emerald-900/60 to-emerald-800/30 border-emerald-500/50 shadow-xl shadow-emerald-900/30'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {highlight && (
                <span className="block text-center text-xs font-bold text-emerald-300 bg-emerald-500/20 rounded-full px-3 py-1 mb-3 w-fit mx-auto">
                  ⭐ Πιο Δημοφιλές
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${highlight ? 'text-emerald-300' : 'text-white'}`}>{name}</h3>
              <p className="text-3xl font-extrabold text-white mb-1">{price}</p>
              <p className="text-slate-400 text-sm mb-1">{credits} credits · {perCredit}/credit</p>
              <p className="text-emerald-400 text-sm font-semibold mb-5">{margin}</p>
              <ul className="space-y-2 mb-6">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-emerald-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/212707711512"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-bold py-3 rounded-full transition-colors ${
                  highlight
                    ? 'bg-[#059669] hover:bg-[#047857] text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {name === 'Enterprise' ? '📞 Επικοινωνία' : '💬 Αγορά Τώρα'}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white/3 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">Πώς Λειτουργεί</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-extrabold text-xl flex items-center justify-center mx-auto mb-3">
                  {num}
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Συχνές Ερωτήσεις</h2>
        <div className="space-y-4">
          {[
            { q: 'Τι είναι το credit;', a: 'Ένα credit ισοδυναμεί με 1 μήνα συνδρομής για έναν πελάτη. Π.χ. με 10 credits μπορείτε να εξυπηρετήσετε 10 πελάτες για 1 μήνα ή 5 πελάτες για 2 μήνες.' },
            { q: 'Πότε λαμβάνω πρόσβαση στο panel;', a: 'Άμεσα μετά την επιβεβαίωση της πληρωμής, συνήθως εντός 30 λεπτών.' },
            { q: 'Μπορώ να δημιουργήσω sub-resellerς;', a: 'Ναι, από το Pro πλάνο και πάνω έχετε τη δυνατότητα να δημιουργείτε sub-resellerς.' },
            { q: 'Υπάρχει ελάχιστος αριθμός πελατών;', a: 'Όχι. Μπορείτε να ξεκινήσετε με μόλις 1 πελάτη και να αναπτυχθείτε με τον ρυθμό σας.' },
          ].map(({ q, a }) => (
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
        <p className="text-slate-300 mb-8">Επικοινωνήστε μαζί μας σήμερα και γίνετε reseller</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/212707711512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-bold px-8 py-4 rounded-full transition-colors text-lg shadow-lg shadow-emerald-900/40"
          >
            💬 WhatsApp Τώρα
          </a>
          <a
            href="mailto:goldengateiptv@gmail.com"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            📧 goldengateiptv@gmail.com
          </a>
        </div>
      </section>
    </div>
  )
}
