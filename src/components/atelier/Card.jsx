import React from "react";

/**
 * Atelier Card — cream surface with hairline border, mono kicker, Caslon title, Newsreader body.
 */
export function Card({ kicker, title, children, accent = "var(--color-primary)", style = {}, ...rest }) {
  return (
    <div
      style={{
        background: "var(--surface-white)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-card)",
        padding: "20px 22px",
        ...style,
      }}
      {...rest}
    >
      {kicker ? (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 500,
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: accent,
          }}
        >
          {kicker}
        </div>
      ) : null}
      {title ? (
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            lineHeight: 1.15,
            color: "var(--text-heading)",
            marginTop: kicker ? 10 : 0,
          }}
        >
          {title}
        </div>
      ) : null}
      {children ? (
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 14,
            lineHeight: 1.5,
            color: "var(--text-muted)",
            marginTop: 6,
          }}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
