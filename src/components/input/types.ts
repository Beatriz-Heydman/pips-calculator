import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  leftSlot: ReactNode;
  rightSlot: string;
  errorMessage?: string | null;
};
