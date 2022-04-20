import React, { createRef } from 'react';
import { render, act } from '@testing-library/react-native';
import { Text } from 'react-native';
import BottomSheet, {
  BottomSheetProps,
  BottomSheetRefProps,
} from './BottomSheet';

describe('BottomSheet', () => {
  it('opens bottom sheet when expand function is called', () => {
    // Arrange
    const props: BottomSheetProps = {
      hasBackdrop: false,
      children: <Text>Bottom sheet</Text>,
    };
    const ref = createRef<BottomSheetRefProps>();

    // Act
    const { getByTestId, queryByTestId } = render(
      <BottomSheet ref={ref} {...props} />
    );

    act(() => {
      ref.current?.expand();
    });

    // Assert
    expect(getByTestId('bottom-sheet-visible')).toBeTruthy();
    expect(queryByTestId('bottom-sheet-backdrop')).toBeFalsy();
  });

  it('closes bottom sheet when expand collapse is called', () => {
    // Arrange
    const props: BottomSheetProps = {
      children: <Text>Bottom sheet</Text>,
    };
    const ref = createRef<BottomSheetRefProps>();

    // Act
    const { getByTestId } = render(<BottomSheet ref={ref} {...props} />);

    act(() => {
      ref.current?.collapse();
    });

    // Assert
    expect(getByTestId('bottom-sheet-hidden')).toBeTruthy();
  });

  it('shows backdrop when sheet is active and hasBackdrop is true', () => {
    // Arrange
    const props: BottomSheetProps = {
      hasBackdrop: true,
      children: <Text>Bottom sheet</Text>,
    };
    const ref = createRef<BottomSheetRefProps>();

    // Act
    const { getByTestId } = render(<BottomSheet ref={ref} {...props} />);

    act(() => {
      ref.current?.expand();
    });

    // Assert
    expect(getByTestId('bottom-sheet-backdrop')).toBeTruthy();
  });
});
