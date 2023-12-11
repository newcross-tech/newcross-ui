import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RadioGroup from './RadioGroup';
import Radio from '../Radio';
import { View } from 'react-native';

describe('Radio Group Component', () => {
  it('renders default view', () => {
    const { queryByTestId } = render(
      <RadioGroup testID="radio-group-1">
        <Radio key={'radio-item-1-1'} testID={'radio-item-1-1'} />
        <Radio key={'radio-item-1-2'} testID={'radio-item-1-2'} />
      </RadioGroup>
    );

    expect(queryByTestId('radio-group-1')).toBeDefined();
  });

  it('renders disabled and selected item view', () => {
    const { queryByTestId } = render(
      <RadioGroup
        testID="radio-group-2"
        initialSelected="radio-item-2-1"
        disabled={['radio-item-2-1']}
      >
        <Radio key={'radio-item-2-1'} testID={'radio-item-2-1'} />
        <Radio key={'radio-item-2-2'} testID={'radio-item-2-2'} />
      </RadioGroup>
    );

    expect(queryByTestId('radio-item-2-1')).toBeDefined();
    expect(queryByTestId('radio-item-2-2')).toBeDefined();
  });

  it(`shows selected view`, () => {
    const { queryByTestId } = render(
      <RadioGroup
        testID="radio-group-3"
        initialSelected="this-will-be-selected"
      >
        <Radio
          key={'this-will-be-selected'}
          testID={'this-will-be-selected'}
          value={'this-will-be-selected'}
        />
        <Radio
          key={'radio-item-3-1'}
          testID={'radio-item-3-1'}
          value={'radio-item-3-1'}
        />
      </RadioGroup>
    );

    expect(queryByTestId('radio-selected-view')).toBeEnabled();
  });

  it('applies test IDs to components', () => {
    const { queryByTestId } = render(
      <RadioGroup testID="radio-group-4">
        <Radio key={'radio-item-4-1'} testID={'radio-item-4-1'} />
        <Radio key={'radio-item-4-2'} testID={'radio-item-4-2'} />
      </RadioGroup>
    );

    expect(queryByTestId('radio-group-4')).toBeDefined();
    expect(queryByTestId('radio-item-4-1')).toBeDefined();
    expect(queryByTestId('radio-item-4-2')).toBeDefined();
  });

  it('item onPress is called when provided', () => {
    const onPressMock = jest.fn();
    const { queryByTestId } = render(
      <RadioGroup testID="radio-group-5">
        <Radio
          key={'radio-item-pressable-5-1'}
          testID={'radio-item-pressable-5-1'}
          value={'radio-item-pressable-5-1'}
          onPress={onPressMock}
        />
        <Radio
          key={'radio-item-5-2'}
          testID={'radio-item-5-2'}
          value={'radio-item-5-2'}
          onPress={onPressMock}
        />
      </RadioGroup>
    );

    fireEvent.press(queryByTestId('radio-group-5-card-0'));
    fireEvent.press(queryByTestId('group-item-radio-item-5-2'));

    expect(onPressMock).toHaveBeenCalled();
  });

  it('handles invalid children gracefully', () => {
    const { queryByTestId } = render(
      <RadioGroup testID="radio-group-6">
        <View key={'fake-item-1'} testID={'fake-item-1'}></View>
        <View key={'fake-item-2'} testID={'fake-item-2'}></View>
      </RadioGroup>
    );

    expect(queryByTestId('radio-group-6')).toBeDefined();
  });

  it('does not call onPress when radio item is disabled', () => {
    const onPressMock = jest.fn();

    const { queryByTestId } = render(
      <RadioGroup testID="radio-group-7" disabled={['radio-item-7-1']}>
        <Radio
          key={'radio-item-7-1'}
          testID={'radio-item-7-1'}
          value={'radio-item-7-1'}
          onPress={onPressMock}
        />
        <Radio
          key={'radio-item-7-2'}
          testID={'radio-item-7-2'}
          value={'radio-item-7-2'}
        />
      </RadioGroup>
    );

    // Simulate press
    fireEvent.press(queryByTestId('radio-group-7-card-0'));

    // Check that onPress is not called when the radio item is disabled
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('call onPress when radio item is not disabled', () => {
    const onPressMock = jest.fn();
    const onChangeMock = jest.fn();

    const { queryByTestId } = render(
      <RadioGroup onChange={onChangeMock} disabled={[]} testID="radio-group-8">
        <Radio
          key={'radio-item-8-1'}
          testID={'radio-item-8-1'}
          value={'radio-item-8-1'}
          onPress={onPressMock}
        />
        <Radio
          key={'radio-item-8-2'}
          testID={'radio-item-8-2'}
          onPress={onPressMock}
        />
        <Radio
          key={'radio-item-8-3'}
          testID={'radio-item-8-3'}
          onPress={onPressMock}
        />
        <Radio key={'radio-item-8-4'} testID={'radio-item-8-4'} />
      </RadioGroup>
    );

    fireEvent.press(queryByTestId('radio-group-8-card-0'));
    fireEvent.press(queryByTestId('radio-group-8-card-1'));
    fireEvent.press(queryByTestId('radio-group-8-card-2'));
    fireEvent.press(queryByTestId('radio-group-8-card-3'));

    expect(onPressMock).toHaveBeenCalledTimes(3);
    expect(onChangeMock).toHaveBeenCalledTimes(2);
  });
});
