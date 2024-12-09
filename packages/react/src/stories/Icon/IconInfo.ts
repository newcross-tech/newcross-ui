const TITLE = 'Icon';
const DESCRIPTION = `
The \`Icon\` component provides a consistent and accessible way to use icons throughout the application. It uses the same sizing and color variants as the Typography component, ensuring uniformity and ease of integration.

<br/><br/>
<b>Why use the Icon component?</b><br/><br/>
- Ensures consistent sizing and colors across the app.<br/>
- Adheres to responsive and semantic design principles.<br/>
- Improves accessibility with support for ARIA attributes.
`;

const DO = [
  'Use the Icon component for all icon implementations.',
  'Choose a variant based on Typography sizes for consistency.',
  'Provide accessible attributes like aria-label for meaningful usage.',
];

const DONT = [
  'Avoid using raw FontAwesome or other icon libraries directly.',
  'Do not manually set icon sizes or colors; use variants instead.',
  'Avoid applying custom styles directly to the Icon component.',
];

export { TITLE, DESCRIPTION, DO, DONT };
