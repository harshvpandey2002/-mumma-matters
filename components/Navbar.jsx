'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#products', label: 'Our Formulas' },
  { href: '#why',      label: 'Why MM' },
  { href: '#club',     label: 'Club Mumma' },
  { href: '#gynaec',   label: 'For Doctors' },
  { href: '#blogs',    label: 'Expert Reads' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close menu on scroll
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [])

  return (
    <>
      <nav>
        <div className="nav-logo">
          <Image
            src="/logo mm 3.png"
            alt="Mumma Matters"
            width={220}
            height={65}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="#club" className="btn-outline" style={{ padding: '9px 20px', fontSize: '0.68rem' }}>
            Join Club MM
          </a>
          <a href="#products" className="btn-primary" style={{ padding: '9px 22px', fontSize: '0.68rem' }}>
            Shop Now
          </a>
        </div>

        <button
          className={`nav-hamburger${open ? ' is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div className={`nav-mobile${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <ul className="nav-mobile-links">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-mobile-cta">
          <a href="#club" className="btn-outline" onClick={() => setOpen(false)}>
            Join CLub MM
          </a>
          <a href="#products" className="btn-primary" onClick={() => setOpen(false)}>
            Shop Now
          </a>
        </div>
      </div>
    </>
  )
}
