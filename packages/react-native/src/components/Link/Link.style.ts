import { StyleSheet, ViewStyle } from 'react-native';
import { Mode } from '../../types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export const pressedLinkStyle = (
  pressed: boolean,
  currentStyle: ViewStyle,
  theme: ThemeDesignTokens
) => [currentStyle, { opacity: pressed ? theme.LinkPressedOpacity : 1 }];

const linkStyle = (theme: ThemeDesignTokens, mode: Mode) => {
  const { LinkPadding, LinkMargin, LinkColor, LinkModeDarkColor } = theme;

  return StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
    },
    linkContent: {
      paddingVertical: LinkPadding,
      flexDirection: 'row',
      alignItems: 'center',
    },
    linkText: {
      marginRight: LinkMargin,
      textDecorationLine: 'underline',
      color: mode === Mode.dark ? LinkModeDarkColor : LinkColor,
    },
    linkIcon: {
      color: mode === Mode.dark ? LinkModeDarkColor : LinkColor,
    },
  });
};

export default linkStyle;
