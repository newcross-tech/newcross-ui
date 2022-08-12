import { StyleSheet } from 'react-native';
import { PillGroupOrientation, orientationValues } from './PillGroup.types';

const pillGroupStyle = (orientation: PillGroupOrientation) => {
  return StyleSheet.create({
    pillGroupContainer: {
      flexBasis: 'auto',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      ...orientationValues[orientation],
    },
  });
};

export default pillGroupStyle;
