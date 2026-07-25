import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copyright}>© {new Date().getFullYear()} Nikita Furletov</span>
        <div className={styles.links}>
          <a className={styles.link} href="mailto:meteofurletov@gmail.com">
            Email
          </a>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/meteofurletov"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={styles.link}
            href="https://github.com/meteoFurletov"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
