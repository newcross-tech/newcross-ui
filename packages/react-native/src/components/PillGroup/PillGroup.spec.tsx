import React from 'react';
import { render } from '@testing-library/react-native';
import Pill from '../Pill/Pill';
import PillGroup, { PillGroupProps } from './PillGroup';
import { PillGroupOrientation } from './PillGroup.types';

describe('Pill Group Component', () => {
  it('renders successfully', () => {
    // Arrange
    const onPress = jest.fn;
    const props: PillGroupProps = {};

    // Act
    const { getByTestId } = render(
      <PillGroup {...props}>
        <Pill testID="1" label="Section 1" onPress={onPress} />
        <Pill testID="2" label="Section 2" onPress={onPress} />
      </PillGroup>
    );

    // Assert
    expect(getByTestId('pill-group-container')).toBeTruthy();
  });
  it('renders children successfully', () => {
    // Arrange
    const onPress = jest.fn;
    const props: PillGroupProps = {
      orientation: PillGroupOrientation.vertical,
    };

    // Act
    const { getByTestId } = render(
      <PillGroup {...props}>
        <Pill testID="1" label="Section 1" onPress={onPress} />
        <Pill testID="2" label="Section 2" onPress={onPress} />
      </PillGroup>
    );

    // Assert
    expect(getByTestId('pill-container-1')).toBeTruthy();
    expect(getByTestId('pill-container-2')).toBeTruthy();
  });
});
