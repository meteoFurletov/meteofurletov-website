import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./FeaturedProjects.module.css";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);
  const heroes = featured.filter((project) => project.homeVariant === "hero");
  const compact = featured.filter((project) => project.homeVariant === "compact");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <div className={styles.headCopy}>
            <span className={styles.kicker}>Selected work</span>
            <h2 className={styles.title}>Platforms, end to end</h2>
          </div>
          <Link href="/projects" className={styles.allLink}>
            All work &rarr;
          </Link>
        </header>

        <div className={styles.stack}>
          {heroes.map((project, i) => (
            <article
              key={project.slug}
              className={`${styles.heroCard} ${i % 2 === 1 ? styles.reversed : ""}`}
            >
              <div className={styles.media}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                    className={styles.mediaImage}
                  />
                ) : (
                  <span className={styles.mediaEmpty}>{project.imageAlt}</span>
                )}
              </div>
              <div className={styles.heroBody}>
                <div className={styles.meta}>
                  <span className={styles.metaIndex}>
                    {String(heroes.indexOf(project) + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.metaRule} aria-hidden="true" />
                  <span className={styles.metaCategory}>
                    {project.category} · {project.period}
                  </span>
                </div>
                <h3 className={styles.heroTitle}>{project.title}</h3>
                <p className={styles.heroText}>{project.description}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.url ? (
                  <a
                    className={styles.cardLink}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project &rarr;
                  </a>
                ) : (
                  <Link className={styles.cardLink} href="/projects">
                    Read more &rarr;
                  </Link>
                )}
              </div>
            </article>
          ))}

          <div className={styles.compactGrid}>
            {compact.map((project, i) => (
              <article key={project.slug} className={styles.compactCard}>
                <div className={styles.meta}>
                  <span className={styles.metaIndex}>
                    {String(heroes.length + i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.metaRule} aria-hidden="true" />
                  <span className={styles.metaCategory}>{project.category}</span>
                </div>
                <h3 className={styles.compactTitle}>{project.title}</h3>
                <p className={styles.compactText}>{project.description}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
