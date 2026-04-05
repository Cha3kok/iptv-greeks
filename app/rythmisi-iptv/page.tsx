import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ρύθμιση IPTV – Οδηγός για κάθε συσκευή | IPTV Greek",
  description:
    "Βήμα-βήμα οδηγός ρύθμισης IPTV σε Smart TV, Android, iPhone, MAG, Firestick και υπολογιστή.",
};

const devices = [
  {
    name: "Smart TV (Samsung / LG)",
    steps: [
      "Κατεβάστε την εφαρμογή Smart IPTV ή IPTV Smarters από το app store της TV σας.",
      "Ανοίξτε την εφαρμογή και επιλέξτε «Προσθήκη λίστας M3U».",
      "Επικολλήστε το M3U URL που σας έχουμε στείλει.",
      "Πατήστε «Φόρτωση» — τα κανάλια θα εμφανιστούν αυτόματα.",
    ],
  },
  {
    name: "Android (κινητό / tablet / box)",
    steps: [
      "Εγκαταστήστε την εφαρμογή IPTV Smarters Pro ή TiviMate από το Google Play.",
      "Επιλέξτε «Προσθήκη χρήστη» → «Xtream Codes API».",
      "Εισάγετε τα στοιχεία σύνδεσης (URL, όνομα χρήστη, κωδικό) που σας έχουμε δώσει.",
      "Πατήστε «Προσθήκη» και απολαύστε τα κανάλια σας.",
    ],
  },
  {
    name: "iPhone / iPad (iOS)",
    steps: [
      "Κατεβάστε την εφαρμογή GSE Smart IPTV ή IPTV Smarters από το App Store.",
      "Ανοίξτε την εφαρμογή και επιλέξτε «Προσθήκη πλεΐστας».",
      "Χρησιμοποιήστε «URL M3U» ή «Xtream Codes» με τα δεδομένα που σας έχουμε στείλει.",
      "Πατήστε «Αποθήκευση» — η λίστα φορτώνει αυτόματα.",
    ],
  },
  {
    name: "Amazon Firestick / Fire TV",
    steps: [
      "Ενεργοποιήστε τις «Άγνωστες πηγές» στις ρυθμίσεις του Firestick.",
      "Κατεβάστε την εφαρμογή Downloader και εγκαταστήστε το IPTV Smarters.",
      "Εισάγετε τα Xtream Codes ή το M3U URL που σας έχουμε δώσει.",
      "Απολαύστε πάνω από 10.000 κανάλια στη μεγάλη οθόνη σας.",
    ],
  },
  {
    name: "MAG Box",
    steps: [
      "Συνδεθείτε στο διαχειριστικό panel του MAG (http://192.168.1.1 ή η IP της συσκευής).",
      "Πηγαίνετε στο «Servers» → «General» → «Portal URL».",
      "Εισάγετε το Portal URL που σας έχουμε δώσει.",
      "Επανεκκινήστε το MAG Box — η υπηρεσία ξεκινά αυτόματα.",
    ],
  },
  {
    name: "Υπολογιστής (Windows / Mac)",
    steps: [
      "Κατεβάστε και εγκαταστήστε το VLC Media Player (δωρεάν).",
      "Ανοίξτε VLC → Μέσα → Άνοιγμα ροής δικτύου.",
      "Επικολλήστε το M3U URL σας και πατήστε «Αναπαραγωγή».",
      "Εναλλακτικά χρησιμοποιήστε το Kodi με το PVR IPTV Simple Client addon.",
    ],
  },
];

export default function RythmisiIPTVPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
        Οδηγός Ρύθμισης IPTV
      </h1>
      <p className="text-[#334155] text-lg mb-10 leading-relaxed">
        Ακολουθήστε τα παρακάτω βήματα για τη συσκευή σας. Αν χρειαστείτε
        βοήθεια, είμαστε διαθέσιμοι 24/7 μέσω{" "}
        <a
          href="https://wa.me/212707711512"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#059669] font-medium hover:underline"
        >
          WhatsApp
        </a>
        .
      </p>

      <div className="space-y-8">
        {devices.map((device, i) => (
          <div
            key={device.name}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1e293b] mb-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-[#059669] text-white text-sm font-bold rounded-full shrink-0">
                {i + 1}
              </span>
              {device.name}
            </h2>
            <ol className="space-y-3">
              {device.steps.map((step, j) => (
                <li key={j} className="flex gap-3 text-[#334155] text-sm leading-relaxed">
                  <span className="text-[#059669] font-bold shrink-0">{j + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#059669] text-white rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold mb-3">Δεν είστε σίγουροι; Βοηθάμε εμείς!</h2>
        <p className="text-emerald-100 mb-6">
          Στείλτε μας μήνυμα στο WhatsApp και θα σας ρυθμίσουμε δωρεάν.
        </p>
        <a
          href="https://wa.me/212707711512"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#059669] font-semibold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors"
        >
          Επικοινωνήστε μαζί μας
        </a>
      </div>
    </div>
  );
}
