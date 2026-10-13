// Libs
import styled from 'styled-components';

export const StyledPreferencesModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .preference-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #f7f9fd;
    border: 1px solid #e3e8f4;
    border-radius: 0.75rem;
  }

  .preference-icon {
    width: 2.5rem;
    height: 2.5rem;
    min-width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #e3ecfb;
    color: #1650d8;
  }

  .preference-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .preference-control {
    width: 11rem;
    flex-shrink: 0;

    > div {
      width: 100%;
    }

    .input {
      padding: 0.75rem 0 0.75rem 0.5rem;
    }
  }

  .preference-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    padding-top: 1rem;
    border-top: 1px solid #e3e8f4;

    button {
      width: auto;
      min-width: 7.5rem;
    }
  }

  @media (max-width: 768px) {
    .preference-row {
      flex-wrap: wrap;
    }

    .preference-icon {
      display: none;
    }

    .preference-control {
      width: 100%;
    }

    .preference-actions {
      flex-direction: column-reverse;
    }

    .preference-actions button {
      width: 100%;
    }
  }
`;
