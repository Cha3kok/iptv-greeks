'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

    const els = Array.from(article.querySelectorAll('h2, h3')) as HTMLElement[]
    const parsed: Heading[] = els.map((el, i) => {
      if (!el.id) el.id = `heading-${i}`
      return { id: el.id, text: el.textContent ?? '', level: parseInt(el.tagName[1]) }
    })
    setHeadings(parsed)

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0% -60% 0%' }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (headings.length < 3) return null

  return (
    <aside className="hidden xl:block sticky top-24 w-56 shrink-0">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
          Περιεχόμενα
        </p>
        <nav>
          <ul className="space-y-1.5">
            {headings.map(({ id, text, level }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={e => {
                    e.preventDefault()
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={`block text-xs leading-snug transition-colors hover:text-emerald-400 ${
                    level === 3 ? 'pl-3' : ''
                  } ${active === id ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
