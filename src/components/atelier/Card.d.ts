import React from "react";

/**
 * Atelier content card — kicker + Caslon title + body surface.
 * @startingPoint section="Core" subtitle="Kicker + Caslon title + body surface" viewport="700x150"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono uppercase kicker shown above the title. */
  kicker?: string;
  /** Caslon display title. */
  title?: string;
  /** Accent color for the kicker. Defaults to terracotta. */
  accent?: string;
  /** Body content (Newsreader). */
  children?: React.ReactNode;
}

/** Atelier content card. */
export function Card(props: CardProps): JSX.Element;
