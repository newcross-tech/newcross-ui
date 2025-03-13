import styled from 'styled-components';
import Container from '../../../Container';

export const UpperHeaderContainer = styled(Container)(({ theme }) => [
  {
    height: theme.BaselineSpacesSpace32,
  },
]);

export const DatePickerMonthYearSelect = styled.select(({ theme }) => [
  {
    paddingTop: theme.BaselineSpacesSpace4,
    paddingBottom: theme.BaselineSpacesSpace4,
    paddingLeft: theme.BaselineSpacesSpace8,
    paddingRight: theme.BaselineSpacesSpace8,
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: theme.BaselineFontFontSize14,
    color: theme.ElementsTextActionSecondaryLight,
  },
]);
