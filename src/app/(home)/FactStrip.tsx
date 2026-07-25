import styles from "./FactStrip.module.css";

const facts = [
  { label: "Now", value: "AI Data Engineer, TKB Investment Partners" },
  { label: "Core stack", value: "ClickHouse · S3/Parquet · SQLMesh · Airflow" },
  { label: "Also running", value: "Internal AI infra — vLLM, RAG, Open WebUI" },
];

export function FactStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {facts.map((fact) => (
          <div key={fact.label} className={styles.item}>
            <span className={styles.label}>{fact.label}</span>
            <span className={styles.value}>{fact.value}</span>
          </div>
        ))}
        <div className={styles.item}>
          <span className={styles.label}>Elsewhere</span>
          <a
            className={styles.link}
            href="https://github.com/meteoFurletov"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/meteoFurletov
          </a>
        </div>
      </div>
    </section>
  );
}
