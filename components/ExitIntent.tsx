'use client'

import { useEffect, useState } from 'react'

export default function ExitIntent() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('exit-intent-seen')
    if (seen) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed) {
        setShow(true)
        sessionStorage.setItem('exit-intent-seen', '1')
      }
    }

    // Mobile: trigger after 30s of inactivity
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShow(true)
        sessionStorage.setItem('exit-intent-seen', '1')
      }
    }, 30000)

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [dismissed])

  const close = () => {
    setShow(false)
    setDismissed(true)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 text-xl"
          aria-label="Κλείσιμο"
        >
          ✕
        </button>

        <div className="text-5xl mb-4">🎁</div>
        <h2 className="text-2xl font-bold text-[#1e293b] mb-2">
          Περιμένετε!
        </h2>
        <p className="text-[#334155] mb-2 leading-relaxed">
          Πριν φύγετε, δοκιμάστε την υπηρεσία μας{' '}
          <strong className="text-[#059669]">εντελώς δωρεάν για 3 ώρες</strong>{' '}
          — χωρίς πιστωτική κάρτα.
        </p>
        <p className="text-sm text-gray-400 mb-6">
          Πάνω από 5.000 πελάτες μας εμπιστεύονται ήδη.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/212707711512"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="block w-full bg-[#059669] text-white font-bold py-3 rounded-full hover:bg-[#047857] transition-colors"
          >
            💬 Δωρεάν Δοκιμή 3 Ωρών
          </a>
          <button
            onClick={close}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Όχι ευχαριστώ, δεν θέλω δωρεάν δοκιμή
          </button>
        </div>
      </div>
    </div>
  )
}
