import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { native } from '@newcross-ui/design-tokens';
import { ThemeProvider, Brand, BottomSheet } from '@newcross-ui/react-native';
import React from 'react';
import {
  BottomSheetActionType,
  getBottomSheetContent,
  useBottomSheetContext,
} from '../src/BottomSheet';

const { ColorBaseGrey300, ColorBaseWhite100 } = native.healthforce;

const withThemeProvider = (Story) => {
  const { state, dispatch } = useBottomSheetContext();
  const BottomSheetContent = getBottomSheetContent(state.contentType);

  const closeBottomSheet = () =>
    dispatch({
      type: BottomSheetActionType.closeBottomSheet,
    });
  return (
    <ThemeProvider brand={Brand.healthforce}>
      <BottomSheet isOpen={state.isOpen} onBackdropPress={closeBottomSheet}>
        <BottomSheetContent
          onClose={closeBottomSheet}
          data={state.contentData}
        />
      </BottomSheet>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withBackgrounds, withThemeProvider];
export const parameters = {
  backgrounds: [
    {
      name: 'white',
      value: ColorBaseWhite100,
    },
    {
      name: 'figma',
      value: ColorBaseGrey300,
      default: true,
    },
  ],
};
