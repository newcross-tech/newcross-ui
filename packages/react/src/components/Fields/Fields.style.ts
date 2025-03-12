import { Theme } from '../../types';
import { TextInputPropsStrict } from './TextInput/TextInput.types';

export const getTextColor = {
  primaryText: ({ disabled, hasError }: Pick<TextInputPropsStrict, 'disabled' | 'hasError'>) => {
    if (disabled) return 'disabled';
    if (hasError) return 'dangerError';
    return 'defaultDark';
  },
  secondaryText: ({ disabled, hasError }: Pick<TextInputPropsStrict, 'disabled' | 'hasError'>) => {
    if (disabled) return 'disabled';
    if (hasError) return 'dangerError';
    return 'defaultDarkSecondary';
  },
};

export const getCommonStateStyles = ({
  theme,
  hasError,
  disabled,
  isValid,
}: Partial<Pick<TextInputPropsStrict, 'disabled' | 'isValid' | 'hasError'>> & Theme) => ({
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
