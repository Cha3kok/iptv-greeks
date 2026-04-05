'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Τι χρειάζομαι για να ξεκινήσω;',
    a: 'Μια σύνδεση internet τουλάχιστον 10 Mbps, μια συμβατή συσκευή (Smart TV, Android Box, Firestick, κινητό ή PC) και μια εφαρμογή IPTV. Εμείς σας παρέχουμε τους κωδικούς και σας βοηθάμε με τη ρύθμιση.',
  },
  {
    q: 'Είναι νόμιμη η υπηρεσία;',
    a: 'Η τεχνολογία IPTV είναι απολύτως νόμιμη. Η νομιμότητα εξαρτάται από τα δικαιώματα εκπομπής του παρόχου. Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες.',
  },
  {
    q: 'Πόση ταχύτητα internet χρειάζομαι;',
    a: 'Για HD ποιότητα χρειάζεστε ελάχιστα 10 Mbps, για Full HD 15 Mbps και για 4K τουλάχιστον 25 Mbps σταθερά. Συνιστάται ενσύρματη σύνδεση για 4K.',
  },
  {
    q: 'Λειτουργεί στο εξωτερικό;',
    a: 'Ναι! Η υπηρεσία μας λειτουργεί παγκοσμίως. Χιλιάδες Έλληνες της διασποράς στην Αυστραλία, ΗΠΑ, Ηνωμένο Βασίλειο και Γερμανία χρησιμοποιούν IPTV Greek καθημερινά.',
  },
  {
    q: 'Σε πόσες συσκευές μπορώ να συνδεθώ ταυτόχρονα;',
    a: 'Κάθε συνδρομή περιλαμβάνει έως 2 ταυτόχρονες συνδέσεις. Αν χρειάζεστε περισσότερες, επικοινωνήστε μαζί μας για προσαρμοσμένο πακέτο.',
  },
  {
    q: 'Πώς λαμβάνω τη δωρεάν δοκιμή;',
    a: 'Απλώς στείλτε μας μήνυμα στο WhatsApp και θα σας ενεργοποιήσουμε άμεσα δοκιμαστική πρόσβαση 24 ωρών χωρίς καμία χρέωση ή δέσμευση.',
  },
  {
    q: 'Τι κάνω αν έχω τεχνικό πρόβλημα;',
    a: 'Η ομάδα υποστήριξης μας είναι διαθέσιμη 24/7 μέσω WhatsApp. Απαντάμε συνήθως εντός λίγων λεπτών και σας βοηθάμε να επιλύσετε οποιοδήποτε πρόβλημα.',
  },
  {
    q: 'Μπορώ να ακυρώσω οποτεδήποτε;',
    a: 'Ναι, δεν υπάρχουν μακροχρόνια συμβόλαια ή κρυφές χρεώσεις. Μπορείτε να διακόψετε τη συνδρομή σας οποτεδήποτε χωρίς επιπλέον κόστος.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-[#1e293b] text-sm md:text-base">
              {faq.q}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#059669] shrink-0 transition-transform duration-200 ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-[#334155] leading-relaxed border-t border-gray-50 pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </div>
  )
}
