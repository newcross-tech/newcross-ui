import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { executeKeyPress } from '../../testUtils';
import { useKeypressListener } from './useKeypressListener';

describe('useKeypressListener', () => {
  const testID = 'element';
  beforeEach(() => render(<div data-testid={testID}></div>));

  it('calls handler key code is detected', () => {
    const handler = jest.fn();
    // Act
    renderHook(() => useKeypressListener('Space', handler));

    executeKeyPress(document, undefined, false);

    // Assert
    expect(handler).toBeCalledTimes(1);
  });

  it('does not call handler for invalid key code', () => {
    const handler = jest.fn();
    // Act
    renderHook(() => useKeypressListener('Space', handler));

    executeKeyPress(
      document,
      {
        key: 'Tab',
        code: 'Tab',
        charCode: 9,
      },
      false
    );

    // Assert
    expect(handler).not.toHaveBeenCalled();
  });
});
