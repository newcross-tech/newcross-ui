import { ReactNode } from 'react';

export const getDividerPosition = (
  tabIndex: number,
  currentIndex: number,
  tabs: ReactNode[]
) => {
  return !(
    tabIndex === currentIndex ||
    tabIndex === currentIndex - 1 ||
    tabs.length - 1 === tabIndex
  );
};
