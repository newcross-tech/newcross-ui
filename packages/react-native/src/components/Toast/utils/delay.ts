/**
 * takes a fn to execute when the timeout duration is reached
 * @param fn
 * @param duration
 */
export const delay = (fn: VoidFunction, duration: number) => {
  setTimeout(() => {
    return fn();
  }, duration);
};
