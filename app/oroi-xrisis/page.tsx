import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Όροι Χρήσης",
  description: "Οι όροι και προϋποθέσεις χρήσης της υπηρεσίας IPTV Greek.",
  robots: { index: false, follow: false },
};

export default function OroiXrisisPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1e293b] mb-2">Όροι Χρήσης</h1>
      <p className="text-sm text-gray-400 mb-8">Τελευταία ενημέρωση: Μάρτιος 2026</p>

      <div className="prose prose-slate max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">1. Αποδοχή Όρων</h2>
          <p className="text-[#334155] leading-relaxed">
            Χρησιμοποιώντας την υπηρεσία IPTV Greek, αποδέχεστε πλήρως τους παρόντες Όρους Χρήσης. Αν διαφωνείτε με οποιονδήποτε όρο, παρακαλούμε να μην χρησιμοποιείτε την υπηρεσία.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">2. Περιγραφή Υπηρεσίας</h2>
          <p className="text-[#334155] leading-relaxed">
            Η IPTV Greek παρέχει πρόσβαση σε τηλεοπτικό περιεχόμενο μέσω διαδικτύου (IPTV). Η υπηρεσία διατίθεται για προσωπική, μη εμπορική χρήση.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">3. Λογαριασμός & Ασφάλεια</h2>
          <ul className="list-disc pl-5 text-[#334155] space-y-1 leading-relaxed">
            <li>Είστε υπεύθυνοι για τη διατήρηση της εμπιστευτικότητας των στοιχείων πρόσβασής σας</li>
            <li>Δεν επιτρέπεται η κοινοποίηση των στοιχείων σε τρίτους</li>
            <li>Κάθε λογαριασμός επιτρέπει έως 2 ταυτόχρονες συνδέσεις</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">4. Πολιτική Αποδεκτής Χρήσης</h2>
          <p className="text-[#334155] leading-relaxed">Απαγορεύεται ρητά:</p>
          <ul className="list-disc pl-5 text-[#334155] space-y-1 leading-relaxed">
            <li>Αναδιανομή ή μεταπώληση της υπηρεσίας</li>
            <li>Χρήση για εμπορικούς ή δημόσιους σκοπούς</li>
            <li>Κοινοποίηση στοιχείων πρόσβασης</li>
            <li>Οποιαδήποτε παραβίαση πνευματικής ιδιοκτησίας</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">5. Συνδρομές & Πληρωμές</h2>
          <ul className="list-disc pl-5 text-[#334155] space-y-1 leading-relaxed">
            <li>Οι τιμές αναγράφονται στη σελίδα μας και ισχύουν κατά την ημερομηνία αγοράς</li>
            <li>Δεν γίνονται επιστροφές χρημάτων μετά την ενεργοποίηση, εκτός αν υπάρχει τεχνικό πρόβλημα από πλευράς μας</li>
            <li>Η δωρεάν δοκιμή 24 ωρών δεν απαιτεί πιστωτική κάρτα</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">6. Διαθεσιμότητα Υπηρεσίας</h2>
          <p className="text-[#334155] leading-relaxed">
            Στοχεύουμε σε 99.9% uptime. Διατηρούμε το δικαίωμα να διακόψουμε προσωρινά την υπηρεσία για συντήρηση, με ειδοποίηση όταν είναι εφικτό.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">7. Τερματισμός</h2>
          <p className="text-[#334155] leading-relaxed">
            Διατηρούμε το δικαίωμα να τερματίσουμε λογαριασμούς που παραβιάζουν τους παρόντες όρους, χωρίς προηγούμενη ειδοποίηση.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">8. Εφαρμοστέο Δίκαιο</h2>
          <p className="text-[#334155] leading-relaxed">
            Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Για οποιαδήποτε διαφορά αρμόδια είναι τα δικαστήρια της Αθήνας.
          </p>
        </section>
      </div>
    </div>
  );
}
