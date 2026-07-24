import { Card } from "@/components/atelier/Card";
import { Tag } from "@/components/atelier/Tag";
import { LinkButton } from "@/components/site/LinkButton";
import { projects } from "@/data/projects";
import styles from "./FeaturedProjects.module.css";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className={styles.section}>
      <p className={styles.kicker}>Selected work</p>
      <h2 className={styles.heading}>Recent projects</h2>
      <div className={styles.grid}>
        {featured.map((project) => (
          <Card key={project.slug} kicker={project.category} title={project.title}>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <Tag key={tag} tone="neutral">
                  {tag}
                </Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <LinkButton href="/projects" variant="ghost">
        See all projects
      </LinkButton>
    </section>
  );
}
