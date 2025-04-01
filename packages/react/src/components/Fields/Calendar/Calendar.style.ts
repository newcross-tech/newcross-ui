import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const ReactCalendarWrapper = styled.div(({ theme }) => [
  {
    '& .react-datepicker': {
      width: '100%',
      borderRadius: theme.BaselineSpacesSpace0,
      display: 'flex',
      border: 'none',
      backgroundColor: 'transparent',
      gap: theme.BaselineSpacesSpace16,
    },
  },
  {
    '& .react-datepicker-wrapper': {
      width: '100%',
    },
  },
  {
    '& .react-datepicker__header': {
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: theme.BaselineSpacesSpace0,
      display: 'flex',
      flexDirection: 'column',
    },
  },
  {
    '& .react-datepicker__month': {
      margin: theme.BaselineSpacesSpace0,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  {
    '& .react-datepicker__month-container': {
      width: '100%',
    },
  },
  {
    '& .react-datepicker__current-month': {
      fontFamily: theme.BaselineFontFontFamilyPoppinsSemiBold,
      fontWeight: theme.BaselineFontFontWeightSemiBold,
      fontSize: theme.BaselineFontFontSize16,
      lineHeight: theme.BaselineFontFontSize20,
      color: theme.ElementsTextDefaultDark,
      minHeight: theme.BaselineSpacesSpace32,
      paddingBottom: theme.BaselineSpacesSpace16,
      borderBottom: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderHighlightStrong}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  {
    '& .react-datepicker__navigation--previous, & .react-datepicker__navigation--next': {
      top: theme.BaselineSpacesSpace8,
    },
  },
  {
    '& .react-datepicker__day-names': {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      minHeight: theme.BaselineSpacesSpace32,
      margin: theme.BaselineSpacesSpace0,
      paddingTop: theme.BaselineSpacesSpace16,
    },
  },
  {
    '& .react-datepicker__day-name': {
      fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
      fontSize: theme.BaselineFontFontSize14,
      color: theme.ElementsTextDefaultDark,
    },
  },
  {
    '& .react-datepicker__week': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 1,
      marginBottom: theme.BaselineSpacesSpace4,
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
  {
    '& .react-datepicker__navigation-icon::before': {
      borderWidth: `${theme.BorderBaseWidthSm} ${theme.BorderBaseWidthSm} 0 0`,
      borderColor: theme.ElementsBorderHighlightStrong,
    },
  },
]);
