import styled from 'styled-components';
import { getScrollbarStyles } from '../../../utils/css/getScrollbarStyles';
import Container from '../../Container';
import { getCommonStateStyles, getFocusedStyles } from '../utils';
import { PhoneNumberInputPropsStrict } from './PhoneNumberInput.types';

export const Content = styled(Container)<
  Pick<PhoneNumberInputPropsStrict, 'isError' | 'disabled' | 'isValid'> & {
    isFocused: boolean;
  }
>(({ theme, isError, isFocused, disabled, isValid }) => ({
  minHeight: theme.BaselineSpacesSpace48,

  '.react-international-phone-input-container': {
    ...getCommonStateStyles({
      theme,
      hasError: isError,
      disabled,
      isValid,
    }),
    ...(isFocused && getFocusedStyles({ theme })),
    borderRadius: theme.BorderBaseRadiusMd,
  },

  '.react-international-phone-country-selector-button__button-content': {
    padding: `${theme.BaselineSpacesSpace0} ${theme.BaselineSpacesSpace8} ${theme.BaselineSpacesSpace0} ${theme.BaselineSpacesSpace16}`,
    '> img': {
      marginRight: theme.BaselineSpacesSpace8,
    },
  },

  '.react-international-phone-country-selector-button': {
    border: theme.BaselineSpacesSpace0,
    position: 'relative',
    borderRadius: `${theme.BorderBaseRadiusMd} ${theme.BaselineSpacesSpace0} ${theme.BaselineSpacesSpace0} ${theme.BorderBaseRadiusMd}!important`,
    height: theme.BaselineSpacesSpace48,
  },

  '.react-international-phone-country-selector-button::after': {
    content: "''",
    position: 'absolute',
    top: '25%',
    right: theme.BaselineSpacesSpace0,
    height: '50%',
    width: theme.BorderBaseWidthSm,
    backgroundColor: theme.ElementsBorderDefault,
  },

  '.react-international-phone-input': {
    color: theme.ElementsTextDefaultDark,
    width: '100%',
    border: `${theme.BaselineSpacesSpace0} !important`,
    borderRadius: `${theme.BaselineSpacesSpace0} ${theme.BorderBaseRadiusMd} ${theme.BorderBaseRadiusMd} ${theme.BaselineSpacesSpace0}!important`,
    height: theme.BaselineSpacesSpace48,
  },

  '.react-international-phone-input--disabled': {
    color: theme.ElementsTextDisabled,
  },

  '.react-international-phone-country-selector-button__dropdown-arrow': {
    borderBottom: `${theme.BorderBaseWidthSm} solid ${theme.ElementsTextDefaultDark}`,
    borderRight: `${theme.BorderBaseWidthSm} solid ${theme.ElementsTextDefaultDark}`,
    width: theme.BaselineSpacesSpace8,
    height: theme.BaselineSpacesSpace8,
    transform: 'rotate(45deg)',
    marginLeft: theme.BaselineSpacesSpace4,
    marginBottom: theme.BaselineSpacesSpace4,
    transition: 'all 0.1s ease-out',
    borderLeft: theme.BaselineSpacesSpace0,
    borderTop: theme.BaselineSpacesSpace0,
  },
  '.react-international-phone-country-selector-button__dropdown-arrow--disabled':
    {
      borderBottom: `${theme.BorderBaseWidthSm} solid ${theme.ElementsTextDisabled}`,
      borderRight: `${theme.BorderBaseWidthSm} solid ${theme.ElementsTextDisabled}`,
    },

  '.react-international-phone-country-selector-button__dropdown-arrow--active':
    {
      transform: 'rotate(-135deg)',
      marginTop: theme.BaselineSpacesSpace8,
    },

  '.react-international-phone-input, .react-international-phone-country-selector-dropdown__list-item-country-name, .react-international-phone-country-selector-dropdown__list-item-dial-code':
    {
      fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
      fontSize: theme.BaselineFontFontSize16,
      lineHeight: theme.BaselineFontFontSize20,
    },
  '.react-international-phone-country-selector-dropdown__list-item': {
    height: theme.BaselineSpacesSpace48,
    ':hover': {
      backgroundColor: theme.ElementsSurfaceActionHover,
      transition: 'background-color 0.2s ease-in-out',
    },
  },
  '.react-international-phone-country-selector-dropdown__list-item--selected': {
    backgroundColor: theme.ElementsSurfaceActionDefault,
  },
  '.react-international-phone-country-selector-dropdown': {
    ...getScrollbarStyles({ theme }),
  },
  '.react-international-phone-input--disabled, .react-international-phone-country-selector-button--disabled':
    {
      backgroundColor: theme.ElementsSurfaceDisabled,
    },
}));

export const PhoneInputWrapper = styled(Container)({
  position: 'relative',
  width: '100%',
});

export const IconWrapper = styled(Container)({
  position: 'absolute',
  right: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const ClearIconWrapper = styled(IconWrapper)({
  cursor: 'pointer',
});
