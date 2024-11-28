import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { FlattenInterpolation, css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types';
import { TypographyVariant, getColorStyles } from '../Typography';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { typographyMap } from '../Typography/Typography.constants';
import { getSortedBreakpoints } from '../../utils';
import { breakpoint } from '../../utils/css';
import { IconProps, LinkType } from './Link.types';

export const getIconSize = (theme: ThemeDesignTokens, variant: TypographyVariant): FlattenInterpolation<Theme> => {
  const { fontSize, responsiveness } = typographyMap[variant];

  const hasResponsiveValues = responsiveness && Object.keys(responsiveness).length > 0;

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
};

export const Link = styled.a<LinkType>`
  ${({ theme, mode = 'light', color = 'primary', disabled }: ExtendedTheme<LinkType>) => css`
    text-decoration: underline ${getColorStyles(theme)[mode][color]};
    color: ${disabled ? theme.ElementsTextDisabled : theme.ElementsTextDefaultDark};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    &:active {
      opacity: ${theme.OpacityBaseMd};
    }
  `};
`;

export const Icon = styled(FontAwesomeIcon)<IconProps>`
  ${({ theme, variant }: ExtendedTheme<IconProps>) => css`
    ${getIconSize(theme, variant)};
  `};
`;
