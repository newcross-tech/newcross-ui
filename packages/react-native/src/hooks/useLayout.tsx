import { useCallback, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

export type LayoutSize = { width: number; height: number };

export const useLayout = () => {
  const [size, setSize] = useState<LayoutSize>({ width: 0, height: 0 });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;

    setSize({ width, height });
  }, []);

  return { size, onLayout };
};
