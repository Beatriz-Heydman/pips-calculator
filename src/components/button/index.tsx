// Types
import type { ButtonProps } from './types';

// Styles
import { StyledButton } from './styles';

export function Button({
  icon,
  label,
  variant = 'primary',
  type,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton $variant={variant} type={type} onClick={onClick}>
      {icon}
      {label}
    </StyledButton>
  );
}
