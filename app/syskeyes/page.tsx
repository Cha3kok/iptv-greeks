import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Συμβατές Συσκευές IPTV – Android, Smart TV, iPhone & Περισσότερα',
  description: 'Η υπηρεσία IPTV Greek λειτουργεί σε όλες τις συσκευές: Smart TV, Android Box, Firestick, iPhone, iPad, Windows, Mac. Εύκολη εγκατάσταση.',
  openGraph: {
    title: 'Συμβατές Συσκευές IPTV Greek',
    description: 'Smart TV, Android, iOS, Firestick, MAG Box, Windows — λειτουργεί παντού.',
  },
}

const devices = [
  {
    icon: '📺',
    name: 'Smart TV',
    brands: ['Samsung Tizen', 'LG WebOS', 'Sony Android TV', 'Philips', 'Hisense', 'TCL'],
    app: 'Smart IPTV, GSE Smart IPTV',
    difficulty: 'Εύκολο',
    color: 'from-blue-900/40 to-blue-800/20',
    border: 'border-blue-500/30',
    steps: ['Κατεβάστε την εφαρμογή από το App Store της TV', 'Εισάγετε το URL του M3U playlist', 'Απολαύστε 10.000+ κανάλια'],
  },
  {
    icon: '🔥',
    name: 'Amazon Firestick / Fire TV',
    brands: ['Fire Stick 4K', 'Fire TV Cube', 'Fire TV Stick Lite'],
    app: 'Downloader + TiviMate ή IPTV Smarters',
    difficulty: 'Εύκολο',
    color: 'from-orange-900/40 to-orange-800/20',
    border: 'border-orange-500/30',
    steps: ['Ενεργοποιήστε "Unknown Sources"', 'Εγκαταστήστε μέσω Downloader', 'Εισάγετε τα στοιχεία σύνδεσης'],
  },
  {
    icon: '🤖',
    name: 'Android Box / Phone / Tablet',
    brands: ['Xiaomi Mi Box', 'Nvidia Shield', 'Android Phone', 'Android Tablet'],
    app: 'IPTV Smarters Pro, TiviMate',
    difficulty: 'Πολύ Εύκολο',
    color: 'from-emerald-900/40 to-emerald-800/20',
    border: 'border-emerald-500/30',
    steps: ['Εγκαταστήστε από Google Play Store', 'Εισάγετε username/password ή M3U URL', 'Ξεκινήστε να παρακολουθείτε'],
  },
  {
    icon: '🍎',
    name: 'Apple (iPhone / iPad / Apple TV)',
    brands: ['iPhone', 'iPad', 'Apple TV 4K', 'MacBook'],
    app: 'GSE Smart IPTV, IPTV Smarters',
    difficulty: 'Εύκολο',
    color: 'from-slate-800/40 to-slate-700/20',
    border: 'border-slate-500/30',
    steps: ['Κατεβάστε από App Store', 'Προσθέστε το M3U URL', 'Συνδεθείτε και παρακολουθήστε'],
  },
  {
    icon: '🖥️',
    name: 'Windows PC / Mac',
    brands: ['Windows 10/11', 'macOS', 'Linux'],
    app: 'VLC Media Player, Kodi',
    difficulty: 'Μέτριο',
    color: 'from-purple-900/40 to-purple-800/20',
    border: 'border-purple-500/30',
    steps: ['Ανοίξτε VLC ή Kodi', 'Προσθέστε το M3U URL ως network stream', 'Απολαύστε σε full HD στον υπολογιστή σας'],
  },
  {
    icon: '📦',
    name: 'MAG Box / Enigma2',
    brands: ['MAG 250', 'MAG 322', 'MAG 424', 'Dreambox', 'Vu+'],
    app: 'Ενσωματωμένο portal',
    difficulty: 'Μέτριο',
    color: 'from-teal-900/40 to-teal-800/20',
    border: 'border-teal-500/30',
    steps: ['Μπείτε στις ρυθμίσεις του MAG', 'Εισάγετε το Portal URL που σας δίνουμε', 'Επανεκκινήστε — έτοιμο!'],
  },
]

const apps = [
  { name: 'TiviMate', platform: 'Android / Firestick', rating: '⭐⭐⭐⭐⭐', note: 'Καλύτερη εμπειρία' },
  { name: 'IPTV Smarters Pro', platform: 'Android / iOS / Windows', rating: '⭐⭐⭐⭐⭐', note: 'Δωρεάν' },
  { name: 'GSE Smart IPTV', platform: 'iOS / Android', rating: '⭐⭐⭐⭐', note: 'Ιδανικό για Apple' },
  { name: 'Smart IPTV', platform: 'Samsung / LG Smart TV', rating: '⭐⭐⭐⭐', note: 'Για Smart TV' },
  { name: 'VLC Media Player', platform: 'Windows / Mac / Linux', rating: '⭐⭐⭐⭐', note: 'Δωρεάν & ανοιχτού κώδικα' },
  { name: 'Kodi + PVR IPTV', platform: 'Όλες οι πλατφόρμες', rating: '⭐⭐⭐⭐', note: 'Προχωρημένοι χρήστες' },
]

export default function SysKeyesPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#0f172a] py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-500/30">
            📱 Συμβατές Συσκευές
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Λειτουργεί σε Κάθε Συσκευή
          </h1>
          <p className="text-emerald-100 text-lg mb-6">
            Smart TV, Android, iPhone, Firestick, Windows — απολαύστε το IPTV Greek παντού.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['📺 Smart TV', '🔥 Firestick', '🤖 Android', '🍎 iOS', '🖥️ PC/Mac', '📦 MAG Box'].map(tag => (
              <span key={tag} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Οδηγός Εγκατάστασης ανά Συσκευή</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devices.map(({ icon, name, brands, app, difficulty, color, border, steps }) => (
            <div key={name} className={`bg-gradient-to-br ${color} border ${border} rounded-2xl p-6`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{icon}</span>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">{name}</h3>
                  <p className="text-slate-400 text-sm">Εφαρμογή: <span className="text-emerald-400">{app}</span></p>
                  <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium ${
                    difficulty === 'Πολύ Εύκολο' ? 'bg-emerald-500/20 text-emerald-300' :
                    difficulty === 'Εύκολο' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {difficulty}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {brands.map(b => (
                  <span key={b} className="bg-white/10 text-slate-300 text-xs px-2 py-0.5 rounded-full">{b}</span>
                ))}
              </div>
              <ol className="space-y-1.5">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="bg-emerald-500/30 text-emerald-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Apps */}
      <section className="bg-white/3 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">🏆 Προτεινόμενες Εφαρμογές</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {apps.map(({ name, platform, rating, note }) => (
              <div key={name} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="font-bold text-white mb-1">{name}</p>
                <p className="text-xs text-slate-400 mb-2">{platform}</p>
                <p className="text-sm mb-1">{rating}</p>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full guide link */}
      <section className="py-12 px-4 text-center">
        <p className="text-slate-400 mb-4">Χρειάζεστε αναλυτικές οδηγίες εγκατάστασης;</p>
        <Link
          href="/rythmisi-iptv"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-colors border border-white/10"
        >
          📖 Πλήρης Οδηγός Ρύθμισης
        </Link>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-900/40 to-slate-900 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Ξεκινήστε Σήμερα</h2>
        <p className="text-slate-300 mb-8">Δωρεάν δοκιμή 24 ωρών — χωρίς πιστωτική κάρτα</p>
        <a
          href="https://wa.me/212707711512"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-bold px-8 py-4 rounded-full transition-colors text-lg shadow-lg shadow-emerald-900/40"
        >
          💬 Δωρεάν Δοκιμή 24 Ωρών
        </a>
      </section>
    </div>
  )
}
