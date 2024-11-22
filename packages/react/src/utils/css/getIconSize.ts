import { css, FlattenInterpolation } from 'styled-components';
import { TypographyVariant } from '../../components/Typography';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { typographyMap } from '../../components/Typography/Typography.constants';
import { Theme } from '../../types';
import { getSortedBreakpoints } from '..';
import { breakpoint } from '.';

export const getIconSize = {
  heightWidth: (
    theme: ThemeDesignTokens,
    variant: TypographyVariant
  ): FlattenInterpolation<Theme> => {
    const { fontSize, responsiveness } = typographyMap[variant];

    const hasResponsiveValues =
      responsiveness && Object.keys(responsiveness).length > 0;

    return css`
      height: ${theme[fontSize]};
      width: ${theme[fontSize]};

      ${hasResponsiveValues &&
      getSortedBreakpoints(responsiveness).map(
        ([breakpointKey, responsiveStyles]) =>
          breakpoint[breakpointKey]`{
                  height: ${theme[responsiveStyles.fontSize]};
                  width: ${theme[responsiveStyles.fontSize]};
                }`
      )}
    `;
  },
  fontSize: (
    theme: ThemeDesignTokens,
    variant: TypographyVariant
  ): FlattenInterpolation<Theme> => {
    const { fontSize, responsiveness } = typographyMap[variant];

    const hasResponsiveValues =
      responsiveness && Object.keys(responsiveness).length > 0;

    return css`
      font-size: ${theme[fontSize]};

      ${hasResponsiveValues &&
      getSortedBreakpoints(responsiveness).map(
        ([breakpointKey, responsiveStyles]) =>
          breakpoint[breakpointKey]`{
                  font-size: ${theme[responsiveStyles.fontSize]};
                }`
      )}
    `;
  },
};
