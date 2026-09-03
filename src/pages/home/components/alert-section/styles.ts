// Libs
import styled from 'styled-components';

export const StyledAlertSection = styled.div`
  width: 100%;
  max-width: 92vw;
  margin: 1.5rem 0 3rem;

  .message {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #e3efff;
    border-radius: 0.75rem;
    padding: 1.25rem 1.5rem;
    overflow: hidden;
  }

  .icon-container {
    width: 32px;
    height: 32px;
    min-width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #2530d8;
    position: relative;
    z-index: 1;
  }

  .message label {
    position: relative;
    z-index: 1;
  }

  .decorative-icon {
    position: absolute;
    right: -0.5rem;
    bottom: -1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.25;
    z-index: 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 2rem;

    .message {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 1rem 1.25rem;
    }
  }
`;
