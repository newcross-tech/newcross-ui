/**
 * Helper function to execute callback on space keyboard event only
 * @param event
 * @param onPressCallback
 */
export function onSpacePressTrigger(
  event: React.KeyboardEvent<HTMLElement>,
  onPressCallback: VoidFunction
) {
  event.preventDefault();
  if (event.code === 'Space') {
    onPressCallback();
  }
}
