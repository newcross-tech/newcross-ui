/**
 * value derives as string into rem format from Halo
 * this snippet converts rem to number, multiplies then covert back to string
 * @param value
 * @param multiplier
 * @returns conversion of rem to number adjusted to multiplier
 */
export const getAdjustedHaloValue = (multiplier: number, value?: string) => {
  if (!value) {
    return `NaN`;
  }
  //converts e.g. '1rem' - string into 1 - number to perform adjustment
  const heightValue: number = +value.slice(0, -3);

  return `${heightValue * multiplier}rem`;
};
