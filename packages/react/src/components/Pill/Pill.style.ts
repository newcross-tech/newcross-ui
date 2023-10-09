import styled, { css } from 'styled-components';
import { getTabbedStateStyles } from '../../utils';
import Typography from '../Typography';
import { BackGroundProps, IconProps, PillVariant, RemoveIconProps, SelectedProps, TextProp } from './Pill.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, Theme } from '../../types';

export const getVariantBackgroundColor = (theme: ThemeDesignTokens): Record<PillVariant, string> => ({
  default: theme.PillVariantDefaultBackgroundColor,
  success: theme.PillVariantSuccessBackgroundColor,
  error: theme.PillVariantErrorBackgroundColor,
  info: theme.PillVariantInfoBackgroundColor,
  warning: theme.PillVariantWarningBackgroundColor,
});

const getBackgroundColor = ({
  theme,
  disabled,
  isSelected,
  statusVariant = 'default',
}: ExtendedTheme<BackGroundProps>) => {
  if (statusVariant !== 'default') return getVariantBackgroundColor(theme)[statusVariant];
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
  ${({
    theme,
    disabled,
    isRemovable,
    isSelected,
    hasPadding,
    statusVariant,
    hasBorder,
  }: ExtendedTheme<SelectedProps>) => css`
    width: fit-content;
    height: fit-content;
    margin: ${hasPadding && theme.PillMargin};
    border-radius: ${theme.PillBorderRadius};
    background-color: ${getBackgroundColor({ theme, disabled, isSelected, statusVariant })};

    ${hasBorder &&
    css`
      border: solid ${theme.PillBorderWidth};
      border-color: ${statusVariant && getVariantColor(theme)[statusVariant]};
    `}

    ${statusVariant === 'default' &&
    css`
      border-color: ${disabled ? theme.PillDisabledBorderColor : theme.PillVariantDefaultBorderColor};
      cursor: ${!disabled && !isRemovable && 'pointer'};
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
  ${({ theme, disabled, statusVariant = 'default' }: ExtendedTheme<TextProp>) => css`
    color: ${statusVariant === 'warning' ? theme.PillVariantWarningTextColor : getVariantColor(theme)[statusVariant]};
    color: ${statusVariant === 'default' && disabled && theme.PillDisabledColor};
  `}
`;

export const Icon = styled.div<IconProps>`
  ${({ theme, hasIcon, disabled, statusVariant = 'default' }: ExtendedTheme<IconProps>) => css`
    margin-right: ${hasIcon && theme.PillIconMarginLeft};
    color: ${getVariantColor(theme)[statusVariant]};
    color: ${statusVariant === 'default' && disabled && theme.PillDisabledColor};
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
