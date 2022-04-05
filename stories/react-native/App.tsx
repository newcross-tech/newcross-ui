import React from 'react';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import StorybookUIRoot from './.ondevice/Storybook';

export default function App() {
  const [loaded] = useFonts({
    poppinsRegular: Poppins_400Regular,
    poppinsSemiBold: Poppins_600SemiBold,
    poppinsBold: Poppins_700Bold,
    poppinsExtraBold: Poppins_800ExtraBold,
  });

  if (!loaded) {
    return null;
  }

  return <StorybookUIRoot />;
}
