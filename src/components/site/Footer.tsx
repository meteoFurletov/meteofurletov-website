import { Mail, ExternalLink } from "lucide-react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© 2026 Nikita Furletov</span>
      <div className={styles.links}>
        <a href="mailto:meteofurletov@gmail.com" className={styles.iconLink} aria-label="Email">
          <Mail size={18} strokeWidth={1.5} />
        </a>
        <a
          href="https://github.com/meteoFurletov"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          aria-label="GitHub"
        >
          <ExternalLink size={18} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  );
}
