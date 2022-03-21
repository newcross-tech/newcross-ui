import React from 'react';
import { useFonts } from 'expo-font';
import StorybookUIRoot from './.ondevice/Storybook';

export default function App() {
  const [loaded] = useFonts({
    poppins: require('./assets/fonts/poppins/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return <StorybookUIRoot />;
}
