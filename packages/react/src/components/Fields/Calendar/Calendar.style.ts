import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { commonDatepickerStyles } from '../DatePicker';

export const ReactCalendarWrapper = styled.div(({ theme }) => [
  commonDatepickerStyles({ theme }),
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
    '& .react-datepicker__navigation-icon::before': {
      borderWidth: `${theme.BorderBaseWidthSm} ${theme.BorderBaseWidthSm} 0 0`,
      borderColor: theme.ElementsBorderHighlightStrong,
    },
  },
]);
