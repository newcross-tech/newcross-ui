import { ReactElement } from 'react';

export const isSingleChar = (
  badgeContent: string | number | ReactElement | undefined
): boolean => {
  if (typeof badgeContent === 'number' || typeof badgeContent === 'string')
    return badgeContent.toString().length === 1;
  return false;
};
