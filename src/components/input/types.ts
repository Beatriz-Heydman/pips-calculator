import type { HTMLAttributes, ReactNode } from "react";

export type InputProps = HTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  leftSlot: ReactNode;
  rightSlot: string;
  value: string;
};
