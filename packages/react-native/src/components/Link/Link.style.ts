import { StyleSheet, ViewStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export const pressedLinkStyle = (
  pressed: boolean,
  currentStyle: ViewStyle,
  theme: ThemeDesignTokens
) => [currentStyle, { opacity: pressed ? theme.LinkPressedOpacity : 1 }];

const linkStyle = (theme: ThemeDesignTokens) => {
  const { LinkPadding, LinkMargin, LinkColor } = theme;

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
      color: LinkColor,
    },
    linkIcon: {
      color: LinkColor,
    },
  });
};

export default linkStyle;
