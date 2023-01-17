import { renderHook, act } from '@testing-library/react-native';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';
import { useLayout } from './useLayout';

describe('useLayout', () => {
  it('returns size of given element when layout event is triggered', () => {
    // Arrange
    const event = {
      nativeEvent: { layout: { height: 10, width: 30 } as LayoutRectangle },
    } as LayoutChangeEvent;

    // Act
    const { result } = renderHook(() => useLayout());

    // Assert
    expect(result.current.size.width).toBe(0);
    expect(result.current.size.height).toBe(0);

    // Act
    act(() => {
      result.current.onLayout(event);
    });

    // Assert
    expect(result.current.size.width).toBe(30);
    expect(result.current.size.height).toBe(10);
  });
});
