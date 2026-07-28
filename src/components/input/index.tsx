//Components
import { Typography } from "../typography";

// Types
import type { InputProps } from "./types";

// Styles
import { StyledInput } from "./styles";

export function Input({ label, leftSlot, rightSlot, value }: InputProps) {
  return (
    <StyledInput>
      {label}

      <div className="input-container">
        <div className="icon-container">{leftSlot}</div>

        <div className="input-content">
          <input className="input" placeholder="0" value={value} />
          <Typography color="#7c8192" fontSize="0.75rem">
            {rightSlot}
          </Typography>
        </div>
      </div>
    </StyledInput>
  );
}
