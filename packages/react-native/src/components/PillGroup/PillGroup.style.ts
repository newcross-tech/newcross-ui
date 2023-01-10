import { StyleSheet } from 'react-native';
import { PillGroupOrientation, orientationValues } from './PillGroup.types';

const pillGroupStyle = (
  orientation: PillGroupOrientation,
  wrapPills: boolean
) => {
  return StyleSheet.create({
    pillGroupContainer: {
      flexBasis: 'auto',
      alignItems: 'stretch',
      ...(wrapPills && { flexWrap: 'wrap' }),
      ...orientationValues[orientation],
    },
  });
};

export default pillGroupStyle;
