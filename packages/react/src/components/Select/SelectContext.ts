import { createContext, useContext } from 'react';

export type SelectContextValue = {
  id?: string;
};

export const SelectContext = createContext<SelectContextValue | null>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (context === null) {
    throw new Error('useSelectContext must be used within a SelectContext');
  }
  return context;
};
