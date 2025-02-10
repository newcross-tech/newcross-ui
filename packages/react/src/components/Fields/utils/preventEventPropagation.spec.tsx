import { render } from '@testing-library/react';
import React from 'react';
import { preventEventPropagation } from './preventEventPropagation';
import userEvent from '@testing-library/user-event';

describe('preventEventPropagation', () => {
  it('should call preventDefault and stopPropagation when triggered', () => {
    // Arrange
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as React.MouseEvent;

    // Act
    preventEventPropagation(mockEvent);

    // Assert
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });

  it('should prevent input from losing focus when clicking the clear icon', () => {
    // Arrange
    const { getByTestId } = render(
      <div>
        <input data-testid="text-input" />
        <button data-testid="clear-icon" onMouseDown={preventEventPropagation}>
          X
        </button>
      </div>
    );

    const input = getByTestId('text-input');
    const clearIcon = getByTestId('clear-icon');

    // Focus the input
    input.focus();
    expect(document.activeElement).toBe(input);

    // Act
    userEvent.click(clearIcon);

    // Assert
    expect(document.activeElement).toBe(input);
  });
});
