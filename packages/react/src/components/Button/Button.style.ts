import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme } from '../../types';
import { getIconSize, getTabbedStateStyles } from '../../utils/css';
import { TypographyVariant } from '../Typography';
import { ButtonProps } from './Button';
import { ButtonSizes, ButtonVariant } from './Button.types';
import Container from '../Container';

export const getTypographyValues = (): Record<ButtonSizes, TypographyVariant> => ({
  small: 'p2Action',
  large: 'p1Action',
});

const getVariantStyles = (theme: ThemeDesignTokens): Record<ButtonVariant, FlattenSimpleInterpolation> => ({
  primary: css`
    color: ${theme.ElementsTextActionPrimaryDark};
    background-color: ${theme.ElementsSurfaceActionDefault};
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault};
  `,
  secondary: css`
    color: ${theme.ElementsTextActionPrimaryDark};
    background-color: transparent;
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault};
  `,
  secondaryLight: css`
    color: ${theme.ElementsTextActionSecondaryLight};
    background-color: transparent;
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault};
  `,
  danger: css`
    color: ${theme.ElementsTextActionDanger};
    background-color: ${theme.ElementsSurfaceActionDanger};
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsSurfaceActionDanger};
  `,
});

const getDisabledStyles = (theme: ThemeDesignTokens): Record<ButtonVariant, FlattenSimpleInterpolation> => ({
  primary: css`
    cursor: default;
    color: ${theme.ElementsTextDisabled};
    background-color: ${theme.ElementsSurfaceDisabled};
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsSurfaceDisabled};
  `,
  secondary: css`
    cursor: default;
    color: ${theme.ElementsTextDisabled};
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsSurfaceDisabled};
    background-color: transparent;
  `,
  secondaryLight: css`
    cursor: default;
    color: ${theme.ElementsTextDisabled};
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsSurfaceDisabled};
    background-color: transparent;
  `,
  danger: css`
    cursor: default;
    color: ${theme.ElementsTextDisabled};
    background-color: ${theme.ElementsSurfaceDisabled};
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsSurfaceDisabled};
  `,
});

const getActiveStyles = (theme: ThemeDesignTokens): Record<ButtonVariant, FlattenSimpleInterpolation> => ({
  primary: css`
    background-color: ${theme.ElementsSurfaceActionHover};
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsSurfaceActionHover};
  `,
  secondary: css`
    background-color: ${theme.ElementsSurfaceActionHoverSecondary};
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault};
  `,
  secondaryLight: css`
    color: ${theme.ElementsTextActionPrimaryDark};
    background-color: ${theme.ElementsSurfaceActionHoverSecondary};
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault};
  `,
  danger: css`
    background-color: ${theme.ElementsSurfaceActionDangerHover};
    border: ${theme.BorderBaseWidthSm} solid ${theme.ElementsSurfaceActionDangerHover};
  `,
});

export const IconWrapper = styled(Container)<ExtendedTheme<{ size?: ButtonSizes }>>`
  ${({ theme, size = 'large' }) => getIconSize(theme, getTypographyValues()[size], 'fontSize')};
`;

export const Button = styled(Container)<ExtendedTheme<Pick<ButtonProps, 'variant' | 'disabled'>>>`
  ${({ theme, variant = 'primary', disabled }) => css`
    cursor: pointer;
    border-width: 0;

    ${getTabbedStateStyles()};
    border-radius: ${theme.BorderBaseRadiusRounded};
    ${getVariantStyles(theme)[variant]}
    ${disabled && getDisabledStyles(theme)[variant]}
 
    &:active {
      ${!disabled && getActiveStyles(theme)[variant]}
    }
  `}
`;
