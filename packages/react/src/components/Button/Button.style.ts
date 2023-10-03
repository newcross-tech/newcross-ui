import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme } from '../../types/Theme';
import { getTabbedStateStyles } from '../../utils/css';
import { TypographyVariant } from '../Typography';
import { ButtonProps, IconProps } from './Button';
import { ButtonSizes, ButtonVariant } from './Button.types';

export const getTypographyValues = (): Record<ButtonSizes, TypographyVariant> => ({
  small: 'subtitle1',
  large: 'heading6',
});

export const getIconSize = (theme: ThemeDesignTokens): Record<ButtonSizes, FlattenSimpleInterpolation> => ({
  small: css`
    font-size: ${theme.ButtonSizeSmallIconSize};
  `,
  large: css`
    font-size: ${theme.ButtonSizeLargeIconSize};
  `,
});

const getVariantStyles = (theme: ThemeDesignTokens): Record<ButtonVariant, FlattenSimpleInterpolation> => ({
  primary: css`
    color: ${theme.ButtonVariantPrimaryColor};
    background-color: ${theme.ButtonVariantPrimaryBackgroundColor};
  `,
  secondary: css`
    color: ${theme.ButtonVariantSecondaryColor};
    background-color: transparent;
    border: ${theme.ButtonVariantSecondaryBorderWidth} solid ${theme.ButtonVariantSecondaryBorderColor};
  `,
  danger: css`
    color: ${theme.ButtonVariantDangerColor};
    background-color: ${theme.ButtonVariantDangerBackgroundColor};
  `,
});

const getDisabledStyles = (theme: ThemeDesignTokens): Record<ButtonVariant, FlattenSimpleInterpolation> => ({
  primary: css`
    cursor: default;
    color: ${theme.ButtonVariantPrimaryDisabledColor};
    background-color: ${theme.ButtonVariantPrimaryDisabledBackgroundColor};
  `,
  secondary: css`
    cursor: default;
    color: ${theme.ButtonVariantSecondaryDisabledColor};
    border: ${theme.ButtonVariantSecondaryBorderWidth} solid ${theme.ButtonVariantSecondaryDisabledBorderColor};
    background-color: transparent;
  `,
  danger: css`
    cursor: default;
    color: ${theme.ButtonVariantDangerDisabledColor};
    background-color: ${theme.ButtonVariantDangerDisabledBackgroundColor};
  `,
});

const getSizeStyles = (theme: ThemeDesignTokens): Record<ButtonSizes, FlattenSimpleInterpolation> => ({
  small: css`
    font-family: ${theme.TypographyHeading4FontFamily};
    font-weight: ${theme.TypographyHeading4FontWeight};
    font-size: ${theme.TypographyHeading4FontSize};
    line-height: ${theme.TypographyHeading4LineHeight};
    padding: ${theme.ButtonSizeSmallPadding};
  `,
  large: css`
    font-family: ${theme.TypographyHeading3FontFamily};
    font-weight: ${theme.TypographyHeading3FontWeight};
    font-size: ${theme.TypographyHeading3FontSize};
    line-height: ${theme.TypographyHeading3LineHeight};
    padding: ${theme.ButtonSizeLargePadding};
  `,
});

const getFullWidthStyles = () => css`
  display: flex;
  width: 100%;
`;

const getHoverStyles = (theme: ThemeDesignTokens): Record<ButtonVariant, FlattenSimpleInterpolation> => ({
  primary: css`
    background-color: ${theme.ButtonVariantPrimaryPressedBackgroundColor};
  `,
  secondary: css`
    background-color: ${theme.ButtonVariantSecondaryPressedBackgroundColor};
  `,
  danger: css`
    background-color: ${theme.ButtonVariantDangerPressedBackgroundColor};
  `,
});
export const IconWrapper = styled.div<ExtendedTheme<IconProps>>`
  ${({ theme, rightIcon, leftIcon, hasLabel, size }) => css`
    display: flex;
    align-items: center;
    margin-left: ${rightIcon && hasLabel && theme.ButtonIconSpacing};
    margin-right: ${leftIcon && hasLabel && theme.ButtonIconSpacing};
    ${size && getIconSize(theme)[size]};
  `};
`;
export const Button = styled.button<ExtendedTheme<ButtonProps>>`
  ${({ theme, variant, size, disabled, fullWidth }) => css`
    display: inline-flex;
    cursor: pointer;
    justify-content: center;
    border-width: 0;
    align-items: center;

    ${getTabbedStateStyles()};
    border-radius: ${theme.ButtonCornersPillBorderRadius};
    ${fullWidth && getFullWidthStyles()}
    ${variant && getVariantStyles(theme)[variant]}
    ${disabled && variant && getDisabledStyles(theme)[variant]}
    ${size && getSizeStyles(theme)[size]}
 
    &:active {
      ${!disabled && variant && getHoverStyles(theme)[variant]}
    }
  `}
`;
