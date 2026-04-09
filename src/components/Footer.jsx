import Logo from './Logo'
import styles from './Footer.module.css'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Process',  href: '#process' },
  { label: 'Contact',  href: '#contact' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.inner}>
          {/* Brand */}
          <div>
            <a href="#hero" className={styles.brand} aria-label="Wide View Solutions Ltd — home">
              <Logo className={styles.brandLogo} />
              <span className={styles.brandName}>
                Wide View Solutions
                <span>Ltd</span>
              </span>
            </a>
            <p className={styles.tagline}>
              Automation, data, and software solutions that help businesses operate better and grow with intent.
            </p>

            {/* Update contact email here */}
            <p className={styles.email}>
              <a href="mailto:hello@wideviewsolutions.com" aria-label="Email Wide View Solutions">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                hello@wideviewsolutions.com
              </a>
            </p>

            {/* Social links — replace the href values with your real profile URLs */}
            <nav className={styles.social} aria-label="Social media links">
              {/* ← Replace with your LinkedIn URL, e.g. https://linkedin.com/in/your-handle */}
              <a href="https://linkedin.com/in/YOUR_LINKEDIN_HANDLE" className={styles.socialLink} aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              {/* ← Replace with your GitHub URL, e.g. https://github.com/your-handle */}
              <a href="https://github.com/YOUR_GITHUB_HANDLE" className={styles.socialLink} aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
            </nav>
          </div>

          {/* Nav links */}
          <nav className={styles.links} aria-label="Footer navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className={styles.navLink}>{label}</a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {currentYear} Wide View Solutions Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
