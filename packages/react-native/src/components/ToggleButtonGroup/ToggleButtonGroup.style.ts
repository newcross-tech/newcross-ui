import { StyleSheet } from 'react-native';
import {
  ToggleButtonGroupOrientation,
  orientationValues,
} from './ToggleButtonGroup.types';

const toggleButtonGroupStyle = (orientation: ToggleButtonGroupOrientation) => {
  return StyleSheet.create({
    container: {
      alignItems: 'stretch',
      ...orientationValues[orientation],
    },
  });
};

export default toggleButtonGroupStyle;
