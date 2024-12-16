import styled, { css } from 'styled-components';
import { getTabbedStateStyles } from '../../utils';
import { BackGroundProps, PillVariant, PillVariantProps, SelectedProps } from './Pill.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme } from '../../types';

export const getVariantBackgroundColor = (theme: ThemeDesignTokens): Record<PillVariant, string> => ({
  default: theme.ElementsSurfacePage,
  success: theme.ElementsSurfaceSuccess,
  error: theme.ElementsSurfaceDanger,
  info: theme.ElementsSurfaceInfo,
  warning: theme.ElementsSurfaceWarning,
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
      ${theme.ElementsSurfaceDisabled}
    `;
  if (isSelected)
    return css`
      ${theme.ElementsSurfaceActionHoverSecondary}
    `;

  return css`
    ${theme.ElementsSurfacePage}
  `;
};

export const getVariantColor = (theme: ThemeDesignTokens): Record<PillVariant, string> => ({
  default: theme.ElementsTextDefaultDark,
  info: theme.ElementsTextInfo,
  success: theme.ElementsTextSuccess,
  error: theme.ElementsTextDanger,
  warning: theme.ElementsTextWarning,
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
    margin: ${hasPadding && theme.BaselineSpacesSpace8};
    border-radius: ${theme.BorderBaseRadiusRounded};
    background-color: ${getBackgroundColor({ theme, disabled, isSelected, statusVariant })};

    ${hasBorder &&
    css`
      border: solid ${theme.BorderBaseWidthSm};
      border-color: ${statusVariant && getVariantColor(theme)[statusVariant]};
    `}

    ${statusVariant === 'default' &&
    css`
      border-color: ${disabled ? theme.ElementsBorderDisabled : theme.ElementsBorderHighlightStrong};
      cursor: ${!disabled && !isRemovable && 'pointer'};
    `};

    ${getTabbedStateStyles()}
  `};
`;

export const Icon = styled.div<PillVariantProps>`
  ${({ theme, disabled, statusVariant = 'default' }: ExtendedTheme<PillVariantProps>) => css`
    color: ${getVariantColor(theme)[statusVariant]};
    color: ${statusVariant === 'default' && disabled && theme.ElementsTextDisabled};
  `}
`;

export const RemoveIcon = styled.div<PillVariantProps>`
  ${({ theme, disabled }: ExtendedTheme<PillVariantProps>) => css`
    color: ${theme.ElementsTextDisabled};
    cursor: ${!disabled && 'pointer'};

    ${getTabbedStateStyles()}
  `};
`;
