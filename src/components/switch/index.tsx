// Types
import type { SwitchProps } from './types';

// Styles
import { StyledSwitch } from './styles';

export function Switch({ label, className, ...props }: SwitchProps) {
  return (
    <StyledSwitch className={className}>
      <input type="checkbox" role="switch" className="switch-input" {...props} />
      <span className="switch-track">
        <span className="switch-thumb" />
      </span>

      {label && <span className="switch-label">{label}</span>}
    </StyledSwitch>
  );
}
