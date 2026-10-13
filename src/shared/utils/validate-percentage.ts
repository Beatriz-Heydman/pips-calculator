// Utils
import { INVALID_VALUE_MESSAGE, validateField } from './validate-field';

export function validatePercentage(value: string) {
  const result = validateField(value);

  if (result !== true) {
    return result;
  }

  if (Number(value) > 100) {
    return INVALID_VALUE_MESSAGE;
  }

  return true;
}
