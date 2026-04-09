import { useState, useEffect, useCallback } from 'react'
import Logo from './Logo'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Process',  href: '#process' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (!e.target.closest('nav')) close()
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [open, close])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={`container ${styles.navbar__inner}`} aria-label="Main navigation">
        <a href="#hero" className={styles.navbar__brand} onClick={close} aria-label="Wide View Solutions Ltd — home">
          <Logo className={styles.navbar__logo} />
          <span className={styles.navbar__name}>
            Wide View Solutions
            <span>Ltd</span>
          </span>
        </a>

        <button
          className={`${styles.navbar__toggle} ${open ? styles.open : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label="Toggle navigation menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <ul className={`${styles.navbar__links} ${open ? styles.open : ''}`} id="nav-links" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.navbar__link} onClick={close}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={`btn btn--primary ${styles.navbar__cta}`} onClick={close}>
              Book a Call
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
