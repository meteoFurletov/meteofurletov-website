import { LinkButton } from "@/components/site/LinkButton";
import styles from "./BioTeaser.module.css";

// Placeholder copy — keep in sync with the fuller bio on /about.
export function BioTeaser() {
  return (
    <section className={styles.section}>
      <p className={styles.text}>
        I&apos;m a data engineer at an investment bank by day, and a meteorology
        PhD student by calling — building pipelines and models on both sides
        of that line.
      </p>
      <LinkButton href="/about" variant="ghost">
        Read more
      </LinkButton>
    </section>
  );
}
