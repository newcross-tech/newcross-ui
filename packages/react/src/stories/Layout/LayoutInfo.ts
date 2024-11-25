const TITLE = 'Layout';
const DESCRIPTION = `
The Layout component provides a structured grid for building applications, with distinct areas for the header, sidebar, and main content. It supports responsive design and adapts its layout for different screen sizes.<br/><br/>

**Header**<br/>
The header section is intended for top-level navigation, branding, or primary actions. It adapts responsively to be visible only on smaller screens when a sidebar is hidden.<br/><br/>

**Sidebar**<br/>
The sidebar is designed for secondary navigation or additional context. It can be hidden for smaller screen sizes and displayed on larger screens.<br/><br/>

**Main Content**<br/>
The main content area is designed to house the primary content of the page, and it ensures proper spacing and alignment.
`;

const DO = [
  'Use the header for primary navigation or branding elements.',
  'Use the sidebar for secondary navigation or additional contextual information.',
  'Ensure the main content is responsive and adapts well to different screen sizes.',
  'Provide a fallback for loading content when using React Suspense.',
];

const DONT = [
  'Do not overload the sidebar with excessive content.',
  'Do not use the Layout component without properly structuring its header, sidebar, and main content.',
  'Avoid hardcoding grid values; leverage the theme for consistent spacing and layout.',
];

export { TITLE, DESCRIPTION, DO, DONT };
