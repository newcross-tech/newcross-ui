import { Theme } from '../../types';
import { PropStylesTypes } from './TextInput/TextInput.types';

type TextStateProps = {
  disabled: boolean;
  hasError: boolean;
};

export const getTextColor = {
  primaryText: ({ disabled, hasError }: TextStateProps) => {
    if (disabled) return 'disabled';
    if (hasError) return 'dangerError';
    return 'defaultDark';
  },
  secondaryText: ({ disabled, hasError }: TextStateProps) => {
    if (disabled) return 'disabled';
    if (hasError) return 'dangerError';
    return 'defaultDarkSecondary';
  },
};

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
