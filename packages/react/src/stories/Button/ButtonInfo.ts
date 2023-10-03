const TITLE = 'Button';
const DESCRIPTION = `Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.<br/><br/>Primary button<br/><br/>For the principal call to action on the page. Primary buttons should only appear once per screen.<br/><br/>Secondary button<br/><br/>For secondary actions on each page. Secondary buttons can only be used in conjunction with a primary button. As part of a pair, the secondary button’s function is to perform the negative action of the set, such as “Cancel” or “Back”. Do not use a secondary button in isolation and do not use a secondary button for a positive action.<br/><br/>Danger button<br/><br/>The danger variant button is designed to prompt users to exercise caution and consider their actions carefully (e.g. actions that cannot be easily undone), use it <strong>sparingly</strong>.`;

const DO = [
  'Use buttons to communicate actions users can take and to allow users to interact with the page. Each page should have only one primary button, and any remaining calls to action should be represented as lower emphasis buttons.',
  'Danger button - ONLY use it for actions that that cannot be easily undone by a user (for example, permanently deleting a record)',
];

const DONT = [
  'Do not use buttons as navigational elements. Instead, use links when the desired action is to take the user to a new page.',
  'Do not change the background or text colour of the buttons.',
  'Danger button - avoid using a positive label (e.g. “Confirm”) with the danger variant',
  'Danger button - Not all deletions require danger variant e.g when a delete/remove actions are reversible',
];

export { TITLE, DESCRIPTION, DO, DONT };
