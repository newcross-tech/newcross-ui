/**
 * Accepts a name of a person and returns an abbreviation of the name.
 * @param name
 * @returns string abbreviation of name.
 */

export const nameToAbbreviation = (name: string) => {
  const MAX_WORDS = 3;

  const abbreviation = name
    ?.trim()
    .split(' ')
    .filter((_, index) => index < MAX_WORDS)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return abbreviation;
};
