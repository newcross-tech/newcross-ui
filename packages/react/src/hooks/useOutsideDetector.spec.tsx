import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';
import { createRef } from 'react';
import { byTestId } from 'testing-library-selector';
import { useOutsideDetector } from './useOutsideDetector';

describe('useOutsideDetector', () => {
  const ref = createRef<HTMLDivElement>();

  const testID = 'element';
  const ui = {
    element: byTestId(testID),
  };

  beforeEach(() => render(<div ref={ref} data-testid={testID}></div>));

  it('calls handler when click is outside element', () => {
    const handler = jest.fn();

    // Act
    renderHook(() => useOutsideDetector(ref, handler));

    fireEvent.click(document);

    // Assert
    expect(handler).toBeCalledTimes(1);
  });

  it('does not call handler when element is focused', () => {
    const handler = jest.fn();

    // Act
    renderHook(() => useOutsideDetector(ref, handler));

    fireEvent.focus(ui.element.get());

    // Assert
    expect(handler).not.toHaveBeenCalled();
  });
});
