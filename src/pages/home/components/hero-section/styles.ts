// Libs
import styled from 'styled-components';

export const StyledHeroSection = styled.div`
  width: 100%;
  background-image: linear-gradient(to right, #000920, #16196d);
  display: flex;
  justify-content: center;

  .hero-inner {
    width: 100%;
    max-width: 95vw;
    margin: auto 0 auto auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1rem 0 2rem 2rem;
    height: 300px;
  }

  .logo {
    width: 48px;
    height: 48px;
    min-width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.75rem;
    background: linear-gradient(135deg, #2530d8, #4f5bff);
    box-shadow: 0px 4px 10px rgba(37, 48, 216, 0.4);
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 480px;
  }

  .hero-image {
    width: 400px;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    opacity: 0.25;
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
  }

  @media (max-width: 768px) {
    .hero-inner {
      padding: 1.5rem 1.25rem 2rem;
    }

    .hero-content {
      flex: 1 1 auto;
      min-width: 0;
    }

    .hero-text {
      max-width: 100%;
    }
  }
`;
