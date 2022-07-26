const TITLE = 'Accordion';
const DESCRIPTION =
  'The accordion is used to present users with the progressive disclosure of several sections of information in a compact vertical space. It is composed of 2 or more containers that can be expanded or collapsed to reveal or hide their contents. Accordions hide content from the user. Not all users will notice them or understand how they work. For this reason, you should only use them in specific situations and if user research supports it.';
const DO = [
  ' Only use an accordion if there’s evidence it’s helpful for the user to: see an overview of multiple, related sections of content choose to show and hide sections that are relevant to them look across information that might otherwise be on different pages',
];

const DONT = [
  'Do not use an accordion for content that all users need to see.',
  'Do not put accordions within accordions, as it will make content difficult to find.',
  'Do not use the accordion component if the amount of content inside will make the page slow to load.',
  'Do not use accordions to split up a series of questions. Use separate pages instead.',
];

export { TITLE, DESCRIPTION, DO, DONT };
