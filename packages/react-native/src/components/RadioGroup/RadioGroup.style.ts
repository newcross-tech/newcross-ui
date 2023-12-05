import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const radioGroupStyle = () => {
  const {
    CardGroupBorderRadius,
    CardGroupShadowColor,
    CardGroupShadowElevation,
    CardGroupShadowOpacity,
    CardGroupShadowRadius,
    CardGroupDividerBorderColor,
    CardGroupDividerBorderWidth,
  } = useTheme();

  return StyleSheet.create({
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

export default radioGroupStyle;
