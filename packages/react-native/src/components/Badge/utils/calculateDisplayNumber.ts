export const calculateDisplayNumber = (number: number, maxNumber: number) =>
  number > maxNumber ? `${maxNumber}+` : number;
