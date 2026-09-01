// Utils
import { convertToCents } from "./convert-to-cents";

export function formatDollar(value: string) {
  const cleanedValue = value.replace(/[^0-9]/g, "");

  if (cleanedValue === "") {
    return "";
  }

  const numericValue = convertToCents(cleanedValue);

  return numericValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
