// Libs
import type { HTMLAttributes, ReactNode } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
};
