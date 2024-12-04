import React from 'react';
import { render, screen } from '@testing-library/react';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import Icon, { IconProps } from './Icon';

describe('Icon Component', () => {
  const renderComponent = () => {
    const defaultProps: IconProps = {
      icon: faChevronRight,
      variant: 'h1',
      color: 'defaultDark',
      mode: 'light',
      testID: 'icon-mock',
    };
    return render(<Icon {...defaultProps} />);
  };

  it('renders the Icon component successfully', () => {
    // Arrange & Act
    renderComponent();

    // Assert
    const container = screen.getByTestId('icon-mock');
    expect(container).toBeInTheDocument();
  });
});
