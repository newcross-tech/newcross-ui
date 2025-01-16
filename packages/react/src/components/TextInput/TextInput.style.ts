import Typography from '../Typography';
import styled from 'styled-components';
import { getHaloValue } from '../../utils';
import { ExtendedTheme } from '../../types';
import { getScrollbarStyles } from '../../utils/css/getScrollbarStyles';
import {
  ContainerProps,
  MessageTextProps,
  PropStylesTypes,
  StyledTextAreaProps,
  TextAreaContainerProps,
} from './TextInput.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import Container from '../Container';

const getCommonStateStyles = ({ theme, hasError, disabled, isValid }: PropStylesTypes) => ({
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

const getFocusedStyles = (theme: ThemeDesignTokens) => ({
  border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault}`,
});

export const TextInputContainer = styled(Container)<ContainerProps>(
  ({ theme, hasError, fullWidth, search, disabled, isFocused, isValid }) => ({
    borderRadius: theme.BorderBaseRadiusMd,
    backgroundColor: theme.ElementsSurfaceDefault,
    ...getCommonStateStyles({ theme, hasError, isFocused, disabled, isValid }),
    ...(isFocused && getFocusedStyles(theme)),
    ...(search && {
      borderRadius: theme.BorderBaseRadiusRounded,
    }),
    '& input': {
      width: fullWidth ? '100%' : '90%',
      border: 'none',
      backgroundColor: 'transparent',
      outlineWidth: 0,
      fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
      fontSize: theme.TypographyFontSize14,
      lineHeight: theme.TypographyLineHeight20,
      padding: `${theme.BaselineSpacesSpace12} 0`,
      ...(search && {
        paddingRight: theme.BaselineSpacesSpace12,
        paddingLeft: theme.BaselineSpacesSpace12,
      }),
      [`+ ${RightIconContainer}`]: {
        ...(disabled ? {} : { cursor: 'pointer' }),
      },
      '&:focus-visible': {
        outline: 'none',
      },
    },
  })
);

export const RightIconContainer = styled(Container)(() => ({
  cursor: 'pointer',
}));

export const MessageText = styled(Typography)<MessageTextProps>(({ theme, hasError }) => ({
  color: hasError ? theme.ElementsTextDangerError : theme.ElementsTextDefaultDarkSecondary,
  marginTop: theme.BaselineSpacesSpace4,
  paddingRight: theme.BaselineSpacesSpace0,
  paddingLeft: theme.BaselineSpacesSpace16,
}));

export const TextAreaContainer = styled(Container)<TextAreaContainerProps>(({ fullWidth }) => ({
  ...(fullWidth ? {} : { width: 'fit-content' }),
}));

export const TextArea = styled.textarea<StyledTextAreaProps>(
  ({ theme, hasError, disabled, fullWidth }: ExtendedTheme<StyledTextAreaProps>) => ({
    resize: 'none',
    outline: 'none',
    cursor: 'auto',
    overflowY: 'auto',
    borderRadius: theme.BorderBaseRadiusMd,
    marginTop: theme.BaselineSpacesSpace4,
    padding: theme.BaselineSpacesSpace16,
    height: `${+getHaloValue(theme.BaselineSpacesSpace64) * 2}rem`,
    ...(fullWidth ? {} : { width: `${+getHaloValue(theme.BaselineSpacesSpace8) * 32.25}rem` }),
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDefault}`,
    ...getScrollbarStyles({ theme }),
    ...getCommonStateStyles({ theme, hasError, disabled }),
    ...(!disabled && {
      '&:focus, &:focus-visible': {
        ...getFocusedStyles(theme),
      },
    }),
  })
);

export const LengthInfo = styled(Typography)(({ theme }) => ({
  marginTop: theme.BaselineSpacesSpace8,
}));
