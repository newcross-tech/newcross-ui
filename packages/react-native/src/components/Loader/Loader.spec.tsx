import React from 'react';
import { View } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import { Loader, LoaderProps } from './Loader';

describe('Loader', () => {
  it('renders successfully', () => {
    // Act
    render(<Loader testID="screen-loader" />);

    // Assert
    expect(screen.getByTestId('screen-loader')).toBeDefined();
    expect(screen.getByTestId('healthforce-icon')).toBeDefined();

    expect(screen.getByText('Loading')).toBeDefined();

    expect(screen.getByTestId('loader-dot-0')).toBeDefined();
    expect(screen.getByTestId('loader-dot-1')).toBeDefined();
    expect(screen.getByTestId('loader-dot-2')).toBeDefined();
  });

  it('renders custom icon & text', () => {
    // Arrange
    const props: LoaderProps = {
      testID: 'screen-loader',
      icon: <View></View>,
      text: 'Any other text',
    };

    // Act
    render(<Loader {...props} />);

    // Assert
    expect(screen.getByTestId('loader-icon')).toBeDefined();
    expect(screen.queryByTestId('healthforce-icon')).toBeNull();

    expect(screen.getByText('Any other text')).toBeDefined();

    expect(screen.getByTestId('loader-dot-0')).toBeDefined();
    expect(screen.getByTestId('loader-dot-1')).toBeDefined();
    expect(screen.getByTestId('loader-dot-2')).toBeDefined();
  });
});
