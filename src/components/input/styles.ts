// Libs
import styled from "styled-components";

export const StyledInput = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  outline: none;
  border: none;

  .input-container {
    width: 100%;
    height: fit-content;
    display: flex;
    border: 1px solid #d5dbea;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
  }

  .icon-container {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eef3fb;
    padding: 0.75rem;
    border-radius: 0.45rem 0 0 0.45rem;
    border-right: 1px solid #d5dbea;
  }

  .input-content {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.75rem;
  }

  .input {
    width: fit-content;
    height: fit-content;
    outline: none;
    border: none;
    font-size: 1.15rem;
    padding: 0 0 0 0.5rem;
    background-color: transparent;
  }
`;
