import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Κανάλια IPTV – 10.000+ Ελληνικά & Διεθνή Κανάλια',
  description: 'Πλήρης λίστα καναλιών IPTV Greek: ελληνικά, αθλητικά, νέα, παιδικά, κινηματογράφος, διεθνή. HD & 4K. Δωρεάν δοκιμή 24 ωρών.',
  openGraph: {
    title: 'Κανάλια IPTV – 10.000+ Ελληνικά & Διεθνή',
    description: 'Ελληνικά, αθλητικά, νέα, παιδικά, κινηματογράφος και διεθνή κανάλια σε HD & 4K.',
  },
}

const categories = [
  {
    icon: '🇬🇷',
    name: 'Ελληνικά Κανάλια',
    count: '80+',
    color: 'from-blue-900/40 to-blue-800/20',
    border: 'border-blue-500/30',
    channels: ['ΕΡΤ1', 'ΕΡΤ2', 'ΕΡΤ3', 'ANT1', 'ΣΚΑΪ', 'MEGA', 'Alpha', 'Star', 'Open TV', 'ΚΡΗΤΗ TV', 'Makedonia TV', '+ πολλά άλλα'],
  },
  {
    icon: '⚽',
    name: 'Αθλητικά',
    count: '150+',
    color: 'from-emerald-900/40 to-emerald-800/20',
    border: 'border-emerald-500/30',
    channels: ['Nova Sports 1-6', 'Cosmote Sport 1-3', 'beIN Sports', 'Eurosport 1-2', 'Sky Sports', 'BT Sport', 'DAZN', 'Canal+ Sport', 'Eleven Sports', 'Arena Sport', '+ πολλά άλλα'],
  },
  {
    icon: '🎬',
    name: 'Κινηματογράφος',
    count: '200+',
    color: 'from-purple-900/40 to-purple-800/20',
    border: 'border-purple-500/30',
    channels: ['HBO', 'Cinemax', 'Fox Movies', 'Nova Cinema', 'Cosmote Cinema', 'TCM', 'FilmBox', 'Cinemix', 'Action Movies', 'Comedy Central', '+ πολλά άλλα'],
  },
  {
    icon: '📰',
    name: 'Ειδήσεις',
    count: '100+',
    color: 'from-orange-900/40 to-orange-800/20',
    border: 'border-orange-500/30',
    channels: ['CNN', 'BBC World', 'Al Jazeera', 'Euronews', 'Fox News', 'Sky News', 'RT', 'DW', 'France 24', 'CNBC', '+ πολλά άλλα'],
  },
  {
    icon: '👶',
    name: 'Παιδικά',
    count: '80+',
    color: 'from-yellow-900/40 to-yellow-800/20',
    border: 'border-yellow-500/30',
    channels: ['Cartoon Network', 'Disney Channel', 'Disney Junior', 'Nickelodeon', 'Nick Jr.', 'Boomerang', 'Baby TV', 'Jim Jam', 'PJ Masks', 'Paw Patrol', '+ πολλά άλλα'],
  },
  {
    icon: '🎭',
    name: 'Σειρές & Ψυχαγωγία',
    count: '120+',
    color: 'from-pink-900/40 to-pink-800/20',
    border: 'border-pink-500/30',
    channels: ['TNT', 'TBS', 'AMC', 'FX', 'Syfy', 'Comedy Central', 'E!', 'Bravo', 'Lifetime', 'Hallmark', '+ πολλά άλλα'],
  },
  {
    icon: '🌍',
    name: 'Διεθνή / Ευρωπαϊκά',
    count: '500+',
    color: 'from-slate-800/40 to-slate-700/20',
    border: 'border-slate-500/30',
    channels: ['TF1', 'M6', 'France 2-5', 'RAI 1-3', 'Canale 5', 'ARD', 'ZDF', 'RTL', 'TVE', 'RTP', '+ πολλά άλλα'],
  },
  {
    icon: '📚',
    name: 'Ντοκιμαντέρ',
    count: '60+',
    color: 'from-teal-900/40 to-teal-800/20',
    border: 'border-teal-500/30',
    channels: ['National Geographic', 'Discovery', 'History Channel', 'Animal Planet', 'BBC Earth', 'Travel Channel', 'Investigation Discovery', 'Crime+Investigation', '+ πολλά άλλα'],
  },
]

export default function KanaliaPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#0f172a] py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-500/30">
            📺 Λίστα Καναλιών
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            10.000+ Κανάλια σε HD & 4K
          </h1>
          <p className="text-emerald-100 text-lg mb-6">
            Ελληνικά, αθλητικά, διεθνή, παιδικά, ειδήσεις, κινηματογράφος — όλα σε ένα πλάνο.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['🇬🇷 Ελληνικά', '⚽ Αθλητικά', '🎬 VOD', '4K Ultra HD', '📡 Live TV'].map(tag => (
              <span key={tag} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '10.000+', label: 'Live Κανάλια' },
            { num: '40.000+', label: 'VOD Ταινίες & Σειρές' },
            { num: '99.9%', label: 'Uptime Διαθεσιμότητα' },
            { num: '24/7', label: 'Τεχνική Υποστήριξη' },
          ].map(({ num, label }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <p className="text-3xl font-extrabold text-emerald-400">{num}</p>
              <p className="text-slate-400 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Κατηγορίες Καναλιών</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map(({ icon, name, count, color, border, channels }) => (
            <div
              key={name}
              className={`bg-gradient-to-br ${color} border ${border} rounded-2xl p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{icon}</span>
                <div>
                  <h3 className="text-white font-bold text-lg">{name}</h3>
                  <span className="text-emerald-400 text-sm font-semibold">{count} κανάλια</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {channels.map(ch => (
                  <span
                    key={ch}
                    className="bg-white/10 text-slate-300 text-xs px-2.5 py-1 rounded-full"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VOD Section */}
      <section className="bg-gradient-to-br from-slate-800/50 to-[#0f172a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">📽️ Video On Demand</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Πέρα από live κανάλια, απολαύστε πάνω από 40.000 ταινίες και σειρές on-demand,
            διαθέσιμες ανά πάσα στιγμή στη γλώσσα που προτιμάτε.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: '🎬', label: '20.000+ Ταινίες' },
              { icon: '📺', label: '15.000+ Επεισόδια' },
              { icon: '🌐', label: 'Πολλές Γλώσσες' },
              { icon: '⏮️', label: 'Catch-up 7 ημερών' },
            ].map(({ icon, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <span className="text-2xl block mb-2">{icon}</span>
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">Δοκιμάστε Δωρεάν για 24 Ώρες</h2>
          <p className="text-slate-400 mb-8">Χωρίς πιστωτική κάρτα. Άμεση ενεργοποίηση.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212707711512"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-bold px-8 py-4 rounded-full transition-colors text-lg shadow-lg shadow-emerald-900/40"
            >
              💬 Δωρεάν Δοκιμή Τώρα
            </a>
            <Link
              href="/timologia"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              💰 Δείτε Τιμολόγια
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
