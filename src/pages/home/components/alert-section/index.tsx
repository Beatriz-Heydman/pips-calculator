// Libs
import { IoInformationCircle } from 'react-icons/io5';
import { PiCalculatorLight } from 'react-icons/pi';

// Components
import { Typography } from '@components';

// Styles
import { StyledAlertSection } from './styles';

export function AlertSection() {
  return (
    <StyledAlertSection>
      <div className="message">
        <div className="icon-container">
          <IoInformationCircle size={20} color="#fff" />
        </div>

        <Typography color="#3c4257" fontSize="0.9rem" fontWeight="400">
          Os cálculos são aproximados e podem variar de acordo com o par de
          moedas, o valor do pip e a corretora utilizada.
        </Typography>

        <div className="decorative-icon">
          <PiCalculatorLight size={96} color="#a9b7e6" />
        </div>
      </div>
    </StyledAlertSection>
  );
}
