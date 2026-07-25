// Libs
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  background-image: linear-gradient(to right, #000920, #16196d);

  .logo {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2f39df;
    border-radius: 0.5rem;
  }

  .header-image {
    width: 500px;
    height: 300px;
    object-fit: cover;
    opacity: 0.3;
  }
`;
