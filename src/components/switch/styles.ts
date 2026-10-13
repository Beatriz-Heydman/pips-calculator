// Libs
import styled from 'styled-components';

export const StyledSwitch = styled.label`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  position: relative;

  .switch-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch-track {
    width: 2.5rem;
    height: 1.4rem;
    flex-shrink: 0;
    background-color: #d5dbea;
    border-radius: 999px;
    padding: 0.15rem;
    display: flex;
    align-items: center;
    transition: background-color 0.2s;
  }

  .switch-thumb {
    width: 1.1rem;
    height: 1.1rem;
    background-color: #fefefe;
    border-radius: 50%;
    box-shadow: 0px 1px 3px rgba(15, 23, 65, 0.3);
    transition: transform 0.2s;
  }

  .switch-label {
    color: #020414;
    font-family: Inter;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: normal;
  }

  .switch-input:checked + .switch-track {
    background-color: #1650d8;
  }

  .switch-input:checked + .switch-track .switch-thumb {
    transform: translateX(1.1rem);
  }

  .switch-input:focus-visible + .switch-track {
    outline: 2px solid #1650d8;
    outline-offset: 2px;
  }
`;
