import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-24 text-center">
      <p className="text-7xl font-bold text-[#059669] mb-4">404</p>
      <h1 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">
        Η σελίδα δεν βρέθηκε
      </h1>
      <p className="text-[#334155] mb-8 max-w-sm">
        Η σελίδα που ψάχνετε δεν υπάρχει ή έχει μετακινηθεί.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="bg-[#059669] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#047857] transition-colors"
        >
          Αρχική Σελίδα
        </Link>
        <Link
          href="/blog"
          className="border border-[#059669] text-[#059669] font-semibold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors"
        >
          Ιστολόγιο
        </Link>
      </div>
    </div>
  );
}
