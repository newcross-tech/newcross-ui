import styled from 'styled-components';
import { getIconSize, getTabbedStateStyles } from '../../utils/css';
import { ButtonPropsStrict, TypographyValues } from './Button.types';
import Container from '../Container';
import { Theme } from '../../types';

const getBorderStyle = ({ theme, color }: Theme & { color: string }) => ({
  border: `${theme.BorderBaseWidthSm} solid ${color}`,
});

const getHoverStyles = ({ theme, variant }: Theme & Pick<ButtonPropsStrict, 'variant'>) => {
  return {
    primary: {
      ':hover': {
        backgroundColor: theme.ElementsSurfaceActionHover,
        borderColor: theme.ElementsSurfaceActionHover,
      },
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
  }[variant];
};

const getVariantStyles = ({ theme, scheme, variant }: Theme & Pick<ButtonPropsStrict, 'variant' | 'scheme'>) => {
  return {
    primary: {
      color: theme.ElementsTextActionPrimaryDark,
      backgroundColor: theme.ElementsSurfaceActionDefault,
      ...getBorderStyle({ theme, color: theme.ElementsBorderActionDefault }),
    },
    secondary: {
      color: scheme === 'light' ? theme.ElementsTextActionPrimaryDark : theme.ElementsTextActionSecondaryLight,
      backgroundColor: 'transparent',
      ...getBorderStyle({ theme, color: theme.ElementsBorderActionDefault }),
    },
    danger: {
      color: theme.ElementsTextActionDanger,
      backgroundColor: theme.ElementsSurfaceActionDanger,
      ...getBorderStyle({ theme, color: theme.ElementsSurfaceActionDanger }),
    },
  }[variant];
};

const getDisabledStyles = ({ theme, variant }: Theme & Pick<ButtonPropsStrict, 'variant'>) => {
  return {
    primary: {
      cursor: 'default',
      color: theme.ElementsTextDisabled,
      backgroundColor: theme.ElementsSurfaceDisabled,
      ...getBorderStyle({ theme, color: theme.ElementsSurfaceDisabled }),
    },
    secondary: {
      cursor: 'default',
      color: theme.ElementsTextDisabled,
      backgroundColor: 'transparent',
      ...getBorderStyle({ theme, color: theme.ElementsSurfaceDisabled }),
    },
    danger: {
      cursor: 'default',
      color: theme.ElementsTextDisabled,
      backgroundColor: theme.ElementsSurfaceDisabled,
      ...getBorderStyle({ theme, color: theme.ElementsSurfaceDisabled }),
    },
  }[variant];
};

const getActiveStyles = ({ theme, variant }: Theme & Pick<ButtonPropsStrict, 'variant'>) => {
  return {
    primary: {
      backgroundColor: theme.ElementsSurfaceActionHover,
      ...getBorderStyle({ theme, color: theme.ElementsSurfaceActionHover }),
    },
    secondary: {
      color: theme.ElementsTextActionPrimaryDark,
      backgroundColor: theme.ElementsSurfaceActionHoverSecondary,
      ...getBorderStyle({ theme, color: theme.ElementsBorderActionDefault }),
    },
    danger: {
      backgroundColor: theme.ElementsSurfaceActionDangerHover,
      ...getBorderStyle({ theme, color: theme.ElementsSurfaceActionDangerHover }),
    },
  }[variant];
};

export const IconWrapper = styled(Container)<Pick<ButtonPropsStrict, 'size'>>(({ theme, size }) =>
  getIconSize(theme, TypographyValues[size], 'fontSize')
);

export const Button = styled(Container)<Pick<ButtonPropsStrict, 'variant' | 'scheme' | 'disabled'>>((props) => {
  const baseStyles = {
    cursor: props.disabled ? 'default' : 'pointer',
    borderRadius: props.theme.BorderBaseRadiusRounded,
    ...getTabbedStateStyles(),
  };

  const stateStyles = props.disabled
    ? getDisabledStyles(props)
    : { ...getVariantStyles(props), ...getHoverStyles(props) };

  const activeStateStyles = !props.disabled
    ? {
        '&:active': {
          ...getActiveStyles(props),
        },
      }
    : {};

  return {
    ...baseStyles,
    ...stateStyles,
    ...activeStateStyles,
    ...{ transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out' },
  };
});
