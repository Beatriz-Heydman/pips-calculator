//Components
import { Typography } from '../typography';

// Types
import type { InputProps } from './types';

// Styles
import { StyledInput } from './styles';

export function Input({
  label,
  leftSlot,
  rightSlot,
  errorMessage,
  className,
  ...props
}: InputProps) {
  return (
    <StyledInput>
      {label}

      <div className="input-container">
        {leftSlot && <div className="icon-container">{leftSlot}</div>}

        <div className="input-content">
          <input className={`input ${className || ''}`} {...props} />
          {props.value && (
            <Typography color="#7c8192" fontSize="0.75rem">
              {rightSlot}
            </Typography>
          )}
        </div>
      </div>

      {errorMessage && (
        <Typography color="#dc2626" fontSize="0.8rem" fontWeight="500">
          {errorMessage}
        </Typography>
      )}
    </StyledInput>
  );
}
