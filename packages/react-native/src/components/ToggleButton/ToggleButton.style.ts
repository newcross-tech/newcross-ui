import { StyleSheet } from 'react-native';
import {
  ToggleButtonColors,
  getColorValues,
  getTextColorValues,
  getShadowValues,
  getInsetShadowValues,
} from './ToggleButton.types';
import useTheme from '../../hooks/useTheme';
import { ToggleButtonProps } from './ToggleButton';

const toggleStyle = ({ selected, fullWidth, color }: ToggleButtonProps) => {
  const theme = useTheme();

  const colorValues = getColorValues(theme, selected)[
    color as ToggleButtonColors
  ];

  const textColorValues = getTextColorValues(theme, selected)[
    color as ToggleButtonColors
  ];
  const shadowValues = getShadowValues(theme, selected);
  const insetshadowValues =
    getInsetShadowValues(theme)[color as ToggleButtonColors];

  return StyleSheet.create({
    container: {
      position: 'relative',
      flexDirection: 'row',
      padding: theme.ToggleButtonPadding,
      borderRadius: theme.ToggleButtonBorderRadius,
      borderWidth: theme.ToggleButtonBorderWidth,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: fullWidth ? 'stretch' : 'flex-start',
      overflow: 'hidden',
      ...shadowValues,
      ...colorValues,
    },
    text: { lineHeight: theme.ToggleButtonLineHeight, ...textColorValues },
    icon: { marginRight: theme.ToggleButtonMargin, ...textColorValues },
    insetShadow: {
      position: 'absolute',
      width: '100%',
      backgroundColor: theme.ToggleButtonShadowColor,
      top: -theme.ToggleButtonShadowPosition,
      height: theme.ToggleButtonShadowPosition,
      shadowColor: theme.ToggleButtonShadowColor,
      shadowOpacity: theme.ToggleButtonShadowOpacity,
      shadowOffset: {
        height: theme.ToggleButtonShadowOffsetHeight,
        width: theme.ToggleButtonShadowOffsetWidth,
      },
      elevation: theme.ToggleButtonShadowElevation,
      ...insetshadowValues,
    },
  });
};

export default toggleStyle;
