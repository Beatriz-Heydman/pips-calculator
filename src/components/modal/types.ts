// Libs
import type { ReactNode } from 'react';

export type ModalProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  onClose: () => void;
  children: ReactNode;
};
