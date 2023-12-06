import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const cardGroupStyle = (direction: 'column' | 'row') => {
  const {
    CardGroupDividerBorderWidth,
    CardGroupDividerBorderColor,
    CardGroupBorderRadius,
    CardGroupShadowColor,
    CardGroupShadowElevation,
    CardGroupShadowOpacity,
    CardGroupShadowRadius,
  } = useTheme();

  const dividerBorder = direction === 'row' ? 'width' : 'height';
  return StyleSheet.create({
    disableShadow: {
      shadowOpacity: 0,
    },
    divider: {
      [dividerBorder]: CardGroupDividerBorderWidth,
      backgroundColor: CardGroupDividerBorderColor,
    },
    container: {
      borderRadius: CardGroupBorderRadius,
      shadowColor: CardGroupShadowColor,
      elevation: CardGroupShadowElevation,
      shadowOpacity: CardGroupShadowOpacity,
      shadowRadius: CardGroupShadowRadius,
      flexDirection: direction,
      overflow: 'hidden',
    },
  });
};

export default cardGroupStyle;
