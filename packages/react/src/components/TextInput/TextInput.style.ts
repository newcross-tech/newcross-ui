import styled from 'styled-components';
import { ContainerProps, PropStylesTypes } from './TextInput.types';
import Container from '../Container';
import { Theme } from '../../types';

export const getCommonStateStyles = ({ theme, hasError, disabled, isValid }: PropStylesTypes) => ({
  ...(hasError && {
    border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDangerError}`,
  }),
  ...(disabled && {
    border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDisabled}`,
    backgroundColor: `${theme.ElementsSurfaceDisabled}`,
  }),
  ...(!hasError &&
    !disabled &&
    isValid && {
      border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderSuccessStandalone}`,
    }),
  ...(!hasError &&
    !disabled &&
    !isValid && {
      border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDefault}`,
    }),
});

export const getFocusedStyles = ({ theme }: Theme) => ({
  border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault}`,
});

export const TextInputContainer = styled(Container)<ContainerProps>((props) => ({
  borderRadius: props.theme.BorderBaseRadiusMd,
  backgroundColor: props.theme.ElementsSurfaceDefault,
  ...getCommonStateStyles(props),
  ...(props.isFocused && getFocusedStyles(props)),
  ...(props.search && {
    borderRadius: props.theme.BorderBaseRadiusRounded,
  }),
  '& input': {
    width: props.fullWidth ? '100%' : '90%',
    border: 'none',
    backgroundColor: 'transparent',
    outlineWidth: 0,
    fontFamily: props.theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: props.theme.TypographyFontSize14,
    lineHeight: props.theme.TypographyLineHeight20,
    padding: `${props.theme.BaselineSpacesSpace12} 0`,
    ...(props.search && {
      paddingRight: props.theme.BaselineSpacesSpace12,
      paddingLeft: props.theme.BaselineSpacesSpace12,
    }),
    [`+ ${RightIconContainer}`]: {
      ...(props.disabled ? {} : { cursor: 'pointer' }),
    },
    '&:focus-visible': {
      outline: 'none',
    },
  },
}));

export const RightIconContainer = styled(Container)(() => ({
  cursor: 'pointer',
}));
