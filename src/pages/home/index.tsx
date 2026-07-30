// Componentes
import { CalculationSection } from "./components/calculation-section";
import { Flex } from "../../components/flex";
import { Header } from "../../components/header";

export function HomeView() {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Header />
      <CalculationSection />
    </Flex>
  );
}
