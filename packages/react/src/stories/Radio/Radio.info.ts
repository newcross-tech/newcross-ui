const TITLE = 'Radio';
const DESCRIPTION =
  'Radio buttons allow the user to select one option from a set. Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a dropdown menu because it uses less space.<br/><br/>Use radio buttons to:<br/>' +
  ' <ul> <li> Select a single option from a list </li>  </br><li> Expose all available options </li> </ul>';
const DO = [
  'Use radio buttons when only one item can be selected from a list.',
  'Always use and identify it’s label.',
];

const DONT = [
  "Don't use checkboxes when only one item can be selected from a list. Use radio buttons instead.",
  "Don't change the size or colour of the radio button.",
  'Use without a label.',
];

export { TITLE, DESCRIPTION, DO, DONT };
