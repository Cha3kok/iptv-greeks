'use client'

interface Props {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: Props) {
  const encoded = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm font-semibold text-[#334155]">Μοιραστείτε:</span>
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.524 5.854L.054 23.447a.5.5 0 0 0 .617.617l5.593-1.47A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.524-5.212-1.434l-.374-.22-3.878 1.019 1.019-3.878-.22-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        WhatsApp
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-[#1877f2] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#166fe5] transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
        Facebook
      </a>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(url)
        }}
        className="flex items-center gap-1.5 bg-gray-100 text-[#334155] text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        Αντιγραφή
      </button>
    </div>
  )
}
