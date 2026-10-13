// Libs
import type { BaseSyntheticEvent } from 'react';
import type { Control, FieldErrors } from 'react-hook-form';

export type CalculationFormValues = {
  pipValue: string;
  pipQuantity: string;
  maxOperationValue: string;
  accountBalance: string;
  percentagePerOperation: string;
  useAccountPercentage: boolean;
};

export type CalculationSectionProps = {
  control: Control<CalculationFormValues>;
  errors: FieldErrors<CalculationFormValues>;
  onSubmit: (event: BaseSyntheticEvent) => void;
};
