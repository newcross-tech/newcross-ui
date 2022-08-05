import useTheme from '../../hooks/useTheme';
import { StyleSheet } from 'react-native';
import { PillGroupOrientation, orientationValues } from './PillGroup.types';

const pillGroupStyle = (orientation: PillGroupOrientation) => {
  const theme = useTheme();

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
