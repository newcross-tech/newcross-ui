import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Link, { LinkProps } from './Link';

const iconName = 'circle-chevron-right';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: iconName,
}));

jest.mock('@fortawesome/pro-light-svg-icons', () => ({
  faCircleChevronRight: 'bar',
}));

describe('Link Component', () => {
  it('should render successfully', () => {
    // Arrange
    const props: LinkProps = {
      children: 'My Link',
    };

    // Act
    const { getByText } = render(<Link {...props} />);

    // Assert
    expect(getByText(/My Link/i)).toBeTruthy();
  });

  it('triggers onPress successfully', () => {
    // Arrange
    const handlePress = jest.fn();
    const props: LinkProps = {
      children: 'My Link',
      onPress: handlePress,
    };

    // Act
    const { getByRole } = render(<Link {...props} />);
    const link = getByRole('link');
    fireEvent.press(link);

    // Assert
    expect(handlePress).toHaveBeenCalledWith();
  });

  it('hides right icons when hasIcon is false', () => {
    // Arrange
    const props: LinkProps = {
      children: 'My Link',
      hasIcon: true,
    };

    // Act
    const { getByTestId } = render(<Link {...props} />);

    // Assert
    expect(getByTestId('link-icon')).toBeTruthy();
  });
});
