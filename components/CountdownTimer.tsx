'use client'

import { useEffect, useState } from 'react'

function getTimeLeft() {
  // Reset every 24 hours from a fixed offset so it feels live
  const now = new Date()
  const end = new Date(now)
  end.setHours(23, 59, 59, 999)
  const diff = end.getTime() - now.getTime()
  const h = Math.floor(diff / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  return { h, m, s }
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="flex items-center gap-2 justify-center mt-4">
      <span className="text-emerald-100 text-sm">⏳ Η προσφορά λήγει σε:</span>
      <div className="flex gap-1 font-mono font-bold text-white text-sm">
        {[
          { val: time.h, label: 'ώρ' },
          { val: time.m, label: 'λεπ' },
          { val: time.s, label: 'δευ' },
        ].map(({ val, label }, i) => (
          <span key={label}>
            <span className="bg-white/20 rounded px-1.5 py-0.5">{pad(val)}</span>
            <span className="text-emerald-200 text-xs ml-0.5">{label}</span>
            {i < 2 && <span className="mx-0.5 opacity-60">:</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
