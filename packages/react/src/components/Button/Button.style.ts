import styled, { css } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme } from '../../types/Theme';
import { getTabbedStateStyles } from '../../utils/css';
import { ButtonProps, IconProps } from './Button';
import { ButtonSizes, ButtonVariant, getIconSize } from './Button.types';

const getVariantStyles = (theme: ThemeDesignTokens) => ({
  [ButtonVariant.primary]: css`
    color: ${theme.ButtonVariantPrimaryColor};
    background-color: ${theme.ButtonVariantPrimaryBackgroundColor};
  `,
  [ButtonVariant.secondary]: css`
    color: ${theme.ButtonVariantSecondaryColor};
    background-color: transparent;
    border: ${theme.ButtonVariantSecondaryBorderWidth} solid ${theme.ButtonVariantSecondaryBorderColor};
  `,
});

const getDisabledStyles = (theme: ThemeDesignTokens) => ({
  [ButtonVariant.primary]: css`
    cursor: default;
    color: ${theme.ButtonVariantPrimaryDisabledColor};
    background-color: ${theme.ButtonVariantPrimaryDisabledBackgroundColor};
  `,
  [ButtonVariant.secondary]: css`
    cursor: default;
    color: ${theme.ButtonVariantSecondaryDisabledColor};
    border: ${theme.ButtonVariantSecondaryBorderWidth} solid ${theme.ButtonVariantSecondaryDisabledBorderColor};
    background-color: transparent;
  `,
});

const getSizeStyles = (theme: ThemeDesignTokens) => ({
  [ButtonSizes.small]: css`
    font-family: ${theme.TypographyHeading4FontFamily};
    font-weight: ${theme.TypographyHeading4FontWeight};
    font-size: ${theme.TypographyHeading4FontSize};
    line-height: ${theme.TypographyHeading4LineHeight};
    padding: ${theme.ButtonSizeSmallPadding};
  `,
  [ButtonSizes.large]: css`
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

const getHoverStyles = (theme: ThemeDesignTokens) => ({
  [ButtonVariant.primary]: css`
    background-color: ${theme.ButtonVariantPrimaryPressedBackgroundColor};
  `,
  [ButtonVariant.secondary]: css`
    background-color: ${theme.ButtonVariantSecondaryPressedBackgroundColor};
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
