import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Radio, { RadioProps } from './Radio';

import axe from '../../../testutils';

const renderComponent = (props: RadioProps) => render(<Radio {...props} />);

describe('Radio', () => {
  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({ label: 'Hello' });

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
  it('renders with given label and default view', () => {
    // Act
    renderComponent({ label: 'Hello' });

    // Assert
    expect(screen.getByText(/hello/i)).toBeTruthy();
    expect(screen.queryByTestId('radio-label')).toBeTruthy();
  });

  it("doesn't show label when label value is not provided", () => {
    // Act
    renderComponent({ label: undefined });

    // Assert
    expect(screen.queryByTestId(/radio-label/i)).toBeFalsy();
  });

  it(`calls onChange when radio component is not disabled`, () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    renderComponent({ disabled: false, onChange });

    const radio = screen.getByRole('radio');

    fireEvent.click(radio);

    // Assert
    expect(onChange).toBeCalled();
  });

  it(`doesn't call onChange when radio component is disabled`, () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    renderComponent({ disabled: true, onChange });

    const radio = screen.getByRole('radio');

    fireEvent.click(radio);

    // Assert
    expect(onChange).not.toBeCalled();
  });

  it(`doesn't call onChange when onChange prop is not provided`, () => {
    // Arrange
    const onChange = jest.fn();

    // Act
    renderComponent({ disabled: false });

    const radio = screen.getByRole('radio');

    fireEvent.click(radio);

    // Assert
    expect(onChange).not.toBeCalled();
  });
});
