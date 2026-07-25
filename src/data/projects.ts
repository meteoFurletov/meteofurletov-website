export type Project = {
  /** Unique slug, kebab-case. Used as the React list key; not currently routed. */
  slug: string;
  /** Project name shown as the card/row title. */
  title: string;
  /** Short category label, e.g. "Personal R&D", "TKB". */
  category: string;
  /** Time period, e.g. "2024 — now". */
  period: string;
  /** Description shown in the card body / work row. */
  description: string;
  /** Short tag labels. Rendered as pills. */
  tags: string[];
  /** External link (repo, live site). Omit if there's nothing to link yet. */
  url?: string;
  /** Show this project in the Home page "Selected work" section. */
  featured?: boolean;
  /** Layout weight on Home: "hero" = full-width media row, "compact" = half-width card. */
  homeVariant?: "hero" | "compact";
  /** Path to a screenshot/diagram in /public. Omit to render an empty media panel. */
  image?: string;
  /** Alt text for `image`. */
  imageAlt?: string;
};

// HOW TO ADD A PROJECT
// 1. Copy one of the objects below and change every field (slug must be unique).
// 2. Set `featured: true` + `homeVariant` to surface it on the home page.
// 3. Drop a screenshot in /public and point `image` at it for the hero rows.
// The /projects page and the home page both read this array — no other file changes.
export const projects: Project[] = [
  {
    slug: "serverless-data-lakehouse",
    title: "Serverless Data LakeHouse",
    category: "Personal R&D",
    period: "2024 — now",
    description:
      "My own from-scratch project for testing new data-processing approaches: a serverless, scale-to-zero lakehouse on object storage, cutting TCO 5× against the cluster it replaced. Infrastructure fully managed as code with Terraform and CI/CD — changes ship with a single git push. Includes Hermes, an agent giving managers self-serve ad-hoc queries, Excel automation, and instant insights with no developer in the loop.",
    tags: ["DuckDB", "S3 / Parquet", "Terraform", "CI/CD", "Agents"],
    url: "https://github.com/meteoFurletov",
    featured: true,
    homeVariant: "hero",
    imageAlt: "Architecture diagram of the serverless lakehouse",
  },
  {
    slug: "tkb-data-platform",
    title: "Company data platform, hybrid S3 + ClickHouse",
    category: "TKB",
    period: "2025 — now",
    description:
      "Re-architected the company platform on a hybrid S3 + ClickHouse medallion design — fast queries directly on low-cost object storage. Turned a stack with one to two bad-data days a month into the trusted source of truth: SQLMesh audits and tests drove data-quality incidents to near-zero, standardized deployment cut onboarding a new source from hours to minutes, and OpenMetadata made data products documented and discoverable across teams.",
    tags: ["ClickHouse", "SQLMesh", "Airflow", "OpenMetadata"],
    featured: true,
    homeVariant: "hero",
    imageAlt: "Data lineage and dashboard screenshot",
  },
  {
    slug: "stockhouse",
    title: "StockHouse — market analytics platform",
    category: "TKB",
    period: "2025",
    description:
      "A production ClickHouse market-analytics stack ingesting ten million rows a day with stable, high-throughput performance.",
    tags: ["ClickHouse", "Python"],
    featured: true,
    homeVariant: "compact",
  },
  {
    slug: "internal-ai-infrastructure",
    title: "Company-wide AI infrastructure",
    category: "TKB",
    period: "2025 — now",
    description:
      "Own the organisation's internal AI infrastructure: Open WebUI as the shared interface for open-source LLMs, vLLM for production-grade inference with built-in observability, and a RAG system giving semantic search over internal legal documentation.",
    tags: ["vLLM", "Open WebUI", "Weaviate"],
    featured: true,
    homeVariant: "compact",
  },
  {
    slug: "dwh-data-mart-layer",
    title: "DWH data-mart layer",
    category: "Aston",
    period: "2024 — 2025",
    description:
      "Designed the ClickHouse-based data-mart layer of a data warehouse and built Spark and Airflow ETL pipelines for analytical and ML workloads.",
    tags: ["ClickHouse", "Spark", "Airflow"],
  },
  {
    slug: "automated-retail-analytics",
    title: "Automated retail analytics",
    category: "Bookstore chain",
    period: "2023 — 2024",
    description:
      "Built an automated analytics system — PostgreSQL with Dockerised Airflow ETL on Yandex Cloud — and DataLens dashboards that surfaced weak points in inventory management.",
    tags: ["PostgreSQL", "Airflow", "Yandex Cloud"],
  },
  {
    slug: "radar-nowcasting-pipeline",
    title: "Radar nowcasting pipeline",
    category: "Research",
    period: "2022 — 2023",
    description:
      "A Dask/NumPy and Hadoop processing pipeline with a PyTorch model for radar data, lifting F-score from 0.25 to 0.65 at the Institute of Radar Meteorology.",
    tags: ["PyTorch", "Dask", "Hadoop"],
  },
];
