"use client";

import React from "react";

/**
 * Atelier Input — labelled text field on a soft surface with a hairline underline.
 */
export function Input({ label, value, placeholder, onChange, style = {}, ...rest }) {
  return (
    <label style={{ display: "block", ...style }}>
      {label ? (
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--text-muted)",
            marginBottom: 8,
          }}
        >
          {label}
        </span>
      ) : null}
      <span
        style={{
          display: "block",
          background: "var(--surface-card)",
          border: "1px solid var(--border-hairline)",
          borderRadius: "var(--radius-card)",
          padding: "12px 16px",
        }}
      >
        <input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "var(--text-heading)",
          }}
          {...rest}
        />
      </span>
    </label>
  );
}
