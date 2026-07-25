export type Note = {
  slug: string;
  /** Display date, e.g. "2026 · 07". */
  date: string;
  title: string;
  /** One-line standfirst. */
  summary: string;
  /** Status pill copy. Use "Draft" for unpublished notes. */
  status: string;
  /** Link to the published note. Omit while it's still a draft. */
  url?: string;
};

// Replace these with real notes as they're written. Drop the `status` pill
// (or set it to the publish date) once a note goes live, and add `url`.
export const notes: Note[] = [
  {
    slug: "querying-parquet-on-s3",
    date: "2026 · 07",
    title: "Querying Parquet on S3 without a cluster",
    summary:
      "Where scale-to-zero actually pays off, and the query shapes that quietly ruin the economics.",
    status: "Draft",
  },
  {
    slug: "audits-before-dashboards",
    date: "2026 · 06",
    title: "Audits before dashboards",
    summary:
      "How SQLMesh tests turned a platform with two bad-data days a month into one nobody double-checks.",
    status: "Draft",
  },
  {
    slug: "serving-open-models-in-a-bank",
    date: "2026 · 05",
    title: "Serving open models in a bank",
    summary:
      "vLLM, observability, and what a RAG system over legal documents needs before anyone will use it.",
    status: "Draft",
  },
];
