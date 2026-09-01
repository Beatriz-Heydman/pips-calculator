// Libs
import styled from 'styled-components';

export const StyledHomeView = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #000920, #16196d);
  position: relative;

  .background-image {
    width: 500px;
    height: 300px;
    object-fit: cover;
    opacity: 0.3;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
