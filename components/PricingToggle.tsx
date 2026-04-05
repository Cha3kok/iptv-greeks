'use client'


const plans = [
  {
    name: '1 Μήνας',
    nameEn: '1 Month',
    total: 15,
    perMonth: 15,
    highlight: false,
  },
  {
    name: '3 Μήνες',
    nameEn: '3 Months',
    total: 32,
    perMonth: 10.67,
    highlight: true,
    badge: 'Δημοφιλές',
  },
  {
    name: '6 Μήνες',
    nameEn: '6 Months',
    total: 42,
    perMonth: 7,
    highlight: false,
  },
  {
    name: '12 Μήνες',
    nameEn: '12 Months',
    total: 62,
    perMonth: 5.17,
    highlight: false,
    badge: 'Καλύτερη Αξία',
  },
]

function waLink(plan: typeof plans[number]) {
  const msg = `iptvgreeks.gr - ${plan.nameEn} / 1 Device - ${plan.total}€`
  return `https://wa.me/212707711512?text=${encodeURIComponent(msg)}`
}

const perks = [
  { icon: '📺', text: '55.000+ Ζωντανά Κανάλια' },
  { icon: '🎬', text: '90.000+ Ταινίες & Σειρές' },
  { icon: '🇬🇷', text: 'Όλα τα Ελληνικά κανάλια' },
  { icon: '⚽', text: 'Όλα τα premium αθλητικά κανάλια' },
  { icon: '🌍', text: 'Τοπικές & Παγκόσμιες Πλατφόρμες' },
  { icon: '⏱️', text: 'Time-Shift & Οδηγός TV (EPG)' },
  { icon: '🎥', text: 'Ποιότητα SD, HD, FHD και 4K' },
  { icon: '🔄', text: 'Καθημερινές ενημερώσεις' },
  { icon: '🔒', text: 'VPN Περιλαμβάνεται' },
  { icon: '💰', text: '7ήμερη εγγύηση επιστροφής χρημάτων' },
  { icon: '🎧', text: 'Υποστήριξη 24/7' },
]

export default function PricingToggle() {
  return (
    <div>
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 text-center shadow-sm transition-transform hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-[#059669] text-white ring-2 ring-[#059669] ring-offset-2'
                  : 'bg-white text-[#1e293b]'
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                    plan.badge === 'Καλύτερη Αξία'
                      ? 'bg-green-400 text-green-900'
                      : 'bg-yellow-400 text-yellow-900'
                  }`}
                >
                  {plan.badge}
                </span>
              )}
              <div className={`text-sm font-semibold mb-1 ${plan.highlight ? 'text-emerald-100' : 'text-gray-500'}`}>
                {plan.name}
              </div>
              <div className="text-3xl font-bold mb-0.5">{plan.total}€</div>
              <div className={`text-xs mb-4 ${plan.highlight ? 'text-emerald-200' : 'text-gray-400'}`}>
                {plan.name === '1 Μήνας' ? '\u00a0' : `≈ ${plan.perMonth.toFixed(2)}€/μήνα`}
              </div>
              <a
                href={waLink(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-white text-[#059669] hover:bg-emerald-50'
                    : 'bg-[#059669] text-white hover:bg-[#047857]'
                }`}
              >
                Εγγραφή
              </a>
            </div>
        ))}
      </div>

      {/* Perks */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <p className="text-center text-sm font-bold text-[#1e293b] mb-5">
          ✅ Όλα τα πακέτα περιλαμβάνουν:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {perks.map((p) => (
            <div key={p.text} className="flex items-center gap-3 bg-[#f0fdf4] rounded-xl px-4 py-3">
              <span className="text-lg shrink-0">{p.icon}</span>
              <span className="text-sm font-medium text-[#1e293b]">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
