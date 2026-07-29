// Libs
import styled from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #2530d8;
  background-color: #2530d8;
  color: #fff;
  font-size: 1rem;
  box-shadow:
    inset -10px 6px 3px -8px rgba(255, 255, 255, 0.3),
    inset 10px -6px 3px -8px rgba(255, 255, 255, 0.3);
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      inset -10px -7px 3px -8px rgba(255, 255, 255, 0.395),
      inset 10px 7px 3px -8px rgba(255, 255, 255, 0.393);
  }

  &:active {
    transform: translateY(1px) scaleX(0.98);
  }
`;
