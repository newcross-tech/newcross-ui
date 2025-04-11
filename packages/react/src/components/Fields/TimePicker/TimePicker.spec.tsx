import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TimePicker from './TimePicker';

describe('TimePicker', () => {
  // Test cases for default starting options when no startTime is provided
  it.each([
    [
      'should render options starting from "00:00" when startTime is not provided',
      {
        baseDate: new Date('2021-01-01T00:00:00'),
        // No startTime provided → defaults to "00:00"
      },
      '00:00',
    ],
    [
      'should render options starting from the given startTime',
      {
        baseDate: new Date('2021-01-01T00:00:00'),
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

  it('should disable the TimePicker when disabled prop is true', async () => {
    // Arrange: Render TimePicker with disabled prop set.
    render(
      <TimePicker
        baseDate={new Date('2021-01-01T00:00:00')}
        disabled
        label="TimePicker"
        placeholder="Select time"
      />
    );
    // Act: Retrieve the combobox (even if hidden) using getByRole.
    const combobox = screen.getByRole('combobox', { hidden: true });
    // Assert: The combobox should be disabled.
    expect(combobox).toBeDisabled();
  });
});
