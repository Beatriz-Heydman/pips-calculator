// Libs
import { PiCurrencyDollarBold, PiCalculatorLight } from "react-icons/pi";
import { IoAnalyticsSharp } from "react-icons/io5";

//Components
import { Flex } from "../../../../components/flex";
import { Input } from "../../../../components/input";
import { Typography } from "../../../../components/typography";

// Styles
import { StyledCalculationSection } from "./styles";
import { Button } from "../../../../components/button";

export function CalculationSection() {
  return (
    <StyledCalculationSection>
      <Flex justifyContent="center" alignItems="flex-end" gap="2rem">
        <Flex gap="2rem">
          <Input
            label={
              <Flex>
                <Typography color="#020414" fontWeight="500">
                  Quantidade de pips
                </Typography>
                ?
              </Flex>
            }
            leftSlot={<IoAnalyticsSharp size={18} color="#1650d8" />}
            rightSlot="Pips"
            value="20"
          />

          <Input
            label={
              <Flex>
                <Typography color="#020414" fontWeight="500">
                  Valor máxima da operação
                </Typography>
                ?
              </Flex>
            }
            leftSlot={<PiCurrencyDollarBold size={18} color="#1650d8" />}
            rightSlot="USD"
            value="50"
          />
        </Flex>

        <Button
          icon={<PiCalculatorLight size={22} />}
          label="Calcular"
          onClick={() => {
            console.log("Calculando...");
          }}
        />
      </Flex>
    </StyledCalculationSection>
  );
}
