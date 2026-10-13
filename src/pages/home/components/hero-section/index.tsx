// Libs
import { IoSettingsSharp, IoTrendingUp } from 'react-icons/io5';

// Components
import { Flex, Typography } from '@components';

// Types
import type { HeroSectionProps } from './types';

// Styles
import { StyledHeroSection } from './styles';

export function HeroSection({ onOpenPreferences }: HeroSectionProps) {
  return (
    <StyledHeroSection>
      <div className="hero-inner">
        <Flex
          className="hero-content"
          direction="column"
          alignItems="flex-start"
          gap="1.5rem"
        >
          <div className="hero-header">
            <div className="logo">
              <IoTrendingUp size={24} color="#fff" />
            </div>

            <button
              type="button"
              className="settings-button"
              aria-label="Abrir preferências"
              onClick={onOpenPreferences}
            >
              <IoSettingsSharp size={22} color="#fff" />
            </button>
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
