export type Project = {
  /** Unique slug, kebab-case. Used as the React list key; not currently routed. */
  slug: string;
  /** Project name shown as the Card title. */
  title: string;
  /** One-line category shown as the Card kicker, e.g. "Data Pipeline", "Research". */
  category: string;
  /** 1-3 sentence description shown in the Card body. */
  description: string;
  /** Short tag labels, e.g. ["ClickHouse", "Airflow", "Python"]. Rendered as Tags. */
  tags: string[];
  /** External link (GitHub repo, live site, etc). Omit if there's nothing to link yet. */
  url?: string;
  /** Show this project in the Home page "Selected work" teaser. */
  featured?: boolean;
};

// HOW TO ADD A PROJECT
// 1. Copy one of the objects in the array below.
// 2. Change every field: slug (unique, kebab-case), title, category,
//    description, tags, and url (delete the `url` line if there's no link yet).
// 3. Set `featured: true` if it should also appear in the "Selected work"
//    teaser on the home page (keep it to ~3 featured projects at a time).
// 4. Save the file. The /projects page and the home page teaser both read
//    from this array automatically — no other file needs to change.
export const projects: Project[] = [
  {
    slug: "placeholder-project-one",
    title: "Placeholder Project One",
    category: "Data Pipeline",
    description:
      "A short description of this project goes here — what it does, why it exists, and what's interesting about it.",
    tags: ["Example", "Replace Me"],
    url: "https://github.com/meteoFurletov",
    featured: true,
  },
  {
    slug: "placeholder-project-two",
    title: "Placeholder Project Two",
    category: "Research",
    description:
      "Another placeholder entry. Duplicate this object and edit every field to add a real project — no other file needs to change.",
    tags: ["Example", "Replace Me"],
    featured: true,
  },
];
