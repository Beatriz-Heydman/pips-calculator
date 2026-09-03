// Libs
import styled from 'styled-components';

export const StyledCalculationSection = styled.form`
  width: fit-content;
  max-width: 92vw;
  background-color: #fefefe;
  border-radius: 0.75rem;
  box-shadow: 0px 10px 25px rgba(15, 23, 65, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 2rem;
  margin-top: -2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1.5rem;

    .calculation-fields,
    .calculation-inputs {
      width: 100%;
      flex-direction: column;
    }
  }
`;
