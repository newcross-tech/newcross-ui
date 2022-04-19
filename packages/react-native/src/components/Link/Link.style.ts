import { StyleSheet, ViewStyle } from 'react-native';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { LinkProps } from './Link';
import { getTextSizeValues, LinkSizes } from './Link.types';

export const pressedLinkStyle = (
  pressed: boolean,
  currentStyle: ViewStyle,
  theme: ThemeDesignTokens
) => [currentStyle, { opacity: pressed ? theme.LinkPressedOpacity : 1 }];

const linkStyle = (theme: ThemeDesignTokens, { size }: LinkProps) => {
  const textSizeValues = getTextSizeValues(theme);

  const { LinkPadding, LinkMargin, LinkTextFontFamily, LinkColor } = theme;

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
      fontFamily: LinkTextFontFamily,
      ...textSizeValues[size as LinkSizes],
    },
    linkIcon: {
      color: LinkColor,
    },
  });
};

export default linkStyle;
