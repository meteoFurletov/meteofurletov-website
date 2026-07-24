import React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Palette tone for the pill. */
  tone?: "olive" | "saffron" | "petrol" | "terracotta" | "neutral";
  children?: React.ReactNode;
}

/** Atelier mono-label pill / tag. */
export function Tag(props: TagProps): JSX.Element;
