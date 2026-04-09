import styles from './Services.module.css'

const SERVICES = [
  {
    title: 'Automation',
    description:
      'Eliminate manual bottlenecks and reduce operational overhead. We design and implement reliable automation workflows — from data pipelines to business process orchestration.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    title: 'Data Engineering',
    description:
      'Build dependable data infrastructure that turns raw information into structured, actionable intelligence. Pipelines, scraping, warehousing, and reporting — engineered for reliability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'Software Development',
    description:
      'Purpose-built applications and tools aligned to your specific business needs. From internal platforms to customer-facing products, we ship clean, maintainable code that scales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Growth Systems',
    description:
      'We build the systems and processes that compound revenue over time — lead generation, analytics infrastructure, performance tracking, and strategic tooling that connects effort to outcome.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <header className={styles.header}>
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title" id="services-heading">
            Services built around your goals
          </h2>
          <p className="section-subtitle">
            We focus on the technical foundations that give businesses a genuine operational advantage.
          </p>
        </header>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <article className={styles.card} key={service.title}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardBody}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
