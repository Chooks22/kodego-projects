function pad(number: number) {
  return number.toString().padStart(2, '0');
}

export function getFormattedDate(date: Date): string {
  return `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()}`;
}
