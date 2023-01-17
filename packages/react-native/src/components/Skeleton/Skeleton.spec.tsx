import React from 'react';
import { View } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import Skeleton, { SkeletonProps } from './Skeleton';

describe('Skeleton', () => {
  it('renders successfully', () => {
    // Arrange
    const props: SkeletonProps = { testID: 'skeleton', height: 20, width: 100 };

    // Act
    render(<Skeleton {...props} />);

    // Assert
    expect(screen.getByTestId('skeleton')).toBeDefined();
  });

  it('renders default linear gradient when no gradient component is provided', () => {
    // Arrange
    const props: SkeletonProps = { testID: 'skeleton', height: 20, width: 100 };

    // Act
    render(<Skeleton {...props} />);

    // Assert
    expect(screen.getByTestId('skeleton-linear-gradient')).toBeDefined();
  });

  it('does not renders default linear gradient when custom gradient component is provided', () => {
    // Arrange
    const props: SkeletonProps = {
      testID: 'skeleton',
      height: 20,
      width: 100,
      LinearGradientComponent: () => <View />,
    };

    // Act
    render(<Skeleton {...props} />);

    // Assert
    expect(screen.queryByTestId('skeleton-linear-gradient')).toBeNull();
  });
});
