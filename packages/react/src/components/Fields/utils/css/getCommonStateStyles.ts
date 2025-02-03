import { PropStylesTypes } from '../../TextInput/TextInput.types';

export const getCommonStateStyles = ({
  theme,
  hasError,
  disabled,
  isValid,
}: PropStylesTypes) => ({
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
