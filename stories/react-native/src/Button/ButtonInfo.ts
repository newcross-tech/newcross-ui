const TITLE = 'Button';
const DESCRIPTION =
  'Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.\n\nPrimary button\n\nFor the principal call to action on the page. Primary buttons should only appear once per screen.\n\nSecondary button\n\nFor secondary actions on each page. Secondary buttons can only be used in conjunction with a primary button. As part of a pair, the secondary button’s function is to perform the negative action of the set, such as “Cancel” or “Back”. Do not use a secondary button in isolation and do not use a secondary button for a positive action.';

const DO = [
  'Use buttons to communicate actions users can take and to allow users to interact with the page. Each page should have only one primary button, and any remaining calls to action should be represented as lower emphasis buttons.',
];

const DONT = [
  'Do not use buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page.',
  'Do not change the background or text colour of the buttons.',
];

export { TITLE, DESCRIPTION, DO, DONT };
