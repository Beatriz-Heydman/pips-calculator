// Libs
import styled, { css } from 'styled-components';

// Botão passa para baixo dos inputs, ocupando a mesma largura
const stackedLayout = css`
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  > button {
    width: 100%;
  }
`;

// Inputs em duas colunas alinhadas; o separador que quebraria a linha some
const gridLayout = css`
  display: grid;
  grid-template-columns: auto 1px auto;
  justify-content: center;
  align-items: start;

  > :nth-child(4) {
    display: none;
  }
`;

export const StyledCalculationSection = styled.form`
  width: fit-content;
  max-width: 92vw;
  background-color: #fefefe;
  border-radius: 0.75rem;
  box-shadow: 0px 10px 25px rgba(15, 23, 65, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding: 1.5rem 2rem 3.5rem;
  margin-top: -2rem;
  position: relative;
  z-index: 2;

  @media (min-width: 769px) and (max-width: 1199px) {
    .calculation-fields {
      ${stackedLayout}
    }
  }

  @media (min-width: 769px) and (max-width: 1099px) {
    .calculation-inputs {
      ${gridLayout}
    }
  }

  @media (min-width: 769px) and (max-width: 1599px) {
    .percentage-mode {
      ${stackedLayout}
    }
  }

  @media (min-width: 769px) and (max-width: 1499px) {
    .percentage-mode .calculation-inputs {
      ${gridLayout}
    }
  }

  /* Inputs em uma linha só: botão centralizado, mais estreito que os inputs do meio */
  @media (min-width: 1500px) and (max-width: 1599px) {
    .percentage-mode > button {
      width: 28rem;
      align-self: center;
    }
  }

  @media (min-width: 1100px) and (max-width: 1199px) {
    .calculation-fields:not(.percentage-mode) > button {
      width: 14rem;
      align-self: center;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;

    .calculation-fields,
    .calculation-inputs {
      width: 100%;
      flex-direction: column;
    }
  }
`;
