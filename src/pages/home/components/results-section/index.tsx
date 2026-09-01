// Libs
import { PiShieldCheckBold, PiTargetBold } from 'react-icons/pi';
import {
  IoAlertCircle,
  IoCheckmarkCircle,
  IoTrendingUp,
} from 'react-icons/io5';

// Components
import { Typography } from '@components';

// Types
import type { ResultsSectionProps } from './types';

// Styles
import { StyledResultsSection } from './styles';

export function ResultsSection({
  lotQuantityWithinLimit,
  operationValueWithinLimit,
  lotQuantityAboveLimit,
  operationValueAboveLimit,
}: ResultsSectionProps) {
  return (
    <StyledResultsSection>
      <div className="results-header">
        <PiTargetBold size={22} color="#1650d8" />
        <Typography color="#020414" fontSize="1.25rem" fontWeight="700">
          Resultados
        </Typography>
      </div>

      <div className="results-list">
        <div className="result-card success">
          <div className="marker" />

          <div className="card">
            <div className="card-header">
              <div className="icon-container">
                <PiShieldCheckBold size={20} color="#1a7d1a" />
              </div>

              <div className="card-title">
                <Typography color="#1a7d1a" fontWeight="600">
                  Maior lote dentro do limite
                </Typography>
                <Typography
                  color="#5c6270"
                  fontSize="0.85rem"
                  fontWeight="400"
                >
                  É o maior lote possível sem ultrapassar o valor informado.
                </Typography>
              </div>

              <div className="badge">
                <IoCheckmarkCircle size={14} color="#1a7d1a" />
                <Typography color="#1a7d1a" fontSize="0.75rem" fontWeight="600">
                  Dentro do limite
                </Typography>
              </div>
            </div>

            <div className="card-divider" />

            <div className="card-stats">
              <div className="stat">
                <Typography
                  color="#7c8192"
                  fontSize="0.85rem"
                  fontWeight="400"
                >
                  Lote
                </Typography>
                <Typography color="#1a7d1a" fontSize="1.5rem" fontWeight="700">
                  {lotQuantityWithinLimit}
                </Typography>
              </div>

              <div className="stat">
                <Typography
                  color="#7c8192"
                  fontSize="0.85rem"
                  fontWeight="400"
                >
                  Valor da operação
                </Typography>
                <Typography color="#020414" fontSize="1.5rem" fontWeight="700">
                  {operationValueWithinLimit}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="result-card warning">
          <div className="marker" />

          <div className="card">
            <div className="card-header">
              <div className="icon-container">
                <IoTrendingUp size={20} color="#c25b00" />
              </div>

              <div className="card-title">
                <Typography color="#c25b00" fontWeight="600">
                  Próximo lote acima do limite
                </Typography>
                <Typography
                  color="#5c6270"
                  fontSize="0.85rem"
                  fontWeight="400"
                >
                  É o menor lote que ultrapassa o valor informado.
                </Typography>
              </div>

              <div className="badge">
                <IoAlertCircle size={14} color="#c25b00" />
                <Typography color="#c25b00" fontSize="0.75rem" fontWeight="600">
                  Acima do limite
                </Typography>
              </div>
            </div>

            <div className="card-divider" />

            <div className="card-stats">
              <div className="stat">
                <Typography
                  color="#7c8192"
                  fontSize="0.85rem"
                  fontWeight="400"
                >
                  Lote
                </Typography>
                <Typography color="#c25b00" fontSize="1.5rem" fontWeight="700">
                  {lotQuantityAboveLimit}
                </Typography>
              </div>

              <div className="stat">
                <Typography
                  color="#7c8192"
                  fontSize="0.85rem"
                  fontWeight="400"
                >
                  Valor da operação
                </Typography>
                <Typography color="#020414" fontSize="1.5rem" fontWeight="700">
                  {operationValueAboveLimit}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledResultsSection>
  );
}
