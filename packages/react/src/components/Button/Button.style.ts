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
    background-color: ${theme.ButtonVariantSecondaryBackgroundColor};
  `,
  [ButtonVariant.outlinePrimary]: css`
    color: ${theme.ButtonVariantOutlinePrimaryColor};
    background-color: ${theme.ButtonVariantOutlinePrimaryBackgroundColor};
    border-width: ${theme.ButtonVariantOutlinePrimaryBorderWidth};
    border-color: ${theme.ButtonVariantOutlinePrimaryBorderColor};
  `,
});

const getDisabledStyles = (theme: ThemeDesignTokens) => ({
  [ButtonVariant.primary]: css`
    cursor: default;
    color: ${theme.ButtonVariantPrimaryColor};
    background-color: ${theme.ButtonVariantPrimaryDisabledBackgroundColor};
  `,
  [ButtonVariant.secondary]: css`
    cursor: default;
    color: ${theme.ButtonVariantSecondaryColor};
    background-color: ${theme.ButtonVariantSecondaryDisabledBackgroundColor};
  `,
  [ButtonVariant.outlinePrimary]: css`
    cursor: default;
    color: ${theme.ButtonVariantOutlinePrimaryDisabledColor};
    background-color: ${theme.ButtonVariantOutlinePrimaryDisabledBackgroundColor};
    border-color: ${theme.ButtonVariantOutlinePrimaryDisabledBorderColor};
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
    font-size: ${theme.ButtonSmallFontSize};
    line-height: ${theme.ButtonSmallLineHeight};
    padding: ${theme.ButtonSmallPaddingVertical} ${theme.ButtonSmallPaddingHorizontal};
  `,
  [ButtonSizes.medium]: css`
    font-size: ${theme.ButtonMediumFontSize};
    line-height: ${theme.ButtonMediumLineHeight};
    padding: ${theme.ButtonMediumPaddingVertical} ${theme.ButtonMediumPaddingHorizontal};
  `,
  [ButtonSizes.large]: css`
    font-size: ${theme.ButtonLargeFontSize};
    line-height: ${theme.ButtonLargeLineHeight};
    padding: ${theme.ButtonLargePaddingVertical} ${theme.ButtonLargePaddingHorizontal};
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
  [ButtonVariant.outlinePrimary]: css`
    color: ${theme.ButtonVariantOutlinePrimaryPressedColor};
    background-color: ${theme.ButtonVariantOutlinePrimaryPressedBackgroundColor};
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
