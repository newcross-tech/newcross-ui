import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TimePicker from './TimePicker';

describe('TimePicker', () => {
  // Test cases for default starting options when no startTime is provided
  it.each([
    [
      'should render options starting from "00:00" when startTime is not provided',
      {
        baseDate: '2021-01-01T00:00:00',
        // No startTime provided → defaults to "00:00"
      },
      '00:00',
    ],
    [
      'should render options starting from the given startTime',
      {
        baseDate: '2021-01-01T00:00:00',
        startTime: '08:00',
      },
      '08:00',
    ],
  ])('%s', async (_, props, expectedOption) => {
    // Arrange: Render the TimePicker with given props.
    render(
      <TimePicker {...props} label="TimePicker" placeholder="Select time" />
    );
    // Act: Open the dropdown by clicking the combobox.
    const combobox = screen.getByRole('combobox', { hidden: true });
    await userEvent.click(combobox);
    // Assert: Verify that the expected option is rendered.
    await waitFor(() => {
      expect(screen.getByText(expectedOption)).toBeInTheDocument();
    });
  });

  it.each([
    [
      'should disable the TimePicker when disabled prop is true',
      { baseDate: '2021-01-01T00:00:00', disabled: true },
    ],
    [
      'should disable the TimePicker when baseDate is missing',
      {
        /* no baseDate prop */
      },
    ],
  ])('%s', async (_, props) => {
    render(
      <TimePicker {...props} label="TimePicker" placeholder="Select time" />
    );
    const combobox = screen.getByRole('combobox', { hidden: true });
    expect(combobox).toBeDisabled();
  });

  it('should call onChange with the selected time when an option is clicked', async () => {
    const onChange = jest.fn();
    render(
      <TimePicker
        baseDate="2021-01-01T00:00:00"
        onChange={onChange}
        label="TimePicker"
        placeholder="Select time"
      />
    );
    // Open the dropdown by clicking the combobox.
    const combobox = screen.getByRole('combobox', { hidden: true });
    await userEvent.click(combobox);
    // Click the '00:00' option.
    await userEvent.click(screen.getByText('00:00'));
    // Assert that onChange was called once with '00:00'
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
