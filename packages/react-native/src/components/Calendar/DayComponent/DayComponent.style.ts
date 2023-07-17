import { StyleSheet } from 'react-native';
import useTheme from '../../../hooks/useTheme';

const {
  ColorBaseWhite100,
  SpacingBase4,
  SpacingBase32,
  BorderBaseRadiusRounded,
} = useTheme();

const dayComponentStyles = StyleSheet.create({
  dayStyle: {
    position: 'relative',
    height: SpacingBase32,
    width: SpacingBase32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderBaseRadiusRounded,
  },
  dayIcon: {
    backgroundColor: ColorBaseWhite100,
    borderRadius: BorderBaseRadiusRounded,
    position: 'absolute',
    top: -SpacingBase4,
    right: -SpacingBase4,
  },
  currentDayIcon: {
    position: 'absolute',
    bottom: -SpacingBase4,
  },
});

export default dayComponentStyles;
