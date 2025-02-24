import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const ReactDatePicker = styled(DatePicker)({
  '.react-datepicker': {
    width: '240px',
    background: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  '.react-datepicker__header': {
    backgroundColor: '#002858',
    border: 'none',
    borderRadius: '8px 8px 0 0',
    padding: '8px',
  },
  '.react-datepicker__current-month': {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#ffffff',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  '.react-datepicker__navigation--previous, .react-datepicker__navigation--next': {
    top: '16px',
  },
  '.react-datepicker__month': {
    margin: 0,
    padding: '8px',
  },
  '.react-datepicker__day-names': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '4px',
  },
  '.react-datepicker__day-name': {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '14px',
    color: '#f5f5f5',
  },
  '.react-datepicker__week': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.react-datepicker__day': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '14px',
    width: '32px',
    height: '32px',
    margin: '4px',
    borderRadius: '4px',
    color: '#f5f5f5',
    '&:hover': {
      background: 'rgba(167, 246, 232, 0.5)',
      cursor: 'pointer',
    },
  },
  '.react-datepicker__day--selected, .react-datepicker__day--today': {
    background: '#a7f6e8',
    color: '#002858',
  },
  '.react-datepicker__day--outside-month': {
    opacity: 0.4,
  },
  '.react-datepicker__triangle': {
    display: 'none',
  },
});
