import { Mail, Link2, ExternalLink } from "lucide-react";
import styles from "./ContactBand.module.css";

const channels = [
  {
    label: "meteofurletov@gmail.com",
    href: "mailto:meteofurletov@gmail.com",
    Icon: Mail,
    external: false,
  },
  {
    label: "linkedin.com/in/meteofurletov",
    href: "https://www.linkedin.com/in/meteofurletov",
    Icon: Link2,
    external: true,
  },
  {
    label: "github.com/meteoFurletov",
    href: "https://github.com/meteoFurletov",
    Icon: ExternalLink,
    external: true,
  },
];

export function ContactBand() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.kicker}>Working together</span>
          <h2 className={styles.title}>Need a stack built — or straightened out?</h2>
          <p className={styles.lead}>
            Greenfield platform design, or an audit and rebuild of what you&apos;re running now:
            ingestion, modelling, orchestration, data quality, catalog. I work best with a clear
            problem and room to decide how it gets solved.
          </p>
          <a className={styles.cta} href="mailto:meteofurletov@gmail.com">
            Start a conversation
          </a>
        </div>
        <div className={styles.channels}>
          {channels.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              className={styles.channel}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className={styles.channelLabel}>
                <Icon size={18} strokeWidth={1.5} className={styles.icon} aria-hidden="true" />
                {label}
              </span>
              <span aria-hidden="true" className={styles.arrow}>
                &rarr;
              </span>
            </a>
          ))}
          <div className={styles.basedRow}>
            <span className={styles.basedLabel}>Based</span>
            <span className={styles.basedValue}>Remote · open to relocation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
