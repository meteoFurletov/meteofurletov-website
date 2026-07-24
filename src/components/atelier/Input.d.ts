import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono field label shown above the input. */
  label?: string;
}

/** Atelier labelled text input. */
export function Input(props: InputProps): JSX.Element;
