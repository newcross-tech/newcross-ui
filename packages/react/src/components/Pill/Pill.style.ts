import styled from 'styled-components';
import { getTabbedStateStyles } from '../../utils';
import { PillPropsStrict } from './Pill.types';
import { Theme } from '../../types';

const getBackgroundColor = ({
  theme,
  disabled,
  selected,
  variant,
}: Theme & Pick<PillPropsStrict, 'disabled' | 'selected' | 'variant'>) => {
  if (disabled) return theme.ElementsSurfaceDisabled;
  if (selected) return theme.ElementsSurfaceActionHoverSecondary;

  return {
    default: theme.ElementsSurfacePage,
    success: theme.ElementsSurfaceSuccess,
    error: theme.ElementsSurfaceDanger,
    info: theme.ElementsSurfaceInfo,
    warning: theme.ElementsSurfaceWarning,
  }[variant];
};

export const getVariantColor = ({ theme, variant }: Theme & Pick<PillPropsStrict, 'variant'>): string => {
  return {
    default: theme.ElementsTextDefaultDark,
    info: theme.ElementsTextInfo,
    success: theme.ElementsTextSuccess,
    error: theme.ElementsTextDanger,
    warning: theme.ElementsTextWarning,
  }[variant];
};

export const Pill = styled.div<
  Pick<PillPropsStrict, 'disabled' | 'removable' | 'selected' | 'hasPadding' | 'variant' | 'hasBorder'>
>((props) => [
  {
    width: 'fit-content',
    height: 'fit-content',
    margin: props.hasPadding ? props.theme.BaselineSpacesSpace8 : undefined,
    borderRadius: props.theme.BorderBaseRadiusRounded,
    backgroundColor: getBackgroundColor(props),
  },
  props.hasBorder && {
    border: `solid ${props.theme.BorderBaseWidthSm}`,
    borderColor: props.variant ? getVariantColor(props) : undefined,
  },
  props.variant === 'default' && {
    borderColor: props.disabled ? props.theme.ElementsBorderDisabled : props.theme.ElementsBorderHighlightStrong,
    cursor: !props.disabled && !props.removable ? 'pointer' : 'default',
  },
  getTabbedStateStyles(),
]);

export const Icon = styled.div<Pick<PillPropsStrict, 'disabled' | 'variant'>>((props) => [
  {
    'div > svg': {
      color: props.variant === 'default' && props.disabled ? props.theme.ElementsTextDisabled : getVariantColor(props),
    },
  },
]);

export const RemoveIcon = styled.div<Pick<PillPropsStrict, 'disabled'>>(({ theme, disabled }) => [
  {
    color: theme.ElementsTextDisabled,
    cursor: !disabled ? 'pointer' : 'default',
  },
  getTabbedStateStyles(),
]);
