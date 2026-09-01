// Componentes
import { CalculationSection } from "./components/calculation-section";
import { StyledHomeView } from "./styles";
import { Flex } from "../../components/flex";
// import { ResultsSection } from "./components/results-section";

export function HomeView() {
  return (
    <StyledHomeView>
      <Flex>
        <CalculationSection />
        {/* <ResultsSection /> */}
      </Flex>
      {/* <img
        src="public/assets/images/candlestick.png"
        alt="Imagem de fundo ilustrativa"
        className="background-image"
      /> */}
    </StyledHomeView>
  );
}
