import Logo from './Logo'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-heading">
      <div className={`container ${styles.hero__inner}`}>
        {/* Text */}
        <div>
          <p className={styles.hero__eyebrow}>Wide View Solutions Ltd</p>
          <h1 className={styles.hero__heading} id="hero-heading">
            Automate. Optimise.<br />
            <em>Grow with precision.</em>
          </h1>
          <p className={styles.hero__sub}>
            We help businesses streamline operations, engineer robust data systems, and build
            software that drives measurable revenue growth — through thoughtful automation and
            technical excellence.
          </p>
          <div className={styles.hero__actions}>
            <a href="#contact" className="btn btn--primary btn--lg">Book a Call</a>
            <a href="#services" className="btn btn--outline btn--lg">Our Services</a>
          </div>
        </div>

        {/* Visual */}
        <div className={styles.hero__visual} aria-hidden="true">
          <div className={styles.hero__mark}>
            <Logo />
          </div>
        </div>
      </div>
    </section>
  )
}
