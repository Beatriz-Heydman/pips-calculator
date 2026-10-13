export const REQUIRED_FIELD_MESSAGE = 'Preencha esse campo.';
export const INVALID_VALUE_MESSAGE = 'Preencha o campo com um valor válido.';

export function validateField(value: string) {
  if (value.trim() === '') {
    return REQUIRED_FIELD_MESSAGE;
  }

  if (Number(value) <= 0) {
    return INVALID_VALUE_MESSAGE;
  }

  return true;
}
