const TITLE = 'Container';
const DESCRIPTION = `
The 'Container' component is a versatile tool for managing layout and spacing in your applications. It supports responsive behavior out of the box and ensures consistent use of semantic spacing tokens.
<br/><br/>
<b>Key Updates:</b><br/>
- Use only semantic spacing tokens: [\`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\`, \`xxl\`] for all spacing-related props (\`m\`, \`p\`, \`gap\`, etc.).<br/>
- Avoid legacy props such as \`mobileM\` or \`tabletP\`, as they break the responsive behavior and are being deprecated.<br/>
- Use the \`Container\` component for all spacing applications. Avoid applying CSS directly for spacing purposes to maintain consistency and scalability.
`;

const DO = [
  'Use the semantic spacing tokens for all spacing-related props.',
  'Use the Container component as a wrapper for your custom components to manage layout and spacing consistently.',
  'Leverage responsive behavior by relying solely on semantic spacing tokens.',
];

const DONT = [
  'Use legacy props like `mobileM` or `tabletP`. These will be deprecated.',
  'Apply raw CSS directly for spacing (e.g., margin, padding). Use Container instead.',
  'Use non-semantic spacing values, as they will no longer be supported.',
];

export { TITLE, DESCRIPTION, DO, DONT };
