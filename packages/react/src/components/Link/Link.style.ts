import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { FlattenInterpolation, css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types';
import { TypographyVariant, getColorStyles } from '../Typography';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { LinkProps } from './Link';
import { typographyMap } from '../Typography/Typography.constants';
import { getSortedBreakpoints } from '../../utils';
import { breakpoint } from '../../utils/css';

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

type LinkType = Omit<LinkProps, 'variant'>;

export const Link = styled.a<LinkType>`
  text-decoration: underline;
  cursor: pointer;
  text-decoration: underline
    ${({ theme, mode = 'light', color = 'primary' }: ExtendedTheme<LinkType>) => getColorStyles(theme)[mode][color]};

  ${({ theme }: Theme) => css`
    color: ${theme.LinkColor};

    &:active {
      opacity: ${theme.LinkPressedOpacity};
    }
  `};
`;

type IconProps = Pick<LinkProps, 'leftIcon' | 'rightIcon' | 'variant'>;

export const Icon = styled(FontAwesomeIcon)<IconProps>`
  ${({ theme, leftIcon, rightIcon, variant }: ExtendedTheme<IconProps>) => css`
    ${getIconSize(theme, variant)};
    ${leftIcon && `margin-right: ${theme.SpacingBase8}`};
    ${rightIcon && `margin-left: ${theme.SpacingBase8}`};
  `};
`;
