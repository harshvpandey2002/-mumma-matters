'use client'
import { useEffect } from 'react'

/**
 * ScrollInit — Angeltors-style directional scroll animations.
 * Left column → slides from left, Right column → slides from right,
 * Grid cards → outer cards from sides, middle from bottom.
 * Section headers and single elements → fade up.
 */
export default function ScrollInit() {
  useEffect(() => {
    // ── Directional assignments ──────────────────────────────────────
    const assignDir = (selector, dir) => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add(`reveal-${dir}`)
      })
    }

    // Two-column sections: left side from left, right side from right
    assignDir('.founder-image-wrap', 'left')
    assignDir('.founder-body',       'right')
    assignDir('.gynaec-left',        'left')
    assignDir('.gynaec-form-card',   'right')

    // Section headers and standalone blocks: fade up
    assignDir('.section-header', 'up')
    assignDir('.hiw-step',       'up')
    assignDir('.cred-item',      'up')
    assignDir('.club .container > h2',       'up')
    assignDir('.club .container > p.club-desc', 'up')
    assignDir('.club-features',  'up')

    // Grid cards: first → left, last → right, middle → up
    const GRID_SELECTORS = [
      '.why-grid',
      '.products-grid',
      '.testi-grid',
      '.blogs-grid',
      '.footer-grid',
    ]

    GRID_SELECTORS.forEach(sel => {
      const grid = document.querySelector(sel)
      if (!grid) return
      const children = Array.from(grid.children)
      children.forEach((child, i) => {
        if (i === 0)                      child.classList.add('reveal-left')
        else if (i === children.length - 1) child.classList.add('reveal-right')
        else                              child.classList.add('reveal-up')

        // Stagger delay
        child.style.transitionDelay = `${i * 0.12}s`
      })
    })

    // ── IntersectionObserver ─────────────────────────────────────────
    const ALL = '.reveal-up, .reveal-left, .reveal-right'
    const els = document.querySelectorAll(ALL)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
