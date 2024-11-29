const TITLE = 'Typography';
const DESCRIPTION = `
Typography provides a set of responsive, accessible, and semantic text styles for consistent use across the application. The component automatically adjusts font sizes based on the screen size and ensures text remains accessible using semantic tags.

<br/><br/>
<b>Why use the Typography component?</b><br/><br/>
- Typography tokens are responsive: Developers no longer need to manage font sizes manually across breakpoints.<br/>
- Semantic tags: Ensures accessibility and meaningful HTML structure.<br/>
- Centralized styling: Using variants eliminates the need for custom sizes or font weights, ensuring design consistency.
`;

const DO = [
  'Use the Typography component for all text elements to ensure responsiveness and consistency.',
  'Use action paragraph variants (e.g., `p1Action`) for elements requiring uppercase transformation.',
];

const DONT = [
  'Avoid using legacy variants like `heading1`, `paragraph1`. They will be deprecated.',
  'Do not manually set font sizes, weights, or uppercase transformations. Use variants instead.',
  'Avoid directly applying custom CSS for text styles when Typography variants can handle it.',
];

export { TITLE, DESCRIPTION, DO, DONT };
