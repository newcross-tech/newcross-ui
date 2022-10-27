import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetProps } from './BottomSheet';

describe('BottomSheet', () => {
  it('renders Backdrop when isOpen is true', () => {
    // Arrange
    const props: BottomSheetProps = {
      children: <Text>Bottom sheet</Text>,
      isOpen: true,
      hasBackdrop: true,
    };

    // Act
    const { getByTestId } = render(
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <BottomSheet {...props} />
      </SafeAreaProvider>
    );

    // Assert
    expect(getByTestId('bottom-sheet-backdrop')).toBeTruthy();
  });

  it('renders successfuly when isOpen is true', () => {
    // Arrange
    const props: BottomSheetProps = {
      children: <Text>Bottom sheet</Text>,
      isOpen: true,
    };

    // Act
    const { getByTestId } = render(
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <BottomSheet {...props} />
      </SafeAreaProvider>
    );
    // Assert
    expect(getByTestId('bottom-sheet-visible')).toBeTruthy();
  });

  it('is hidden successfuly when isOpen is false', () => {
    // Arrange
    const props: BottomSheetProps = {
      children: <Text>Bottom sheet</Text>,
      isOpen: false,
    };
    // Act
    const { getByTestId } = render(
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <BottomSheet {...props} />
      </SafeAreaProvider>
    );
    // Assert
    expect(getByTestId('bottom-sheet-hidden')).toBeTruthy();
  });
});
