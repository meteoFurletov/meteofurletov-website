import styles from "./HowIWork.module.css";

const pillars = [
  {
    n: "01",
    title: "Build it from scratch",
    body: "Empty object storage to a working medallion lakehouse: ingestion, modelling, orchestration, catalog, CI/CD — infrastructure as code from the first commit.",
  },
  {
    n: "02",
    title: "Or make yours proper",
    body: "Bad-data days, hand-deployed pipelines, numbers nobody trusts. I re-architect what's there — tests and audits first — until the figure is quoted without a second look.",
  },
  {
    n: "03",
    title: "Decide, then own it",
    body: "I read the internals before picking the tool, defend the trade-off, and run the thing in production. Autonomy is the point — not a thing I need managed.",
  },
];

export function HowIWork() {
  return (
    <section className={styles.section}>
      <div className={styles.rail}>
        <span className={styles.kicker}>How I work</span>
        <span className={styles.railNote}>
          Give me the problem and the keys. I&apos;ll come back with a platform.
        </span>
      </div>
      <div className={styles.grid}>
        {pillars.map((pillar) => (
          <article key={pillar.n} className={styles.pillar}>
            <span className={styles.index}>{pillar.n}</span>
            <h2 className={styles.title}>{pillar.title}</h2>
            <p className={styles.body}>{pillar.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
