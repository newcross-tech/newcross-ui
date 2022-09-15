import styled, { css } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ButtonProps } from './Button';
import { ButtonCorners, ButtonSizes, ButtonVariant } from './Button.types';

const getVariantStyles = (theme: ThemeDesignTokens) => ({
  [ButtonVariant.primary]: css`
    color: ${theme.ButtonVariantPrimaryColor};
    background-color: ${theme.ButtonVariantPrimaryBackgroundColor};
  `,
  [ButtonVariant.secondary]: css`
    color: ${theme.ButtonVariantSecondaryColor};
    background-color: transparent;
    border-width: ${theme.ButtonVariantSecondaryBorderWidth};
    border-color: ${theme.ButtonVariantSecondaryBorderColor};
    border-style: solid;
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
    border-width: ${theme.ButtonVariantSecondaryBorderWidth};
    border-color: ${theme.ButtonVariantSecondaryDisabledBorderColor};
    background-color: transparent;
  `,
});

const getCornerStyles = (theme: ThemeDesignTokens) => ({
  [ButtonCorners.pill]: css`
    border-radius: ${theme.ButtonCornersPillBorderRadius};
  `,
  [ButtonCorners.rounded]: css`
    border-radius: ${theme.ButtonCornersRoundedBorderRadius};
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

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant, corners, size, disabled, fullWidth }) => css`
    display: inline-flex;
    cursor: pointer;
    justify-content: center;
    border-width: 0;

    ${fullWidth && getFullWidthStyles()}
    ${corners && getCornerStyles(theme)[corners]}
    ${variant && getVariantStyles(theme)[variant]}
    ${disabled && variant && getDisabledStyles(theme)[variant]}
    ${size && getSizeStyles(theme)[size]}

    &:active {
      ${!disabled && variant && getHoverStyles(theme)[variant]}
    }
  `}
`;
