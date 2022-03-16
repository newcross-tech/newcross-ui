import { Platform } from 'style-dictionary';

export const throwSizeError = (
  name: string,
  value: string,
  unitType: string
) => {
  throw `Invalid Number: '${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`;
};

export const getBasePxFontSize = (options: Platform | undefined) => {
  return (options && options.basePxFontSize) || 16;
};
