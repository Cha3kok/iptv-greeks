import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου",
  description: "Η πολιτική απορρήτου της IPTV Greek — πώς συλλέγουμε και χρησιμοποιούμε τα δεδομένα σας.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1e293b] mb-2">Πολιτική Απορρήτου</h1>
      <p className="text-sm text-gray-400 mb-8">Τελευταία ενημέρωση: Μάρτιος 2026</p>

      <div className="prose prose-slate max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">1. Γενικές Πληροφορίες</h2>
          <p className="text-[#334155] leading-relaxed">
            Η IPTV Greek δεσμεύεται για την προστασία των προσωπικών σας δεδομένων. Η παρούσα πολιτική εξηγεί ποια δεδομένα συλλέγουμε, πώς τα χρησιμοποιούμε και τα δικαιώματά σας σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (ΓΚΠΔ).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">2. Δεδομένα που Συλλέγουμε</h2>
          <ul className="list-disc pl-5 text-[#334155] space-y-1 leading-relaxed">
            <li>Στοιχεία επικοινωνίας που παρέχετε εθελοντικά (π.χ. μέσω WhatsApp)</li>
            <li>Τεχνικές πληροφορίες για τη λειτουργία της υπηρεσίας (διεύθυνση IP για σκοπούς ασφαλείας)</li>
            <li>Cookies λειτουργικότητας για τη βέλτιστη εμπειρία πλοήγησης</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">3. Χρήση Δεδομένων</h2>
          <p className="text-[#334155] leading-relaxed">Χρησιμοποιούμε τα δεδομένα σας αποκλειστικά για:</p>
          <ul className="list-disc pl-5 text-[#334155] space-y-1 leading-relaxed">
            <li>Παροχή και βελτίωση της υπηρεσίας IPTV</li>
            <li>Τεχνική υποστήριξη και επικοινωνία</li>
            <li>Διαχείριση λογαριασμού και χρέωσης</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">4. Κοινοποίηση Δεδομένων</h2>
          <p className="text-[#334155] leading-relaxed">
            Δεν πωλούμε, εκμισθώνουμε ή μοιραζόμαστε τα προσωπικά σας δεδομένα με τρίτους, εκτός αν απαιτείται από τον νόμο ή για την παροχή της υπηρεσίας (π.χ. πύλες πληρωμής).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">5. Cookies</h2>
          <p className="text-[#334155] leading-relaxed">
            Χρησιμοποιούμε μόνο λειτουργικά cookies που είναι απαραίτητα για τη σωστή λειτουργία του ιστότοπου. Δεν χρησιμοποιούμε cookies παρακολούθησης ή διαφημίσεων χωρίς τη συγκατάθεσή σας.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">6. Δικαιώματά σας (ΓΚΠΔ)</h2>
          <p className="text-[#334155] leading-relaxed">Έχετε δικαίωμα:</p>
          <ul className="list-disc pl-5 text-[#334155] space-y-1 leading-relaxed">
            <li>Πρόσβασης στα προσωπικά σας δεδομένα</li>
            <li>Διόρθωσης ανακριβών δεδομένων</li>
            <li>Διαγραφής ("δικαίωμα λήθης")</li>
            <li>Φορητότητας δεδομένων</li>
            <li>Εναντίωσης στην επεξεργασία</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1e293b]">7. Επικοινωνία</h2>
          <p className="text-[#334155] leading-relaxed">
            Για οποιαδήποτε ερώτηση σχετικά με την πολιτική απορρήτου, επικοινωνήστε μαζί μας μέσω WhatsApp ή από τη σελίδα{" "}
            <a href="/epikoinonia" className="text-[#059669] hover:underline">Επικοινωνία</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
