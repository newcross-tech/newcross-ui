const TITLE = 'Page Header';

const DESCRIPTION =
  'The Page Header component provides a consistent structure for page titles and actions. </br></br>' +
  'It includes a back icon for navigation, a title representing the page’s purpose, a subtitle for additional context, and an optional secondary action. </br></br>' +
  'Usage guidelines: </br>' +
  '<ul>' +
  '<li> The back icon should always be used to navigate to the previous page. </li> </br>' +
  '<li> The title represents the page’s main heading and should be concise yet descriptive. </li> </br>' +
  '<li> The subtitle provides a brief description or extra context about the page. </li> </br>' +
  '<li> The secondary action should only be used for additional non-primary actions, such as triggering a print action or opening a related feature. </li> </br>' +
  '</ul>' +
  'Maintaining consistency in how these elements are used ensures a clear and structured user experience. </br> </br>' +
  'Only the secondary action button should be interactive aside from the back icon, as the title and subtitle serve informational purposes.';

const DO = [
  'Use the back icon only for navigating to the previous page.',
  'Keep the title clear and relevant to the page’s content.',
  'Use the subtitle to provide a short, meaningful description.',
  'Ensure the secondary action is a supplementary feature, such as printing the page.',
];

const DONT = [
  'Use the secondary action for primary navigation or major actions.',
  'Include unnecessary interactions in the title or subtitle.',
  'Use the back icon for anything other than navigating to the previous page.',
  'Overload the subtitle with too much information; keep it concise.',
];

export { TITLE, DESCRIPTION, DO, DONT };
