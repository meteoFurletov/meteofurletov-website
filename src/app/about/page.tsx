import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "About — Nikita Furletov",
  description:
    "Data engineer for open-source analytics infrastructure — ClickHouse, S3, SQLMesh, Airflow.",
};

const facts = [
  { label: "Role", value: "AI Data Engineer" },
  { label: "Based", value: "Remote / relocation" },
  { label: "Languages", value: "EN C1/C2 · RU native" },
  { label: "Degrees", value: "M.Sc. / B.Sc. RSHU" },
];

const roles = [
  {
    period: "2025 — now",
    title: "AI Data Engineer, TKB Investment Partners",
    detail: "Company data platform, StockHouse, internal AI infrastructure.",
  },
  {
    period: "2024 — 2025",
    title: "Data Engineer, Aston",
    detail: "ClickHouse data-mart layer of a DWH; Spark and Airflow ETL for analytics and ML.",
  },
  {
    period: "2023 — 2024",
    title: "Data Engineer, bookstore chain",
    detail:
      "Automated analytics on PostgreSQL and Airflow, surfacing weak points in inventory management.",
  },
  {
    period: "2022 — 2023",
    title: "Data Engineer, Institute of Radar Meteorology",
    detail: "Dask/NumPy and Hadoop pipeline plus a PyTorch model, lifting F-score from 0.25 to 0.65.",
  },
];

const tags = [
  "ClickHouse",
  "SQLMesh",
  "Airflow",
  "Terraform",
  "Kubernetes",
  "Atmospheric science",
];

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <Image
          src="/nikita-furletov.jpg"
          alt="Nikita Furletov"
          width={800}
          height={1000}
          className={styles.photo}
        />
        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.factRow}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </aside>

      <article className={styles.article}>
        <span className={styles.kicker}>About</span>
        <h1 className={styles.name}>Nikita Furletov</h1>
        <p className={styles.standfirst}>
          Data engineer for open-source analytics infrastructure. I own platforms end to end.
        </p>
        <hr className={styles.rule} />

        <div className={styles.dropCapBlock}>
          <span className={styles.dropCap} aria-hidden="true">
            M
          </span>
          <p className={styles.body}>
            y work is building analytics infrastructure on open source — ClickHouse, S3 and Parquet,
            SQLMesh, Airflow — and I like doing it from an empty repository. I dig into system
            internals and architectural trade-offs before picking a tool, then own the result:
            pipelines, models, data quality, catalog, and the infrastructure code underneath.
          </p>
        </div>

        <p className={styles.body}>
          That works in both directions. At TKB I re-architected a platform nobody trusted into the
          company&apos;s source of truth; on my own time I run a serverless lakehouse as a testbed for
          approaches I want to prove before they touch production. I also run the company&apos;s
          internal AI infrastructure — open-source LLM serving and RAG — because it turned out to be
          the same discipline: pick carefully, automate everything, keep it observable.
        </p>

        <blockquote className={styles.quote}>
          A platform is trustworthy when nobody checks the number twice.
        </blockquote>

        <h2 className={styles.h2}>Where I&apos;ve worked</h2>
        <div className={styles.timeline}>
          {roles.map((role) => (
            <div key={role.period} className={styles.roleRow}>
              <span className={styles.rolePeriod}>{role.period}</span>
              <div>
                <div className={styles.roleTitle}>{role.title}</div>
                <div className={styles.roleDetail}>{role.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className={styles.h2}>And the weather</h2>
        <p className={styles.body}>
          My degrees are in atmospheric science, and postgraduate research keeps me in probabilistic
          forecasting. It&apos;s the reason I&apos;m comfortable with messy spatiotemporal data —
          ERA5, GRIB, ensembles — and it&apos;s where I learned that a number without its uncertainty
          isn&apos;t finished.
        </p>

        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
