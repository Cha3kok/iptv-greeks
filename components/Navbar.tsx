'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/timologia', label: 'Τιμολόγια' },
  { href: '/kanalia', label: 'Κανάλια' },
  { href: '/syskeyes', label: 'Συσκευές' },
  { href: '/rythmisi-iptv', label: 'Ρύθμιση' },
  { href: '/blog', label: 'Ιστολόγιο' },
  { href: '/epikoinonia', label: 'Επικοινωνία' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="IPTV Greek"
            width={140}
            height={34}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#334155]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#059669] transition-colors relative py-1 ${
                pathname === link.href
                  ? 'text-[#059669] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#059669] after:rounded-full'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/212707711512"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#059669] text-white px-5 py-2 rounded-full hover:bg-[#047857] transition-colors ml-2"
          >
            Εγγραφείτε τώρα!
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#334155] p-1 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu — animated */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                pathname === link.href
                  ? 'bg-emerald-50 text-[#059669]'
                  : 'text-[#334155] hover:bg-gray-50 hover:text-[#059669]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/212707711512"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#059669] text-white px-5 py-3 rounded-full text-center text-sm font-semibold hover:bg-[#047857] transition-colors"
          >
            Εγγραφείτε τώρα!
          </a>
        </div>
      </div>
    </header>
  )
}
