import Link from "next/link";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  href: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onDark?: boolean;
}

/**
 * Atelier's Button component only renders a native <button> — it has no href
 * support, so it can't be used for real navigation without nesting an
 * interactive element inside an <a> (invalid HTML) or losing native link
 * behavior (open in new tab, crawlability). This mirrors Button's primary/
 * ghost visual treatment as a real next/link anchor instead, using the same
 * design tokens, hover handled in CSS rather than JS state.
 */
export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  children,
  onDark = false,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${styles.base} ${styles[variant]} ${styles[size]} ${onDark ? styles.onDark : ""}`}
    >
      {children}
    </Link>
  );
}
