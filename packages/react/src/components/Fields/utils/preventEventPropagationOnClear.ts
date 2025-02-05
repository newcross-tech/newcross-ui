/**
 * Prevents the input from losing focus when clicking on the clear icon
 * Preventing on the onClick does not work as expected, hence using onMouseDown
 */

export const preventEventPropagationOnClear = (event: React.MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
