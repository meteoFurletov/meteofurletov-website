"use client";

import React from "react";

/**
 * Atelier Button — primary action, secondary outline, or ghost text link.
 */
export function Button({ variant = "primary", size = "md", children, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);

  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    lineHeight: 1,
    cursor: "pointer",
    border: "none",
    borderRadius: "var(--radius-card)",
    whiteSpace: "nowrap",
    transition: "background .15s ease, color .15s ease, opacity .15s ease",
  };

  const sizes = {
    sm: { fontSize: 14, padding: "9px 18px" },
    md: { fontSize: 16, padding: "12px 26px" },
    lg: { fontSize: 18, padding: "14px 32px" },
  };

  const variants = {
    primary: {
      background: hover ? "var(--color-primary-hover)" : "var(--color-primary)",
      color: "var(--surface-card)",
    },
    secondary: {
      background: hover ? "var(--surface-card)" : "transparent",
      color: "var(--text-heading)",
      border: "1px solid #C9BDA6",
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      textDecoration: "underline",
      textUnderlineOffset: "4px",
      padding: size === "lg" ? "14px 10px" : "12px 8px",
      opacity: hover ? 0.7 : 1,
    },
  };

  return (
    <button
      style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </button>
  );
}
