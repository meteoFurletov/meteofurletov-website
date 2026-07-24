import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.wordmark}>
        Nikita Furletov
      </Link>
      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
