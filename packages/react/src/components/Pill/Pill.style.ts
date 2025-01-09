import styled from 'styled-components';
import { getTabbedStateStyles } from '../../utils';
import { BackGroundProps, PillVariant, PillVariantProps, SelectedProps } from './Pill.types';
import { Theme } from '../../types';

const getBackgroundColor = ({ theme, disabled, isSelected, statusVariant }: Theme & BackGroundProps) => {
  if (disabled) return theme.ElementsSurfaceDisabled;
  if (isSelected) return theme.ElementsSurfaceActionHoverSecondary;

  return {
    default: theme.ElementsSurfacePage,
    success: theme.ElementsSurfaceSuccess,
    error: theme.ElementsSurfaceDanger,
    info: theme.ElementsSurfaceInfo,
    warning: theme.ElementsSurfaceWarning,
  }[statusVariant];
};

export const getVariantColor = ({ theme, statusVariant }: Theme & { statusVariant: PillVariant }): string => {
  return {
    default: theme.ElementsTextDefaultDark,
    info: theme.ElementsTextInfo,
    success: theme.ElementsTextSuccess,
    error: theme.ElementsTextDanger,
    warning: theme.ElementsTextWarning,
  }[statusVariant];
};

export const Pill = styled.div(
  ({ theme, disabled, isRemovable, isSelected, hasPadding, statusVariant, hasBorder }: Theme & SelectedProps) => {
    return [
      {
        width: 'fit-content',
        height: 'fit-content',
        margin: hasPadding ? theme.BaselineSpacesSpace8 : undefined,
        borderRadius: theme.BorderBaseRadiusRounded,
        backgroundColor: getBackgroundColor({ theme, disabled, isSelected, statusVariant }),
      },
      hasBorder && {
        border: `solid ${theme.BorderBaseWidthSm}`,
        borderColor: statusVariant ? getVariantColor({ theme, statusVariant }) : undefined,
      },
      statusVariant === 'default' && {
        borderColor: disabled ? theme.ElementsBorderDisabled : theme.ElementsBorderHighlightStrong,
        cursor: !disabled && !isRemovable ? 'pointer' : 'default',
      },
      getTabbedStateStyles(),
    ];
  }
);

export const Icon = styled.div<PillVariantProps>(({ theme, disabled, statusVariant }: Theme & PillVariantProps) => [
  {
    color:
      statusVariant === 'default' && disabled ? theme.ElementsTextDisabled : getVariantColor({ theme, statusVariant }),
  },
]);

export const RemoveIcon = styled.div<PillVariantProps>(({ theme, disabled }: Theme & PillVariantProps) => [
  {
    color: theme.ElementsTextDisabled,
    cursor: !disabled ? 'pointer' : 'default',
  },
  getTabbedStateStyles(),
]);
