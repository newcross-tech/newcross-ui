import React from 'react';
import { render } from '@testing-library/react-native';
import Header, { HeaderProps } from './Header';
import { Text } from 'react-native';

describe('Header Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: HeaderProps = { children: <Text>'Welcome back!'</Text> };

    // Act
    const { getByText } = render(<Header {...props} />);

    // Assert

    expect(getByText(/Welcome back!/i)).toBeTruthy();
  });
  it('renders successfully with header tail content', () => {
    // Arrange
    const props: HeaderProps = {
      children: 'Welcome back!',
      hasHeaderTail: true,
    };

    // Act
    const { getByTestId } = render(<Header {...props} />);

    // Assert
    expect(getByTestId('header-tail-content')).toBeTruthy();
  });
});
