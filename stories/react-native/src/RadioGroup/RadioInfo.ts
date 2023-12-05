const TITLE = 'Radio Group';
const DESCRIPTION =
  'A radio group allows users to choose a single option from a list by presenting a set of radio buttons within a container. When users need to see all available options, radio buttons are preferable. If the options can be collapsed, consider using a dropdown menu to save space.\n\nUse radio groups to:\n- Select a single option from a list.\n- Clearly present and identify each option with its label.';

const DO = [
  'Use radio groups when only one item can be selected from a list.',
  'Always provide a radio value for each option.',
  'Use `initialSelected` to set the default selected item from a list.',
  'Use `disabled` as an array of values to disable specific items from a list.',
];

const DONT = [
  'Avoid using radios alone. Opt for radio groups instead.',
  'Avoid altering the size or color of individual radio buttons.',
  'Avoid using radio buttons without providing a clear label for each option.',
];

export { TITLE, DESCRIPTION, DO, DONT };
