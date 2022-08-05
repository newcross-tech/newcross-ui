import { ViewStyle } from 'react-native';

export enum PillGroupOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export const orientationValues: Record<PillGroupOrientation, ViewStyle> = {
  [PillGroupOrientation.horizontal]: {
    flexDirection: 'row',
    width: '100%',
  },
  [PillGroupOrientation.vertical]: {
    flexDirection: 'column',
    height: '100%',
    alignContent: 'flex-start',
  },
};
