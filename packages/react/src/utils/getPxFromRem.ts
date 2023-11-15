import { getHaloValue } from './getHaloValue';

/**
 * this snippet converts rem to px
 * e.g. '1rem' - string into 16 - number
 * @param value
 * @returns conversion of rem to px
 */
export const getPxFromRem = (value: string) => {
  return +getHaloValue(value) * 16;
};
