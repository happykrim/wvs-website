import styles from './Process.module.css'

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    body: 'We begin by understanding your business: current operations, key bottlenecks, goals, and the technical landscape you\'re working within.',
  },
  {
    number: '02',
    title: 'Build',
    body: 'We design and develop the right solution — whether that\'s a data pipeline, custom software, or an automated workflow — with clarity and precision.',
  },
  {
    number: '03',
    title: 'Automate',
    body: 'Manual processes become systematic. We implement automation that reduces overhead, increases consistency, and frees your team to focus on what matters.',
  },
  {
    number: '04',
    title: 'Scale',
    body: 'With robust foundations in place, we help you grow — refining systems, expanding capabilities, and tracking the metrics that signal real progress.',
  },
]

export default function Process() {
  return (
    <section className="section section--alt" id="process" aria-labelledby="process-heading">
      <div className="container">
        <header className={styles.header}>
          <p className="section-eyebrow">How We Work</p>
          <h2 className="section-title" id="process-heading">
            A clear, consistent approach
          </h2>
          <p className="section-subtitle">
            Every engagement follows the same disciplined process — so you always know where you stand and what comes next.
          </p>
        </header>

        <ol className={styles.steps} aria-label="Our four-step process">
          {STEPS.map((step) => (
            <li className={styles.step} key={step.number}>
              <div className={styles.stepNumber} aria-label={`Step ${step.number}`}>
                {step.number}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
