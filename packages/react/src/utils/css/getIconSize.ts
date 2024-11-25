import { css, FlattenInterpolation } from 'styled-components';
import { TypographyVariant } from '../../components/Typography';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { typographyMap } from '../../components/Typography/Typography.constants';
import { Theme } from '../../types';
import { getSortedBreakpoints } from '..';
import { breakpoint } from '.';
import { TypographyFontSizes } from '../../components/Typography/Typography.types';

export const getIconSize = (
  theme: ThemeDesignTokens,
  variant: TypographyVariant,
  type: 'heightWidth' | 'fontSize'
): FlattenInterpolation<Theme> => {
  const { fontSize, responsiveness } = typographyMap[variant];

  const hasResponsiveValues =
    responsiveness && Object.keys(responsiveness).length > 0;

  return css`
    ${generateCSS(theme, fontSize, type)}

    ${hasResponsiveValues &&
    getSortedBreakpoints(responsiveness).map(
      ([breakpointKey, responsiveStyles]) =>
        breakpoint[breakpointKey]`{
                  ${generateCSS(theme, responsiveStyles.fontSize, type)}
                }`
    )}
  `;
};

const generateCSS = (
  theme: ThemeDesignTokens,
  fontSize: TypographyFontSizes,
  type: 'heightWidth' | 'fontSize'
): string =>
  type === 'heightWidth'
    ? `height: ${theme[fontSize]}; width: ${theme[fontSize]};`
    : `font-size: ${theme[fontSize]};`;
