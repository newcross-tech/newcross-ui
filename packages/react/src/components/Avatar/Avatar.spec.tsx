import Avatar, { AvatarProps } from './Avatar';
import { axe } from '../../utils/test/axeConfig';
import { fireEvent, render } from '@testing-library/react';
import { byTestId, byText } from 'testing-library-selector';

const renderComponent = (customProps: Partial<AvatarProps>) => {
  const props = {
    name: 'John Doe',
    ...customProps,
  };

  render(<Avatar {...props} />);
};

const baseTestId = 'avatar';

describe('Avatar Component', () => {
  const ui = {
    avatarImage: byTestId(`${baseTestId}-with-image`),
    avatarIcon: byTestId(`${baseTestId}-with-icon`),
    avatarByReg: (reg: RegExp) => byText(reg),
  };

  it('should not have any a11y errors', async () => {
    // Act
    renderComponent({});

    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });

  it('renders successfully with text', () => {
    // Act
    renderComponent({});

    // Assert
    expect(ui.avatarByReg(/JD/i).get()).toBeInTheDocument();
  });

  it('renders successfully with image and source', () => {
    // Arrange
    const props: AvatarProps = {
      source:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80',
    };

    // Act
    renderComponent({ ...props });

    // Assert
    expect(ui.avatarImage.get()).toBeInTheDocument();
  });

  it('renders successfully with icon', () => {
    // Act
    renderComponent({ name: '' });

    // Assert
    expect(ui.avatarIcon.get()).toBeInTheDocument();
  });

  it('errors when image source is broken or not found', () => {
    // Act
    renderComponent({ source: 'this is broken' });
    fireEvent.error(ui.avatarImage.get());

    // Assert
    expect(ui.avatarIcon.query()).not.toBeInTheDocument();
  });
});
