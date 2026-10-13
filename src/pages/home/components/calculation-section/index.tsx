// Libs
import { Controller, useWatch } from 'react-hook-form';
import {
  PiBankBold,
  PiCurrencyDollarBold,
  PiCalculatorLight,
} from 'react-icons/pi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { LuPercent, LuWallet } from 'react-icons/lu';

//Components
import {
  Button,
  Flex,
  Input,
  Separator,
  Switch,
  Typography,
} from '@components';

// Types
import type { CalculationSectionProps } from './types';

// Styles
import { StyledCalculationSection } from './styles';

// Utils
import { formatDollar, validateField, validatePercentage } from '@shared';

export function CalculationSection({
  control,
  errors,
  onSubmit,
}: CalculationSectionProps) {
  const useAccountPercentage = useWatch({
    control,
    name: 'useAccountPercentage',
  });

  return (
    <StyledCalculationSection onSubmit={onSubmit}>
      <Controller
        name="useAccountPercentage"
        control={control}
        render={({ field }) => (
          <Switch
            label="Calcular com base no percentual da conta"
            checked={field.value}
            onChange={(event) => field.onChange(event.target.checked)}
          />
        )}
      />

      <Flex
        className={`calculation-fields ${useAccountPercentage ? 'percentage-mode' : ''}`}
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
                inputMode="numeric"
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
                inputMode="numeric"
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

          {useAccountPercentage ? (
            <>
              <Controller
                name="accountBalance"
                control={control}
                rules={{ validate: validateField }}
                render={({ field }) => (
                  <Input
                    inputMode="numeric"
                    placeholder="Digite o saldo"
                    label={
                      <Flex>
                        <Typography color="#020414" fontWeight="500">
                          Saldo da conta
                        </Typography>
                        ?
                      </Flex>
                    }
                    leftSlot={<PiBankBold size={18} color="#1650d8" />}
                    rightSlot="USD"
                    value={formatDollar(field.value)}
                    errorMessage={errors.accountBalance?.message}
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
                name="percentagePerOperation"
                control={control}
                rules={{ validate: validatePercentage }}
                render={({ field }) => (
                  <Input
                    inputMode="numeric"
                    placeholder="Digite o percentual"
                    label={
                      <Flex>
                        <Typography color="#020414" fontWeight="500">
                          Percentual por operação
                        </Typography>
                        ?
                      </Flex>
                    }
                    leftSlot={<LuPercent size={18} color="#1650d8" />}
                    rightSlot="%"
                    value={field.value}
                    errorMessage={errors.percentagePerOperation?.message}
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
            </>
          ) : (
            <Controller
              name="maxOperationValue"
              control={control}
              rules={{ validate: validateField }}
              render={({ field }) => (
                <Input
                  inputMode="numeric"
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
          )}
        </Flex>

        <Button icon={<PiCalculatorLight size={22} />} label="Calcular" />
      </Flex>
    </StyledCalculationSection>
  );
}
