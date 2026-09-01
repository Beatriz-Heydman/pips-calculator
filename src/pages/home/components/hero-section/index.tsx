// Libs
import { IoTrendingUp } from 'react-icons/io5';

// Components
import { Flex, Typography } from '@components';

// Styles
import { StyledHeroSection } from './styles';

export function HeroSection() {
  return (
    <StyledHeroSection>
      <div className="hero-inner">
        <Flex
          className="hero-content"
          direction="column"
          alignItems="flex-start"
          gap="1.5rem"
        >
          <div className="logo">
            <IoTrendingUp size={24} color="#fff" />
          </div>

          <div className="hero-text">
            <Typography
              fontSize="clamp(1rem, calc(7.5vw - 4px), 2.25rem)"
              fontWeight="700"
              lineHeight="1.2"
            >
              Calculadora de Lote Forex
            </Typography>

            <Typography fontSize="1rem" fontWeight="400" color="#c7cbe8">
              Descubra o tamanho ideal do lote com base na quantidade de pips e
              no valor máximo da operação.
            </Typography>
          </div>
        </Flex>

        <img
          className="hero-image"
          src="/assets/images/candlestick.png"
          alt="Ilustração de gráfico de velas com ícones de moedas"
        />
      </div>
    </StyledHeroSection>
  );
}
