const TITLE = 'Calendar';
const DESCRIPTION =
  'The ‘Calendar’ component allows users to select a date or range of dates. They should be suitable for the context in which they appear. \n' +
  'To navigate across months, the user can swipe horizontally or use the month buttons on either side to tap through consecutive months. ';

const DO = [
  'Always use ‘Gravitas’ as the selected state.',
  'Show month names in short form, restricted to three letters .i.e. ‘Jun’ not ‘June’.',
];

const DONT = [
  'Change any of the state colours or shapes.',
  'Use when the user is required to enter a birth date. An entry or date scroller is more appropriate for this need.',
  'Change the information or colours in the key defined.',
  'The representation of states.',
  'Change the font styles.',
];

export { TITLE, DESCRIPTION, DO, DONT };
