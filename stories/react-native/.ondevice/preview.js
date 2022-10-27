import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { native } from '@newcross-ui/design-tokens';
import { ThemeProvider, Brand, BottomSheet } from '@newcross-ui/react-native';
import React from 'react';
import {
  BottomSheetActionType,
  getBottomSheetContent,
  useBottomSheetContext,
} from '../src/BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { ColorNeutralGrey300, ColorNeutralWhite } = native.healthforce;

const withThemeProvider = (Story) => {
  const { state, dispatch } = useBottomSheetContext();
  const BottomSheetContent = getBottomSheetContent(state.contentType);

  const closeBottomSheet = () =>
    dispatch({
      type: BottomSheetActionType.closeBottomSheet,
    });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider brand={Brand.healthforce}>
        <BottomSheet isOpen={state.isOpen} onClose={closeBottomSheet}>
          <BottomSheetContent
            onClose={closeBottomSheet}
            data={state.contentData}
          />
        </BottomSheet>
        <Story />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export const decorators = [withBackgrounds, withThemeProvider];
export const parameters = {
  backgrounds: [
    {
      name: 'white',
      value: ColorNeutralWhite,
    },
    {
      name: 'figma',
      value: ColorNeutralGrey300,
      default: true,
    },
  ],
};
