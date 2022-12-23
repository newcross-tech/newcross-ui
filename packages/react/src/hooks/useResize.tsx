import { RefObject, useEffect } from 'react';

type ResizeArgs<T> = {
  ref?: RefObject<T>;
  containerSize: number;
  onResize: VoidFunction;
};

export function useResize<T>({ ref, containerSize, onResize }: ResizeArgs<T>) {
  useEffect(() => {
    const onResizeHandler = () => {
      ref && ref.current && onResize();
    };

    onResizeHandler();
    window.addEventListener('resize', () => onResizeHandler());
    return () => window.removeEventListener('resize', onResizeHandler);
  }, [ref, containerSize]);
}
