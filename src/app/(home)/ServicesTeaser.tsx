import { Tag } from "@/components/atelier/Tag";
import styles from "./ServicesTeaser.module.css";

// "Coming soon" placeholder — deliberately a Home-page section, not its own
// route, per the v1 page cap (Home / About / Projects only).
export function ServicesTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <p className={styles.kicker}>Services</p>
        <div className={styles.row}>
          <h3 className={styles.heading}>Coming soon</h3>
          <Tag tone="neutral">Coming soon</Tag>
        </div>
        <p className={styles.body}>
          Consulting and freelance data engineering work — details soon.
        </p>
      </div>
    </section>
  );
}
