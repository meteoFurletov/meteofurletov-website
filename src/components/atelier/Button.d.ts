import React from "react";

/**
 * Atelier action button — primary, secondary & ghost actions.
 * @startingPoint section="Core" subtitle="Primary, secondary & ghost actions" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Primary = filled terracotta; secondary = outline; ghost = underlined text link. */
  variant?: "primary" | "secondary" | "ghost";
  /** Size of the control. */
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

/** Atelier action button. */
export function Button(props: ButtonProps): JSX.Element;
