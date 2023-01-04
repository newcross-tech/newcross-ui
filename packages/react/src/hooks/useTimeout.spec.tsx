import { renderHook } from '@testing-library/react';
import { useTimeout } from './useTimeout';

describe('useInterval', () => {
  const handler = jest.fn();

  it('calls handler when resize event', () => {
    // Act
    const { result } = renderHook(() => useTimeout(10, handler));

    result.current.clearHandler();
    // Assert
    setTimeout(() => expect(handler).toHaveBeenCalled(), 10);
  });
});
