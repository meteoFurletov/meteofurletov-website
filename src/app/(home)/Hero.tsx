import { LinkButton } from "@/components/site/LinkButton";
import styles from "./Hero.module.css";

// The one deliberate Ember-mode section on the site (design system reserves
// Ember for hero/cover moments — see src/styles/atelier/GUIDELINES.md).
// Headline/kicker copy below is a placeholder — personalize before shipping.
export function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.kicker}>
        <span className={styles.dot} />
        Data Engineer &middot; Meteorologist
      </p>
      <h1 className={styles.headline}>
        Building at the edge of data and <em className={styles.accent}>weather</em>
      </h1>
      <p className={styles.lead}>
        I work as a data engineer by day and study meteorology by calling — this
        is where that work lives.
      </p>
      <div className={styles.actions}>
        <LinkButton href="/projects" variant="primary">
          View projects
        </LinkButton>
        <LinkButton href="/about" variant="ghost" onDark>
          About me
        </LinkButton>
      </div>
    </section>
  );
}
