import Link from "next/link";
import { notes } from "@/data/notes";
import styles from "./Notes.module.css";

export function Notes() {
  if (notes.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.rail}>
        <span className={styles.kicker}>Notes</span>
        <span className={styles.railNote}>
          Working notes on architecture decisions — trade-offs, benchmarks, things that surprised me.
        </span>
      </div>
      <div className={styles.list}>
        {notes.map((note) => (
          <article key={note.slug} className={styles.row}>
            <span className={styles.date}>{note.date}</span>
            <div className={styles.rowBody}>
              <h3 className={styles.title}>
                {note.url ? <Link href={note.url}>{note.title}</Link> : note.title}
              </h3>
              <p className={styles.summary}>{note.summary}</p>
            </div>
            <span className={styles.status}>{note.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
