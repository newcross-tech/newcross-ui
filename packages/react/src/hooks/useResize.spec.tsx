import { render, renderHook } from '@testing-library/react';
import * as React from 'react';
import { createRef } from 'react';
import { useResize } from './useResize';

describe('useResize', () => {
  const handler = jest.fn();
  const ref = createRef<HTMLDivElement>();

  const testID = 'element';

  beforeEach(() => render(<div ref={ref} data-testid={testID}></div>));

  it('calls handler when resize event', () => {
    // Act
    renderHook(() =>
      useResize({
        ref,
        containerSize: ref?.current?.scrollHeight || 0,
        onResize: handler,
      })
    );

    window.dispatchEvent(new Event('resize'));

    // Assert
    expect(handler).toHaveBeenCalledTimes(2);
  });
});
