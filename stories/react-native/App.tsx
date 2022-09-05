import React, { useReducer } from 'react';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import StorybookUIRoot from './.ondevice/Storybook';
import {
  BottomSheetContext,
  bottomSheetReducer,
  initialState,
} from './src/BottomSheet';

export default function App() {
  const [state, dispatch] = useReducer(bottomSheetReducer, initialState);
  const providerState = { state, dispatch };

  const [loaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
    'Poppins-ExtraBold': Poppins_800ExtraBold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <BottomSheetContext.Provider value={providerState}>
      <StorybookUIRoot />
    </BottomSheetContext.Provider>
  );
}
