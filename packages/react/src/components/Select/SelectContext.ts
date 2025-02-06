import { createContext, useContext } from 'react';
import { AnySelectPropsStrict } from './Select.types';

export const SelectContext = createContext<Pick<
  AnySelectPropsStrict,
  'hasError'
> | null>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (context === null) {
    throw new Error('useSelectContext must be used within a SelectContext');
  }
  return context;
};
