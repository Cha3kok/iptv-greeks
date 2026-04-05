'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-[#1e293b] text-white px-4 py-5 shadow-2xl md:bottom-4 md:left-4 md:right-auto md:max-w-sm md:rounded-2xl">
      <p className="text-sm leading-relaxed mb-4">
        🍪 Χρησιμοποιούμε cookies για βέλτιστη εμπειρία πλοήγησης. Δείτε την{' '}
        <Link href="/privacy" className="underline hover:text-emerald-300">
          Πολιτική Απορρήτου
        </Link>{' '}
        μας.
      </p>
      <div className="flex gap-3">
        <button
          onClick={accept}
          className="flex-1 bg-[#059669] text-white text-sm font-semibold py-2 rounded-full hover:bg-[#047857] transition-colors"
        >
          Αποδοχή
        </button>
        <button
          onClick={decline}
          className="flex-1 bg-white/10 text-white text-sm font-semibold py-2 rounded-full hover:bg-white/20 transition-colors"
        >
          Απόρριψη
        </button>
      </div>
    </div>
  )
}
