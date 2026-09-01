const CENTS = 100;

export function convertToCents(value: string | number) {
  return Number(value) / CENTS;
}
