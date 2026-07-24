import { Card } from "@/components/atelier/Card";
import { Tag } from "@/components/atelier/Tag";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata = {
  title: "Projects — Nikita Furletov",
};

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <p className={styles.kicker}>Projects</p>
      <h1 className={styles.title}>Selected work</h1>
      <p className={styles.lead}>
        Data engineering and meteorology research, in progress and out in the
        open.
      </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <Card key={project.slug} kicker={project.category} title={project.title}>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <Tag key={tag} tone="neutral">
                  {tag}
                </Tag>
              ))}
            </div>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewLink}
              >
                View &rarr;
              </a>
            ) : null}
          </Card>
        ))}
      </div>
    </main>
  );
}
