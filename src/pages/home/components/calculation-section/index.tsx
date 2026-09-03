// Libs
import { Controller } from 'react-hook-form';
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

const REQUIRED_FIELD_MESSAGE = 'Preencha esse campo.';
const INVALID_VALUE_MESSAGE = 'Preencha o campo com um valor válido.';

function validateField(value: string) {
  if (value.trim() === '') {
    return REQUIRED_FIELD_MESSAGE;
  }

  if (Number(value) <= 0) {
    return INVALID_VALUE_MESSAGE;
  }

  return true;
}

export function CalculationSection({
  control,
  errors,
  onSubmit,
}: CalculationSectionProps) {
  return (
    <StyledCalculationSection onSubmit={onSubmit}>
      <Flex
        className="calculation-fields"
        justifyContent="center"
        alignItems="flex-end"
        gap="2rem"
        flexWrap="wrap"
      >
        <Flex className="calculation-inputs" gap="2rem" flexWrap="wrap">
          <Controller
            name="pipValue"
            control={control}
            rules={{ validate: validateField }}
            render={({ field }) => (
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
                value={formatDollar(field.value)}
                errorMessage={errors.pipValue?.message}
                onChange={(event) => {
                  const unformattedValue = event.target.value.replace(
                    /\D/g,
                    '',
                  );

                  field.onChange(unformattedValue);
                }}
              />
            )}
          />

          <Separator />

          <Controller
            name="pipQuantity"
            control={control}
            rules={{ validate: validateField }}
            render={({ field }) => (
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
                value={field.value}
                errorMessage={errors.pipQuantity?.message}
                onChange={(event) => {
                  const unformattedValue = event.target.value.replace(
                    /\D/g,
                    '',
                  );

                  field.onChange(unformattedValue);
                }}
              />
            )}
          />

          <Separator />

          <Controller
            name="maxOperationValue"
            control={control}
            rules={{ validate: validateField }}
            render={({ field }) => (
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
                value={formatDollar(field.value)}
                errorMessage={errors.maxOperationValue?.message}
                onChange={(event) => {
                  const unformattedValue = event.target.value.replace(
                    /\D/g,
                    '',
                  );

                  field.onChange(unformattedValue);
                }}
              />
            )}
          />
        </Flex>

        <Button icon={<PiCalculatorLight size={22} />} label="Calcular" />
      </Flex>
    </StyledCalculationSection>
  );
}
