import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Link, { LinkProps } from './Link';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: 'circle-chevron-right',
}));

jest.mock('@fortawesome/pro-light-svg-icons/faCircleChevronRight', () => ({
  faCircleChevronRight: 'bar',
}));

const renderComponent = (props: LinkProps) => {
  const customProps: LinkProps = {
    children: 'My Link',
    ...props,
  };

  render(<Link {...customProps} />);
};

describe('Link Component', () => {
  it('should render successfully', () => {
    // Act
    renderComponent({});

    // Assert
    expect(screen.getByText(/My Link/i)).toBeTruthy();
  });

  it('triggers onClick successfully', () => {
    // Arrange
    const handleClick = jest.fn();
    const props: LinkProps = {
      onClick: handleClick,
    };

    // Act
    renderComponent({ ...props });

    const link = screen.getByTestId('link-component');
    fireEvent.click(link);

    // Assert
    expect(handleClick).toBeCalled();
  });

  it('hides right icons when hasIcon is false', () => {
    // Arrange
    const props: LinkProps = {
      hasIcon: true,
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(screen.getByTestId('link-icon')).toBeTruthy();
  });
});
