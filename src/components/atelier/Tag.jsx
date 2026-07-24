import React from "react";

/**
 * Atelier Tag — a small mono-label pill in one of the palette tones.
 */
export function Tag({ tone = "olive", children, style = {}, ...rest }) {
  const tones = {
    olive:     { background: "#E7DAC2", color: "var(--color-secondary)" },
    saffron:   { background: "#F3E2C1", color: "#9A6A1C" },
    petrol:    { background: "var(--color-ground-dark)", color: "var(--text-on-dark)" },
    terracotta:{ background: "#F2DACF", color: "var(--color-primary-hover)" },
    neutral:   { background: "var(--surface-sand)", color: "var(--text-muted)" },
  };

  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 1,
        padding: "7px 13px",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        display: "inline-block",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
