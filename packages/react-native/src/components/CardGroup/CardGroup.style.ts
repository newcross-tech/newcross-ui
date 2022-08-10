import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const cardGroupStyle = () => {
  const {
    CardGroupDividerBorderWidth,
    CardGroupDividerBorderColor,
    CardGroupBorderRadius,
    CardGroupShadowColor,
    CardGroupShadowElevation,
    CardGroupShadowOpacity,
    CardGroupShadowRadius,
  } = useTheme();

  return StyleSheet.create({
    disableShadow: {
      shadowOpacity: 0,
    },
    divider: {
      height: CardGroupDividerBorderWidth,
      backgroundColor: CardGroupDividerBorderColor,
    },
    container: {
      borderRadius: CardGroupBorderRadius,
      shadowColor: CardGroupShadowColor,
      elevation: CardGroupShadowElevation,
      shadowOpacity: CardGroupShadowOpacity,
      shadowRadius: CardGroupShadowRadius,
      overflow: 'hidden',
    },
  });
};

export default cardGroupStyle;
