import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { byTestId, byText } from 'testing-library-selector';
import { axe } from '../../../testUtils';
import Avatar, { AvatarProps } from './Avatar';

describe('Avatar Component', () => {
  const baseTestId = 'avatar';
  const ui = {
    avatarText: byTestId(`${baseTestId}-with-text`),
    avatarImage: byTestId(`${baseTestId}-with-image`),
    avatarIcon: byTestId(`${baseTestId}-with-icon`),
    avatarByReg: (reg: RegExp) => byText(reg),
  };

  it('should not have any a11y errors', async () => {
    // Arrange
    const props: AvatarProps = { name: 'John Doe' };

    // Act
    render(<Avatar {...props} />);

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully with text', () => {
    // Arrange
    const props: AvatarProps = { name: 'John Doe' };

    // Act
    render(<Avatar {...props} />);

    // Assert
    expect(ui.avatarText.get()).toBeTruthy();
    expect(ui.avatarByReg(/JD/i).get()).toBeTruthy();
  });

  it('renders successfully with image and source', () => {
    // Arrange
    const props: AvatarProps = {
      source:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80',
    };

    // Act
    render(<Avatar {...props} />);

    // Assert
    expect(ui.avatarImage.get()).toBeTruthy();
  });

  it('renders successfully with icon', () => {
    // Arrange
    const props: AvatarProps = {};

    // Act
    render(<Avatar {...props} />);

    // Assert
    expect(ui.avatarIcon.get()).toBeTruthy();
  });
  it('errors when image source is broken or not found', () => {
    // Arrange
    const props: AvatarProps = {
      source: 'this is broken',
    };

    // Act
    render(<Avatar {...props} />);
    fireEvent.error(ui.avatarImage.get());

    // Assert
    expect(ui.avatarIcon.get()).toBeTruthy();
  });
});
