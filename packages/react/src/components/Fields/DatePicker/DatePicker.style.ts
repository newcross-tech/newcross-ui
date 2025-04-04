import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { Theme } from '../../../types';

export const ReactDatePickerWrapper = styled.div(({ theme }) => [
  commonDatepickerStyles({ theme }),
  {
    '& .react-datepicker': {
      width: '240px',
      boxShadow: `${theme.ShadowBaseOffsetSm}px ${theme.ShadowBaseOffsetLg}px ${theme.ShadowBaseElevationMd}px ${theme.ShadowBaseOffsetSm}px rgba(0, 0, 0, 0.25)`,
      borderRadius: theme.BorderBaseRadiusMd,
      display: 'flex',
      flexDirection: 'column',
      border: theme.BaselineSpacesSpace0,
    },
  },
  {
    '& .react-datepicker__header': {
      backgroundColor: theme.ElementsSurfaceHighlightStrong,
      border: 'none',
      borderRadius: `${theme.BorderBaseRadiusMd} ${theme.BorderBaseRadiusMd} 0 0`,
      padding: theme.BaselineSpacesSpace8,
      display: 'flex',
      flexDirection: 'column',
    },
  },
  {
    '& .react-datepicker__current-month': {
      fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
      fontWeight: theme.BaselineFontFontWeightSemiBold,
      fontSize: theme.BaselineFontFontSize14,
      lineHeight: theme.BaselineFontFontSize20,
      color: theme.ElementsTextDefaultLight,
      minHeight: theme.BaselineSpacesSpace32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  {
    '& .react-datepicker__day-names': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: theme.BaselineSpacesSpace32,
      margin: theme.BaselineSpacesSpace0,
    },
  },
  {
    '& .react-datepicker__day-name': {
      fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
      fontSize: theme.BaselineFontFontSize14,
      color: theme.ElementsTextDefaultLight,
    },
  },
  {
    '& .react-datepicker__week': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
]);

export const commonDatepickerStyles = ({ theme }: Theme) => [
  {
    '& .react-datepicker-wrapper': {
      width: '100%',
    },
  },
  {
    '& .react-datepicker__navigation--previous, & .react-datepicker__navigation--next': {
      top: theme.BaselineSpacesSpace8,
    },
  },
  {
    '& .react-datepicker__day': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
      fontSize: theme.BaselineFontFontSize14,
      width: theme.BaselineSpacesSpace32,
      height: theme.BaselineSpacesSpace32,
      borderRadius: theme.BorderBaseRadiusSm,
      color: theme.ElementsTextDefaultDark,
      margin: theme.BaselineSpacesSpace0,
      '&:hover': {
        background: theme.ElementsSurfaceActionHover,
        cursor: 'pointer',
      },
    },
  },
  {
    '.react-datepicker__day--disabled': {
      color: theme.ElementsTextDisabled,
      '&:hover': {
        cursor: 'not-allowed',
        backgroundColor: 'transparent',
      },
    },
  },
  {
    '& .react-datepicker__day--today': {
      border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDefault}`,
    },
  },
  {
    '& .react-datepicker__day--selected, & .react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--range-end.react-datepicker__day--in-range':
      {
        fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
        fontWeight: theme.BaselineFontFontWeightSemiBold,
        background: theme.ElementsSurfaceActionDefault,
        borderRadius: theme.BorderBaseRadiusSm,
      },
  },
  {
    '& .react-datepicker__day--in-selecting-range, & .react-datepicker__day--in-range': {
      background: theme.ElementsSurfaceActionHoverSecondary,
      borderRadius: theme.BaselineSpacesSpace0,
      ':hover': {
        background: theme.ElementsSurfaceActionHover,
        borderRadius: `0 ${theme.BorderBaseRadiusSm} ${theme.BorderBaseRadiusSm} 0`,
      },
    },
  },
  {
    '& .react-datepicker__day--selecting-range-start, & .react-datepicker__day--range-start': {
      background: theme.ElementsSurfaceActionDefault,
      borderRadius: `${theme.BorderBaseRadiusSm} 0 0 ${theme.BorderBaseRadiusSm}`,
    },
  },
  {
    '& .react-datepicker__day--selecting-range-end, & .react-datepicker__day--range-end': {
      background: theme.ElementsSurfaceActionDefault,
      borderRadius: `0 ${theme.BorderBaseRadiusSm} ${theme.BorderBaseRadiusSm} 0`,
    },
  },
  {
    '& .react-datepicker__triangle': {
      display: 'none',
    },
  },
  {
    '& .react-datepicker__day--keyboard-selected': {
      background: theme.ElementsSurfaceDisabledHighlight,
    },
  },
  {
    '& .react-datepicker__day--outside-month': {
      opacity: 0,
      '&:hover': { cursor: 'not-allowed' },
    },
  },
];
