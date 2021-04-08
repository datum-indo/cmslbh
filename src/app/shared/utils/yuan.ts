export function yuan(value: number | string, digits: number = 2): string {
  if (typeof value === 'number') {
    value = value.toFixed(digits);
  }
  return `&yen ${value}`;
}