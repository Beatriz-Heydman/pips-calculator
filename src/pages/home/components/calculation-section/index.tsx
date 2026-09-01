// Libs
import { useState } from 'react';
import { PiCurrencyDollarBold, PiCalculatorLight } from 'react-icons/pi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { LuWallet } from 'react-icons/lu';

//Components
import { Button, Flex, Input, Separator, Typography } from '@components';

// Styles
import { StyledCalculationSection } from './styles';

// Utils
import { formatDollar } from '@shared';

export function CalculationSection() {
  const [pipValue, setPipValue] = useState<string>('');
  const [pipQuantity, setPipQuantity] = useState<string>('');
  const [maxOperationValue, setMaxOperationValue] = useState<string>('');

  // Quanto vale 1 lote
  const lotValue = Number(pipValue) * Number(pipQuantity);

  // Quantidade de lotes dentro do limite
  const lotQuantityWithinLimit = Number(maxOperationValue) / Number(lotValue);

  // Valor da quantidade de lote dentro do limite formatado
  const lotQuantityWithinLimitFormatted =
    Math.floor(Number(lotQuantityWithinLimit) * 100) / 100;

  // Valor da operação até o limite estabelecido
  const limitOperationValue =
    Number(lotQuantityWithinLimitFormatted) * Number(lotValue);

  // Valor da operação até o limite estabelecido formatado
  const limitOperationValueFormatted = formatDollar(
    limitOperationValue.toFixed(),
  );

  // valor incrementado para resultados acima do limite
  const increasedValue = 0.01;

  // Quantidade de lotes acima do limite
  const lotQuantityAboveLimit =
    lotQuantityWithinLimitFormatted + increasedValue;

  // Quantidade de lotes acima do limite formatado
  const lotQuantityAboveLimitFormatted = lotQuantityAboveLimit.toFixed(2);

  // Valor da operação acima do limite
  const aboveOperationValue =
    Number(lotValue) * increasedValue + limitOperationValue;

  // Valor da operação acima do limite formatado
  const aboveOperationValueFormatted = formatDollar(
    aboveOperationValue.toFixed(),
  );

  // Valor que excedeu a operação
  const valueOperationExceedsLimit = aboveOperationValue - limitOperationValue;

  // Valor que excedeu a operação formatado
  const valueOperationExceedsLimitFormatted = formatDollar(
    valueOperationExceedsLimit.toFixed(),
  );

  return (
    <StyledCalculationSection>
      <Flex justifyContent="center" alignItems="flex-end" gap="2rem">
        <Flex gap="2rem">
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

              setPipValue(unformattedValue);
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
              setPipQuantity(event.target.value);
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

              setMaxOperationValue(unformattedValue);
            }}
          />
        </Flex>

        <Button
          icon={<PiCalculatorLight size={22} />}
          label="Calcular"
          onClick={() => {}}
        />
      </Flex>

      <Flex
        justifyContent="space-around"
        alignItems="flex-start"
        gap="2rem"
        style={{ width: '100%' }}
      >
        <Typography color="#0d4300" fontWeight="500">
          Maior lote dentro do limite
          <br />
          <br />
          Lote: {lotQuantityWithinLimitFormatted.toFixed(2)}
          <br />
          Valor da operação até o limite de {formatDollar(
            maxOperationValue,
          )}: {limitOperationValueFormatted}
        </Typography>

        <Typography color="#4b0000" fontWeight="500">
          Maior lote acima do limite
          <br />
          <br />
          Lote: {lotQuantityAboveLimitFormatted}
          <br />
          Valor da operação ultrapassa o limite em{' '}
          {formatDollar(valueOperationExceedsLimitFormatted)}:{' '}
          {aboveOperationValueFormatted}
        </Typography>
      </Flex>
    </StyledCalculationSection>
  );
}
