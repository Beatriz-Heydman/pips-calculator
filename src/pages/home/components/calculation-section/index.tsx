// Libs
import { PiCurrencyDollarBold, PiCalculatorLight } from 'react-icons/pi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { LuWallet } from 'react-icons/lu';

//Components
import { Button, Flex, Input, Separator, Typography } from '@components';

// Types
import type { CalculationSectionProps } from './types';

// Styles
import { StyledCalculationSection } from './styles';

// Utils
import { formatDollar } from '@shared';

export function CalculationSection({
  pipValue,
  pipQuantity,
  maxOperationValue,
  onPipValueChange,
  onPipQuantityChange,
  onMaxOperationValueChange,
  onCalculate,
}: CalculationSectionProps) {
  return (
    <StyledCalculationSection>
      <Flex
        justifyContent="center"
        alignItems="flex-end"
        gap="2rem"
        flexWrap="wrap"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onCalculate();
          }
        }}
      >
        <Flex gap="2rem" flexWrap="wrap">
          <Input
            placeholder="Digite o valor"
            label={
              <Flex>
                <Typography color="#020414" fontWeight="500">
                  Valor do pip (USD)
                </Typography>
                ?
              </Flex>
            }
            leftSlot={<PiCurrencyDollarBold size={18} color="#1650d8" />}
            rightSlot="USD"
            value={formatDollar(pipValue)}
            onChange={(event) => {
              const unformattedValue = event.target.value.replace(/\D/g, '');

              onPipValueChange(unformattedValue);
            }}
          />

          <Separator />

          <Input
            placeholder="Digite a quantidade"
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
            value={pipQuantity}
            onChange={(event) => {
              const unformattedValue = event.target.value.replace(/\D/g, '');

              onPipQuantityChange(unformattedValue);
            }}
          />

          <Separator />

          <Input
            placeholder="Digite o valor máximo"
            label={
              <Flex>
                <Typography color="#020414" fontWeight="500">
                  Valor máxima da operação
                </Typography>
                ?
              </Flex>
            }
            leftSlot={<LuWallet size={20} color="#1650d8" />}
            rightSlot="USD"
            value={formatDollar(maxOperationValue)}
            onChange={(event) => {
              const unformattedValue = event.target.value.replace(/\D/g, '');

              onMaxOperationValueChange(unformattedValue);
            }}
          />
        </Flex>

        <Button
          icon={<PiCalculatorLight size={22} />}
          label="Calcular"
          onClick={onCalculate}
        />
      </Flex>
    </StyledCalculationSection>
  );
}
