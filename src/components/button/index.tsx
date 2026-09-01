// Types
import type { ButtonProps } from './types';

// Styles
import { StyledButton } from './styles';

export function Button({ icon, label, onClick }: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      {icon}
      {label}
    </StyledButton>
  );
}
