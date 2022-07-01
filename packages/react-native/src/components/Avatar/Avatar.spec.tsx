import React from 'react';
import Avatar, { AvatarProps } from './Avatar';
import { fireEvent, render } from '@testing-library/react-native';
describe('Avatar Component', () => {
  it('renders successfully with text', () => {
    // Arrange
    const props: AvatarProps = { name: 'John Doe' };

    // Act
    const { getByTestId, getByText } = render(<Avatar {...props} />);

    // Assert
    expect(getByTestId('avatar-with-text')).toBeTruthy();
    expect(getByText(/JD/i)).toBeTruthy();
  });

  it('renders successfully with image and source', () => {
    // Arrange
    const props: AvatarProps = {
      source: {
        uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80',
      },
    };

    // Act
    const { getByTestId } = render(<Avatar {...props} />);

    // Assert
    expect(getByTestId('avatar-with-image')).toBeTruthy();
  });

  it('renders successfully with icon', () => {
    // Arrange
    const props: AvatarProps = {};

    // Act
    const { getByTestId } = render(<Avatar {...props} />);

    // Assert
    expect(getByTestId('avatar-with-icon')).toBeTruthy();
  });

  it('errors when image source is broken or not found', () => {
    // Arrange
    const props: AvatarProps = {
      source: {
        uri: 'this is broken',
      },
    };

    // Act
    const { getByTestId } = render(<Avatar {...props} />);
    fireEvent(getByTestId('avatar-with-image'), 'onError');
    // Assert
    expect(getByTestId('avatar-with-icon')).toBeTruthy();
  });
});
