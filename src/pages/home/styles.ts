// Libs
import styled from 'styled-components';

export const StyledHomeView = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f6fb;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    padding-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding-bottom: 1.5rem;
  }
`;
