import { ExternalLink } from "lucide-react";
import { Tag } from "@/components/atelier/Tag";
import styles from "./page.module.css";

export const metadata = {
  title: "About — Nikita Furletov",
};

// Placeholder bio copy throughout this page — personalize before shipping,
// especially the PhD research line (a reasonable guess, not confirmed) and
// the pull-quote (draft voice, free to replace).
export default function AboutPage() {
  return (
    <main className={styles.page}>
      <article className={styles.doc}>
        <div className={styles.metaRow}>
          <span className={styles.kicker}>About</span>
          <span className={styles.meta}>St. Petersburg</span>
        </div>

        <h1 className={styles.title}>Nikita Furletov</h1>
        <p className={styles.lead}>Data engineer by day, meteorologist by calling.</p>

        <div className={styles.divider} />

        <div className={styles.dropCapRow}>
          <span className={styles.dropCap}>I</span>
          <p className={styles.body}>
            work as a data engineer at TKB investment bank, building the data
            infrastructure that investment and analytics teams rely on day to
            day &mdash; pipelines, warehouses, and the plumbing that keeps
            numbers trustworthy.
          </p>
        </div>

        <p className={styles.body}>
          Alongside that, I&apos;m a{" "}
          <span className={styles.accent}>PhD student in meteorology</span>,
          researching probabilistic weather forecasting over northwest Russia.
          The two sides feed each other more than you&apos;d expect &mdash;
          weather data is just data with a grudge.
        </p>

        <blockquote className={styles.pullQuote}>
          &ldquo;Weather and data are the same problem: reading signal out of
          noise.&rdquo;
        </blockquote>

        <h2 className={styles.h2}>What this site is for</h2>
        <p className={styles.body}>
          This is the single entry point for my portfolio and project work
          &mdash; data engineering, meteorology research, and eventually,
          services. It&apos;s a work in progress, same as everything worth
          building.
        </p>

        <div className={styles.tags}>
          <Tag tone="terracotta">Data Engineering</Tag>
          <Tag tone="olive">Meteorology</Tag>
          <Tag tone="petrol">PhD Research</Tag>
        </div>

        <div className={styles.elsewhere}>
          <span className={styles.elsewhereLabel}>Elsewhere</span>
          <a
            href="https://github.com/meteoFurletov"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.elsewhereLink}
          >
            <ExternalLink size={16} strokeWidth={1.5} />
            github.com/meteoFurletov
          </a>
        </div>
      </article>
    </main>
  );
}
