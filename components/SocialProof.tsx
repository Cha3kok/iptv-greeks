'use client'

import { useEffect, useState } from 'react'

export default function SocialProof() {
  const [count, setCount] = useState(247)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Slightly fluctuate the number every 8s for realism
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 5) - 2)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed top-20 right-4 z-40 bg-white border border-gray-100 shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3 text-sm max-w-xs animate-fade-in">
      <span className="relative flex h-3 w-3 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
      </span>
      <span className="text-[#334155]">
        <strong className="text-[#1e293b]">{count}</strong> άτομα χρησιμοποιούν τώρα
      </span>
      <button
        onClick={() => setVisible(false)}
        className="text-gray-300 hover:text-gray-500 ml-1 shrink-0"
        aria-label="Κλείσιμο"
      >
        ✕
      </button>
    </div>
  )
}
