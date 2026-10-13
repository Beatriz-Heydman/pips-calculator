// Libs
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

// Componentes
import { HeroSection } from './components/hero-section';
import { CalculationSection } from './components/calculation-section';
import { ResultsSection } from './components/results-section';
import { AlertSection } from './components/alert-section';
import { PreferencesModal } from './components/preferences-modal';
import { StyledHomeView } from './styles';

// Types
import type { ResultsSectionProps } from './components/results-section/types';
import type { CalculationFormValues } from './components/calculation-section/types';
import type { Preferences } from '@shared';

// Utils
import { formatDollar, loadPreferences, savePreferences } from '@shared';

export function HomeView() {
  const [preferences, setPreferences] = useState(loadPreferences);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const { control, handleSubmit, formState, setValue } =
    useForm<CalculationFormValues>({
      defaultValues: {
        pipValue: preferences.pipValue,
        pipQuantity: '',
        maxOperationValue: preferences.operationRisk,
        accountBalance: preferences.accountBalance,
        percentagePerOperation: preferences.percentagePerOperation,
        useAccountPercentage: preferences.useAccountPercentage,
      },
    });
  const [results, setResults] = useState<ResultsSectionProps | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (results) {
      resultsRef.current?.focus({ preventScroll: true });
      resultsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [results]);

  function handleSavePreferences(newPreferences: Preferences) {
    savePreferences(newPreferences);
    setPreferences(newPreferences);

    setValue('pipValue', newPreferences.pipValue);
    setValue('maxOperationValue', newPreferences.operationRisk);
    setValue('accountBalance', newPreferences.accountBalance);
    setValue('percentagePerOperation', newPreferences.percentagePerOperation);
    setValue('useAccountPercentage', newPreferences.useAccountPercentage);

    setIsPreferencesOpen(false);
  }

  function onSubmit(values: CalculationFormValues) {
    // Quanto vale 1 lote
    const lotValue = Number(values.pipValue) * Number(values.pipQuantity);

    // Valor máximo da operação: percentual do saldo da conta ou valor informado
    const maxOperationValue = values.useAccountPercentage
      ? (Number(values.accountBalance) *
          Number(values.percentagePerOperation)) /
        100
      : Number(values.maxOperationValue);

    // Quantidade de lotes dentro do limite
    const lotQuantityWithinLimit = maxOperationValue / Number(lotValue);

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

    setResults({
      lotQuantityWithinLimit: lotQuantityWithinLimitFormatted.toFixed(2),
      operationValueWithinLimit: limitOperationValueFormatted,
      lotQuantityAboveLimit: lotQuantityAboveLimitFormatted,
      operationValueAboveLimit: aboveOperationValueFormatted,
    });
  }

  return (
    <StyledHomeView>
      <HeroSection onOpenPreferences={() => setIsPreferencesOpen(true)} />

      <CalculationSection
        control={control}
        errors={formState.errors}
        onSubmit={handleSubmit(onSubmit)}
      />

      {results && (
        <>
          <ResultsSection ref={resultsRef} {...results} />
          <AlertSection />
        </>
      )}

      {isPreferencesOpen && (
        <PreferencesModal
          preferences={preferences}
          onSave={handleSavePreferences}
          onClose={() => setIsPreferencesOpen(false)}
        />
      )}
    </StyledHomeView>
  );
}
