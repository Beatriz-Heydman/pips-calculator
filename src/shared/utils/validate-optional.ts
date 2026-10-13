export function validateOptional(validator: (value: string) => string | true) {
  return (value: string) => (value.trim() === '' ? true : validator(value));
}
