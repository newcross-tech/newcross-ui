import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Pill, { PillProps } from './Pill';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDog } from '@fortawesome/pro-solid-svg-icons/faDog';
import { PillSizes, PillVariant } from './Pill.types';

describe('Pill Component', () => {
  it('renders successfully', () => {
    // Arrange
    const props: PillProps = {
      testID: 'label',
      disabled: false,
      removable: false,
      label: 'Label',
      variant: PillVariant.success,
    };

    // Act
    const { getByTestId, getByText } = render(<Pill {...props} />);

    // Assert

    expect(getByTestId('pill-container-label')).toBeTruthy();
    expect(getByText('Label')).toBeTruthy();
  });
  it('renders successfully when icon prop is given', () => {
    // Arrange
    const props: PillProps = {
      label: 'Label',
      testID: 'label',
      icon: <FontAwesomeIcon icon={faDog} />,
    };

    // Act
    const { getByTestId } = render(<Pill {...props} />);

    // Assert

    expect(getByTestId('pill-pressable-container-label')).toBeTruthy();
  });
  it('renders successfully when status and size props are given', () => {
    // Arrange
    const props: PillProps = {
      label: 'Label',
      testID: 'label',
      variant: PillVariant.info,
      size: PillSizes.small,
    };

    // Act
    const { getByTestId } = render(<Pill {...props} />);

    // Assert
    expect(getByTestId('pill-pressable-container-label')).toBeTruthy();
  });
  it('triggers onPress successfully', () => {
    const onIconPress = jest.fn;

    // Arrange
    const props: PillProps = {
      label: 'Label',
      testID: 'label',
      removable: true,
      onPress: onIconPress,
    };

    // Act
    const { getByTestId } = render(<Pill {...props} />);
    fireEvent.press(getByTestId('pill-pressable-container-label'));

    // Assert

    expect(onIconPress).toHaveBeenCalled;
  });
  it('does not triggers onPress when disabled prop is provided', () => {
    const onIconPress = jest.fn;

    // Arrange
    const props: PillProps = {
      label: 'Label',
      testID: 'label',
      removable: true,
      disabled: true,
      onPress: onIconPress,
      variant: PillVariant.warning,
    };

    // Act
    const { getByTestId } = render(<Pill {...props} />);
    fireEvent.press(getByTestId('pill-pressable-container-label'));

    // Assert

    expect(onIconPress).toBeFalsy;
  });
});
