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
  value,
  onChange,
  placeholder,
  errorMessage,
}: InputProps) {
  return (
    <StyledInput>
      {label}

      <div className="input-container">
        <div className="icon-container">{leftSlot}</div>

        <div className="input-content">
          <input
            className="input"
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
          {value && (
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
