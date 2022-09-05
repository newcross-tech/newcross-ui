import React from 'react';
import { ContextValue } from '../reducer/bottomSheetReducer';

const BottomSheetContext = React.createContext<ContextValue>({});

export function useBottomSheetContext() {
  return React.useContext(BottomSheetContext);
}

export default BottomSheetContext;
