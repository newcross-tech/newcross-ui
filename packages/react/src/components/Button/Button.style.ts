import styled from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { getIconSize, getTabbedStateStyles } from '../../utils/css';
import { TypographyValues } from './Button';
import { ButtonPropsStrict, ButtonScheme, ButtonVariant } from './Button.types';
import Container from '../Container';

const getBorderStyle = (theme: ThemeDesignTokens, color: string) => ({
  border: `${theme.BorderBaseWidthSm} solid ${color}`,
});

const getHoverStyles = (theme: ThemeDesignTokens) => ({
  primary: {
    ':hover': { backgroundColor: theme.ElementsSurfaceActionHover, borderColor: theme.ElementsSurfaceActionHover },
  },
  secondary: {
    ':hover': {
      backgroundColor: theme.ElementsSurfaceActionHoverSecondary,
      borderColor: theme.ElementsBorderActionDefault,
      color: theme.ElementsTextActionPrimaryDark,
    },
  },
  danger: {
    ':hover': {
      backgroundColor: theme.ElementsSurfaceActionDangerHover,
      borderColor: theme.ElementsSurfaceActionDangerHover,
    },
  },
});

const variantStyles = (theme: ThemeDesignTokens, scheme: ButtonScheme) => ({
  primary: {
    color: theme.ElementsTextActionPrimaryDark,
    backgroundColor: theme.ElementsSurfaceActionDefault,
    ...getBorderStyle(theme, theme.ElementsBorderActionDefault),
  },
  secondary: {
    color: scheme === 'light' ? theme.ElementsTextActionPrimaryDark : theme.ElementsTextActionSecondaryLight,
    backgroundColor: 'transparent',
    ...getBorderStyle(theme, theme.ElementsBorderActionDefault),
  },
  danger: {
    color: theme.ElementsTextActionDanger,
    backgroundColor: theme.ElementsSurfaceActionDanger,
    ...getBorderStyle(theme, theme.ElementsSurfaceActionDanger),
  },
});

const disabledStyles = (theme: ThemeDesignTokens, variant: ButtonVariant) => ({
  cursor: 'default',
  color: theme.ElementsTextDisabled,
  backgroundColor: variant === 'secondary' ? 'transparent' : theme.ElementsSurfaceDisabled,
  ...getBorderStyle(theme, theme.ElementsSurfaceDisabled),
});

const activeStyles = (theme: ThemeDesignTokens) => ({
  primary: {
    backgroundColor: theme.ElementsSurfaceActionHover,
    ...getBorderStyle(theme, theme.ElementsSurfaceActionHover),
  },
  secondary: {
    color: theme.ElementsTextActionPrimaryDark,
    backgroundColor: theme.ElementsSurfaceActionHoverSecondary,
    ...getBorderStyle(theme, theme.ElementsBorderActionDefault),
  },
  danger: {
    backgroundColor: theme.ElementsSurfaceActionDangerHover,
    ...getBorderStyle(theme, theme.ElementsSurfaceActionDangerHover),
  },
});

export const IconWrapper = styled(Container)<Pick<ButtonPropsStrict, 'size'>>(({ theme, size }) =>
  getIconSize(theme, TypographyValues[size], 'fontSize')
);

export const Button = styled(Container)<Pick<ButtonPropsStrict, 'variant' | 'scheme' | 'disabled'>>(
  ({ theme, variant, scheme, disabled }) => {
    const baseStyles = {
      cursor: disabled ? 'default' : 'pointer',
      borderRadius: theme.BorderBaseRadiusRounded,
      ...getTabbedStateStyles(),
    };

    const stateStyles = disabled
      ? disabledStyles(theme, variant)
      : { ...variantStyles(theme, scheme)[variant], ...getHoverStyles(theme)[variant] };

    const activeStateStyles = !disabled
      ? {
          '&:active': {
            ...activeStyles(theme)[variant],
          },
        }
      : {};

    return {
      ...baseStyles,
      ...stateStyles,
      ...activeStateStyles,
    };
  }
);
