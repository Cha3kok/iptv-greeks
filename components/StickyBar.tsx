'use client'

import { useState, useEffect } from 'react'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#1e293b] text-white py-3 px-4 flex items-center justify-between gap-4 shadow-2xl md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:w-fit md:rounded-full md:px-6">
      <p className="text-sm font-medium hidden sm:block">
        🎉 Δωρεάν δοκιμή 24 ωρών — χωρίς πιστωτική κάρτα
      </p>
      <p className="text-sm font-medium sm:hidden">Δωρεάν δοκιμή 24 ωρών</p>
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="https://wa.me/212707711512"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#059669] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#047857] transition-colors whitespace-nowrap"
        >
          Εγγραφή τώρα
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-400 hover:text-white transition-colors text-lg leading-none"
          aria-label="Κλείσιμο"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
