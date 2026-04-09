import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta} id="contact" aria-labelledby="cta-heading">
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Get In Touch</p>
        <h2 className={styles.heading} id="cta-heading">
          Ready to build something that works?
        </h2>
        <p className={styles.sub}>
          Whether you need to automate a process, build better data infrastructure, develop
          software, or create the systems that drive growth — let's talk about what's possible for your business.
        </p>
        <div className={styles.actions}>
          {/* Update this href with your calendar or contact link */}
          <a
            href="mailto:hello@wideviewsolutions.com"
            className={`btn btn--lg ${styles.btnLight}`}
          >
            Book a Call
          </a>
          <a
            href="mailto:hello@wideviewsolutions.com"
            className={`btn btn--lg ${styles.btnGhost}`}
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  )
}
