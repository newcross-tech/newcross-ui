import { render, renderHook } from '@testing-library/react';
import React from 'react';
import { byTestId } from 'testing-library-selector';
import { executeSpace, executeTab } from '../utils/test';
import { useKeypressListener } from './useKeypressListener';

const testID = 'element';

describe('useKeypressListener', () => {
  const ui = {
    element: byTestId(testID),
  };

  beforeEach(() => render(<div data-testid={testID}></div>));

  it('calls handler key code is detected', async () => {
    const handler = jest.fn();
    // Act
    renderHook(() => useKeypressListener('Space', handler));

    executeSpace('keyDown', ui.element.get());
    executeSpace('keyUp', ui.element.get());

    // Assert
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('does not call handler for invalid key code', () => {
    const handler = jest.fn();
    // Act
    renderHook(() => useKeypressListener('Space', handler));

    executeTab('keyDown', ui.element.get());
    executeTab('keyUp', ui.element.get());

    // Assert
    expect(handler).not.toHaveBeenCalled();
  });
});
