import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';
import { createRef } from 'react';
import { useOutsideDetector } from './useOutsideDetector';

describe('useOutsideDetector', () => {
  const handler = jest.fn();
  const ref = createRef<HTMLDivElement>();

  beforeEach(() => render(<div ref={ref} data-testid={'element'}></div>));

  it('calls handler when click is outside element', () => {
    // Act
    renderHook(() => useOutsideDetector(ref, handler));

    fireEvent.click(document);

    // Assert
    expect(handler).toBeCalledTimes(1);
  });
});
