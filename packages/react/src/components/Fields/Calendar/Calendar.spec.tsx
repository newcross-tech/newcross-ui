import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

describe('Calendar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the label if provided', () => {
    // Act
    render(<Calendar label="Test Calendar Label" />);

    // Assert
    expect(screen.getByText('Test Calendar Label')).toBeInTheDocument();
  });

  it('does not render label if label prop is undefined', () => {
    // Act
    render(<Calendar />);

    // Assert
    expect(screen.queryByText('Test Calendar Label')).toBeNull();
  });

  it('renders helper text if provided', () => {
    // Act
    render(<Calendar helperText="Some helper text" />);

    // Assert
    expect(screen.getByText('Some helper text')).toBeInTheDocument();
  });

  it('renders error text if provided', () => {
    // Act
    render(<Calendar errorText="Error message" />);

    // Assert
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
