import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="mb-4">
            <Image src="/logo-white.svg" alt="IPTV Greek" width={150} height={36} />
          </div>
          <p className="text-sm leading-relaxed max-w-xs mb-4">
            Αξιόπιστη IPTV υπηρεσία με Ελληνικά κανάλια, HD & 4K ποιότητα, και 24/7 υποστήριξη.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {['10.000+ Κανάλια', 'HD & 4K', '24/7 Support', 'Anti-Freeze'].map((b) => (
              <span key={b} className="bg-white/10 px-3 py-1 rounded-full">{b}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Σελίδες</h4>
          <ul className="text-sm space-y-2">
            <li><Link href="/" className="hover:text-white transition-colors">Αρχική</Link></li>
            <li><Link href="/rythmisi-iptv" className="hover:text-white transition-colors">Ρύθμιση IPTV</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Ιστολόγιο</Link></li>
            <li><Link href="/epikoinonia" className="hover:text-white transition-colors">Επικοινωνία</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Πολιτική Απορρήτου</Link></li>
            <li><Link href="/oroi-xrisis" className="hover:text-white transition-colors">Όροι Χρήσης</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Επικοινωνία</h4>
          <ul className="text-sm space-y-2 mb-4">
            <li>
              <a
                href="https://wa.me/212707711512"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>💬</span> WhatsApp (24/7)
              </a>
            </li>
            <li>
              <a
                href="mailto:goldengateiptv@gmail.com"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>✉️</span> goldengateiptv@gmail.com
              </a>
            </li>
          </ul>
          <a
            href="https://wa.me/212707711512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#059669] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#047857] transition-colors"
          >
            Εγγραφείτε τώρα!
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500 px-4">
        <p>
          © {new Date().getFullYear()} IPTV Greek. Όλα τα δικαιώματα διατηρούνται.
          {' · '}
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">Απόρρητο</Link>
          {' · '}
          <Link href="/oroi-xrisis" className="hover:text-gray-300 transition-colors">Όροι</Link>
        </p>
      </div>
    </footer>
  )
}
