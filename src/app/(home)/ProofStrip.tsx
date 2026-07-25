import styles from "./ProofStrip.module.css";

const proof = [
  {
    figure: "5×",
    label: "Lower TCO",
    body: "Serverless, scale-to-zero lakehouse on object storage.",
  },
  {
    figure: "10M",
    label: "Rows / day",
    body: "Production ClickHouse market-analytics stack, stable throughput.",
  },
  {
    figure: "~0",
    label: "Data incidents",
    body: "Down from one to two bad-data days a month, via SQLMesh audits.",
  },
  {
    figure: "min",
    label: "To onboard a source",
    body: "Standardized pipeline deployment; it used to take hours.",
  },
];

export function ProofStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {proof.map((item) => (
          <div key={item.label} className={styles.item}>
            <span className={styles.figure}>{item.figure}</span>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.body}>{item.body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
