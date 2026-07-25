import { CalculationContainer } from "./components/calculation-container";
import { Flex } from "../../components/flex";
import { Header } from "../../components/header";

export function HomeView() {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Header />
      <CalculationContainer />
    </Flex>
  );
}
