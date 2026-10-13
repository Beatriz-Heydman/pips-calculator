// Libs
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.5rem) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgba(0, 9, 32, 0.6);
  animation: ${fadeIn} 0.2s ease-out;

  .modal-content {
    animation: ${slideUp} 0.3s ease-out;
    width: 100%;
    max-width: 38rem;
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: #fefefe;
    border-radius: 0.75rem;
    box-shadow: 0px 10px 25px rgba(15, 23, 65, 0.18);
  }

  .modal-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .modal-icon {
    width: 3rem;
    height: 3rem;
    min-width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #e3ecfb;
    color: #1650d8;
  }

  .modal-title {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .modal-close {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    border: none;
    border-radius: 0.5rem;
    background-color: transparent;
    color: #7c8192;
    cursor: pointer;

    &:hover {
      background-color: #eef3fb;
    }
  }
`;
