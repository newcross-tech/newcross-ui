import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme } from '../../types';
import { getIconSize, getTabbedStateStyles } from '../../utils/css';
import { ButtonProps, TypographyValues } from './Button';
import { ButtonScheme, ButtonSizes, ButtonVariant } from './Button.types';
import Container from '../Container';

const getBorderStyle = (theme: ThemeDesignTokens, color: string) => css`
  border: ${theme.BorderBaseWidthSm} solid ${color};
`;

const variantStyles = (
  theme: ThemeDesignTokens,
  scheme: ButtonScheme
): Record<ButtonVariant, FlattenSimpleInterpolation> => ({
  primary: css`
    color: ${theme.ElementsTextActionPrimaryDark};
    background-color: ${theme.ElementsSurfaceActionDefault};
    ${getBorderStyle(theme, theme.ElementsBorderActionDefault)};
  `,
  secondary: css`
    color: ${scheme === 'light' ? theme.ElementsTextActionPrimaryDark : theme.ElementsTextActionSecondaryLight};
    background-color: transparent;
    ${getBorderStyle(theme, theme.ElementsBorderActionDefault)};
  `,
  danger: css`
    color: ${theme.ElementsTextActionDanger};
    background-color: ${theme.ElementsSurfaceActionDanger};
    ${getBorderStyle(theme, theme.ElementsSurfaceActionDanger)};
  `,
});

const disabledStyles = (theme: ThemeDesignTokens, variant: ButtonVariant): FlattenSimpleInterpolation => css`
  cursor: default;
  color: ${theme.ElementsTextDisabled};
  background-color: ${variant === 'secondary' ? 'transparent' : theme.ElementsSurfaceDisabled};
  ${getBorderStyle(theme, theme.ElementsSurfaceDisabled)};
`;

const activeStyles = (theme: ThemeDesignTokens): Record<ButtonVariant, FlattenSimpleInterpolation> => ({
  primary: css`
    background-color: ${theme.ElementsSurfaceActionHover};
    ${getBorderStyle(theme, theme.ElementsSurfaceActionHover)};
  `,
  secondary: css`
    color: ${theme.ElementsTextActionPrimaryDark};
    background-color: ${theme.ElementsSurfaceActionHoverSecondary};
    ${getBorderStyle(theme, theme.ElementsBorderActionDefault)};
  `,
  danger: css`
    background-color: ${theme.ElementsSurfaceActionDangerHover};
    ${getBorderStyle(theme, theme.ElementsSurfaceActionDangerHover)};
  `,
});

export const IconWrapper = styled(Container)<ExtendedTheme<{ size?: ButtonSizes }>>`
  ${({ theme, size = 'large' }) => getIconSize(theme, TypographyValues[size], 'fontSize')};
`;

export const Button = styled(Container)<ExtendedTheme<Pick<ButtonProps, 'variant' | 'scheme' | 'disabled'>>>`
  ${({ theme, variant = 'primary', scheme = 'light', disabled }) => css`
    cursor: ${disabled ? 'default' : 'pointer'};
    border-radius: ${theme.BorderBaseRadiusRounded};

    ${getTabbedStateStyles()};

    ${disabled ? disabledStyles(theme, variant) : variantStyles(theme, scheme)[variant]}

    &:active {
      ${!disabled && activeStyles(theme)[variant]};
    }
  `}
`;
