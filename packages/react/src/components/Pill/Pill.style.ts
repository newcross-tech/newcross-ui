import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types/Theme';
import { getTabbedStateStyles } from '../../utils';
import Typography from '../Typography';
import { BackGroundProps, IconProps, PillVariant, RemoveIconProps, SelectedProps, TextProp } from './Pill.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

export const getVariantBackgroundColor = (theme: ThemeDesignTokens): Record<PillVariant, string> => ({
  default: theme.PillVariantDefaultBackgroundColor,
  success: theme.PillVariantSuccessBackgroundColor,
  error: theme.PillVariantErrorBackgroundColor,
  info: theme.PillVariantInfoBackgroundColor,
  warning: theme.PillVariantWarningBackgroundColor,
});

const getBackgroundColor = ({ theme, disabled, isSelected, statusVariant }: ExtendedTheme<BackGroundProps>) => {
  if (statusVariant && statusVariant !== 'default') return getVariantBackgroundColor(theme)[statusVariant];
  if (disabled)
    return css`
      ${theme.PillDisabledBackgroundColor}
    `;
  if (isSelected)
    return css`
      ${theme.BrandColorSecondary400}
    `;

  return css`
    ${theme.PillVariantDefaultBackgroundColor}
  `;
};

export const getVariantColor = (theme: ThemeDesignTokens): Record<PillVariant, string> => ({
  default: theme.PillVariantDefaultTextColor,
  success: theme.PillVariantSuccessTextColor,
  error: theme.PillVariantErrorTextColor,
  info: theme.PillVariantInfoTextColor,
  warning: theme.PillVariantWarningBorderColor,
});

export const Pill = styled.div<SelectedProps>`
  ${({ theme, disabled, isRemovable, isSelected, hasPadding, statusVariant }: ExtendedTheme<SelectedProps>) => css`
    width: fit-content;
    height: fit-content;
    cursor: ${!disabled && !isRemovable && statusVariant === 'default' && 'pointer'};
    border: solid ${theme.PillBorderWidth};
    margin: ${hasPadding && theme.PillMargin};
    border-radius: ${theme.PillBorderRadius};
    border-color: ${disabled ? theme.PillDisabledBorderColor : statusVariant && getVariantColor(theme)[statusVariant]};

    background-color: ${getBackgroundColor({ theme, disabled, isSelected, statusVariant })};

    ${statusVariant === 'default' &&
    css`
      border-color: ${theme.PillVariantDefaultBorderColor};
    `};
    ${getTabbedStateStyles()}
  `};
`;

export const Content = styled.div`
  ${({ theme }: Theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.PillPaddingVertical} ${theme.PillPaddingHorizontal};
  `}
`;

export const Text = styled(Typography)<TextProp>`
  ${({ theme, disabled, statusVariant }: ExtendedTheme<TextProp>) => css`
    color: ${statusVariant === 'warning'
      ? theme.PillVariantWarningTextColor
      : statusVariant && getVariantColor(theme)[statusVariant]};

    color: ${disabled && theme.PillDisabledColor};
  `}
`;

export const Icon = styled.div<IconProps>`
  ${({ theme, hasIcon, disabled, statusVariant }: ExtendedTheme<IconProps>) => css`
    margin-right: ${hasIcon && theme.PillIconMarginLeft};
    color: ${disabled ? theme.PillDisabledColor : statusVariant && getVariantColor(theme)[statusVariant]};
  `}
`;

export const RemoveIcon = styled.div<RemoveIconProps>`
  ${({ theme, hasIcon, hasLabel, disabled }: ExtendedTheme<RemoveIconProps>) => css`
    margin-left: ${(hasLabel || hasIcon) && theme.PillIconMarginRight};
    color: ${theme.PillDisabledColor};
    cursor: ${!disabled && 'pointer'};

    ${getTabbedStateStyles()}
  `};
`;
