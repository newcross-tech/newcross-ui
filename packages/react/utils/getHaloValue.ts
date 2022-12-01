/**
 * value derives as string into rem format from Halo
 * this snippet converts rem to number
 * @param value
 * @returns conversion of rem to number
 */
export const getHaloValue = (value?: string) => {
  if (!value) {
    return `NaN`;
  }
  //converts e.g. '1rem' - string into 1 - number
  return +value.slice(0, -3);
};
