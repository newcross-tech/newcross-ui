import { ViewStyle } from 'react-native';

export enum ToggleButtonGroupOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export const orientationValues: Record<
  ToggleButtonGroupOrientation,
  ViewStyle
> = {
  [ToggleButtonGroupOrientation.horizontal]: {
    flexDirection: 'row',
  },
  [ToggleButtonGroupOrientation.vertical]: {
    flexDirection: 'column',
    height: '100%',
  },
};
