import styles from './About.module.css'

const EXPERTISE = [
  'Automation', 'Data Engineering', 'Web Scraping',
  'Software Development', 'Systems Architecture', 'Revenue Growth',
]

export default function About() {
  return (
    <section className="section section--subtle" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.layout}>
          {/* Avatar */}
          <div className={styles.avatar} aria-hidden="true">
            <div className={styles.avatarInner}>
              <div className={styles.avatarCircle}>AI</div>
              <span className={styles.avatarBadge}>Founder &amp; CEO</span>
            </div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <p className="section-eyebrow">About the Founder</p>
            <h2 className="section-title" id="about-heading">
              Abdelkrim Ibrahim
            </h2>

            <p>
              Abdelkrim founded Wide View Solutions with a clear purpose: to give ambitious businesses
              access to the kind of technical infrastructure that produces compounding results. His background spans
              automation engineering, data systems, software development, and growth strategy — disciplines that
              most agencies treat as separate, but that create the most value when unified.
            </p>
            <p>
              Prior to WVS, Abdelkrim built and operated data-driven systems across multiple industries, focusing
              on the practical intersection of software and revenue. He understands that the best technology is
              only valuable if it directly improves operations and the bottom line.
            </p>
            <p>
              At Wide View Solutions, every engagement is led with the same commitment: understand the business deeply,
              build the right systems, and ensure the results are measurable.
            </p>

            <div className={styles.tags} aria-label="Areas of expertise">
              {EXPERTISE.map((tag) => (
                <span className={styles.tag} key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
