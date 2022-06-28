const TITLE = 'Tabs';
const DESCRIPTION =
  'A segmented control/tabs component is a linear set of two or more segments, each of which functions as a mutually exclusive button. Within the control, all segments are equal in width. \n' +
  'They are typically styled as a toggle and used to switch between alternative views of similar or related content. ';

const DO = [
  'Limit the number of segments to improve usability. Wider segments are easier to tap. A segmented control should have 2 segments in app and a maximum of five on web.',
  'Keep segment content size consistent. Because all segments have equal width, it doesn’t look great if content fills some segments but not others.',
  'The divider is only shown between non-sellected segments.',
  'Labels should be written in sentence case and should be clear and concise.',
];

const DONT = [
  'Avoid mixing text and images in a segmented control. Although individual segments can contain text or images, mixing the two in a single control can lead to a disconnected and confusing interface.',
  'Change the font styles or padding between elements, as shown above.',
];

export { TITLE, DESCRIPTION, DO, DONT };
