// Libs
import { useState } from 'react';

// Componentes
import { HeroSection } from './components/hero-section';
import { CalculationSection } from './components/calculation-section';
import { ResultsSection } from './components/results-section';
import { AlertSection } from './components/alert-section';
import { StyledHomeView } from './styles';

// Types
import type { ResultsSectionProps } from './components/results-section/types';

// Utils
import { formatDollar } from '@shared';

const REQUIRED_FIELD_MESSAGE = 'Preencha esse campo.';
const INVALID_VALUE_MESSAGE = 'Preencha o campo com um valor válido.';

function getFieldError(value: string): string | null {
  if (value.trim() === '') {
    return REQUIRED_FIELD_MESSAGE;
  }

  if (Number(value) <= 0) {
    return INVALID_VALUE_MESSAGE;
  }

  return null;
}

export function HomeView() {
  const [pipValue, setPipValue] = useState<string>('100');
  const [pipQuantity, setPipQuantity] = useState<string>('');
  const [maxOperationValue, setMaxOperationValue] = useState<string>('');
  const [results, setResults] = useState<ResultsSectionProps | null>(null);
  const [pipValueError, setPipValueError] = useState<string | null>(null);
  const [pipQuantityError, setPipQuantityError] = useState<string | null>(
    null,
  );
  const [maxOperationValueError, setMaxOperationValueError] = useState<
    string | null
  >(null);

  function handleCalculate() {
    const nextPipValueError = getFieldError(pipValue);
    const nextPipQuantityError = getFieldError(pipQuantity);
    const nextMaxOperationValueError = getFieldError(maxOperationValue);

    setPipValueError(nextPipValueError);
    setPipQuantityError(nextPipQuantityError);
    setMaxOperationValueError(nextMaxOperationValueError);

    if (
      nextPipValueError ||
      nextPipQuantityError ||
      nextMaxOperationValueError
    ) {
      setResults(null);

      return;
    }

    // Quanto vale 1 lote
    const lotValue = Number(pipValue) * Number(pipQuantity);

    // Quantidade de lotes dentro do limite
    const lotQuantityWithinLimit =
      Number(maxOperationValue) / Number(lotValue);

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
      <HeroSection />

      <CalculationSection
        pipValue={pipValue}
        pipQuantity={pipQuantity}
        maxOperationValue={maxOperationValue}
        onPipValueChange={setPipValue}
        onPipQuantityChange={setPipQuantity}
        onMaxOperationValueChange={setMaxOperationValue}
        onCalculate={handleCalculate}
        pipValueError={pipValueError}
        pipQuantityError={pipQuantityError}
        maxOperationValueError={maxOperationValueError}
      />

      {results && (
        <>
          <ResultsSection {...results} />
          <AlertSection />
        </>
      )}
    </StyledHomeView>
  );
}
