import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata = {
  title: "Work — Nikita Furletov",
  description: "Analytics platforms and pipelines, built from scratch or rebuilt.",
};

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <header className={styles.head}>
        <span className={styles.kicker}>Work</span>
        <div>
          <h1 className={styles.title}>Platforms and pipelines</h1>
          <p className={styles.lead}>
            Built from scratch or rebuilt from something that wasn&apos;t working. Newest first.
          </p>
        </div>
      </header>

      <div className={styles.list}>
        {projects.map((project, i) => (
          <article key={project.slug} className={styles.row}>
            <div className={styles.rowMeta}>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <div className={styles.metaStack}>
                <span className={styles.category}>{project.category}</span>
                <span className={styles.period}>{project.period}</span>
              </div>
            </div>
            <div className={styles.rowBody}>
              <h2 className={styles.rowTitle}>{project.title}</h2>
              <p className={styles.rowText}>{project.description}</p>
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            {project.url ? (
              <a
                className={styles.viewLink}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View &rarr;
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}
