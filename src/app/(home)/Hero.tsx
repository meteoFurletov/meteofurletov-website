import Image from "next/image";
import { LinkButton } from "@/components/site/LinkButton";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <span className={styles.dot} aria-hidden="true" />
            Data engineer · Analytics platforms
          </p>
          <h1 className={styles.headline}>
            Built from scratch. <em>Owned end to end.</em>
          </h1>
          <p className={styles.lead}>
            I take an analytics stack from empty object storage to a source of truth people stop
            double-checking — or take the one you already have and make it that. ClickHouse, S3,
            SQLMesh, Airflow.
          </p>
          <div className={styles.actions}>
            <LinkButton href="/projects">See the work</LinkButton>
            <LinkButton href="/about" variant="ghost" onDark>
              How I work
            </LinkButton>
          </div>
        </div>
        <div className={styles.portrait}>
          <Image
            src="/nikita-furletov.jpg"
            alt="Nikita Furletov"
            width={800}
            height={1000}
            priority
            className={styles.photo}
          />
          <span className={styles.badge}>Remote · open to relocation</span>
        </div>
      </div>
    </section>
  );
}
