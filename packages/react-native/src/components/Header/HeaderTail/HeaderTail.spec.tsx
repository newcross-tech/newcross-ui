import React from 'react';
import { render } from '@testing-library/react-native';
import HeaderTail, { HeaderTailProps } from './HeaderTail';
import { HeaderColors } from '../Header.types';

describe('Header Tail Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: HeaderTailProps = { color: HeaderColors.primary };

    // Act
    const { getByTestId } = render(<HeaderTail {...props} />);

    // Assert
    expect(getByTestId('header-tail')).toBeTruthy();
  });
});
