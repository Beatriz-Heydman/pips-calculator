export type CalculationSectionProps = {
  pipValue: string;
  pipQuantity: string;
  maxOperationValue: string;
  onPipValueChange: (value: string) => void;
  onPipQuantityChange: (value: string) => void;
  onMaxOperationValueChange: (value: string) => void;
  onCalculate: () => void;
};
