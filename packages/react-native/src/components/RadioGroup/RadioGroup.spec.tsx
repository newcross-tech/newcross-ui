import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RadioGroup from './RadioGroup';
import Radio from '../Radio';
import { View } from 'react-native';

describe('Radio Group Component', () => {
  it('renders default view', () => {
    const { queryByTestId } = render(
      <RadioGroup testID="radio-group-1">
        <Radio key={'radio-item-1'} testID={'radio-item-1'} />
        <Radio key={'radio-item-2'} testID={'radio-item-2'} />
        <Radio key={'radio-item-3'} testID={'radio-item-3'} />
      </RadioGroup>
    );

    expect(queryByTestId('radio-group-1')).toBeEnabled();
    expect(queryByTestId('radio-item-1')).toBeEnabled();
    expect(queryByTestId('radio-item-2')).toBeEnabled();
  });

  it('renders disabled and selected item view', () => {
    const { queryByTestId } = render(
      <RadioGroup
        testID="radio-group-2"
        initialSelected="radio-item-4"
        disabled={['radio-item-4']}
      >
        <Radio key={'radio-item-4'} testID={'radio-item-4'} />
        <Radio key={'radio-item-5'} testID={'radio-item-5'} />
        <Radio key={'radio-item-6'} testID={'radio-item-6'} />
      </RadioGroup>
    );

    expect(queryByTestId('radio-group-2')).toBeEnabled();
    expect(queryByTestId('radio-item-4')).toBeEnabled();
    expect(queryByTestId('radio-item-5')).toBeEnabled();
  });

  it(`shows selected view`, () => {
    const { queryByTestId } = render(
      <RadioGroup
        testID="radio-group-5"
        initialSelected="this-will-be-selected"
      >
        <Radio
          key={'this-will-be-selected'}
          testID={'this-will-be-selected'}
          value={'this-will-be-selected'}
        />
        <Radio
          key={'radio-item-8'}
          testID={'radio-item-8'}
          value={'radio-item-8'}
        />
      </RadioGroup>
    );

    expect(queryByTestId('radio-selected-view')).toBeDefined();
  });

  it('applies test IDs to components', () => {
    const { queryByTestId } = render(
      <RadioGroup testID="radio-group-6">
        <Radio key={'radio-item-9'} testID={'radio-item-9'} />
        <Radio key={'radio-item-10'} testID={'radio-item-10'} />
      </RadioGroup>
    );

    expect(queryByTestId('radio-group-6')).toBeDefined();
    expect(queryByTestId('radio-item-9')).toBeDefined();
    expect(queryByTestId('radio-item-10')).toBeDefined();
  });

  it('item onPress is called when provided', () => {
    const onPressMock = jest.fn();
    const { queryByTestId } = render(
      <RadioGroup testID="radio-group-7">
        <Radio
          key={'radio-item-11'}
          testID={'radio-item-11'}
          value={'radio-item-11'}
          onPress={onPressMock}
        />
        <Radio
          key={'radio-item-12'}
          testID={'radio-item-12'}
          value={'radio-item-12'}
          onPress={onPressMock}
        />
      </RadioGroup>
    );

    fireEvent.press(queryByTestId('radio-item-11'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('handles invalid children gracefully', () => {
    const { queryByTestId } = render(
      <RadioGroup testID="radio-group-8">
        <View key={'fake-item-1'} testID={'fake-item-1'}></View>
        <View key={'fake-item-2'} testID={'fake-item-2'}></View>
      </RadioGroup>
    );

    expect(queryByTestId('radio-group-8')).toBeDefined();
  });

  it('does not call onPress when radio item is disabled', () => {
    const onPressMock = jest.fn();

    const { queryByTestId } = render(
      <RadioGroup testID="radio-group-9" disabled={['radio-item-13']}>
        <Radio
          key={'radio-item-13'}
          testID={'radio-item-13'}
          value={'radio-item-13'}
          onPress={onPressMock}
        />
        <Radio
          key={'radio-item-14'}
          testID={'radio-item-14'}
          value={'radio-item-14'}
        />
      </RadioGroup>
    );

    // Simulate press
    fireEvent.press(queryByTestId('radio-item-13'));

    // Check that onPress is not called when the radio item is disabled
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('call onPress when radio item is not disabled', () => {
    const onPressMock = jest.fn();
    const onChangeMock = jest.fn();

    const { queryByTestId } = render(
      <RadioGroup onChange={onChangeMock} disabled={[]} testID="radio-group-10">
        <Radio
          key={'radio-item-14'}
          testID={'radio-item-14'}
          value={'radio-item-14'}
          onPress={onPressMock}
        />
        <Radio
          key={'radio-item-15'}
          testID={'radio-item-15'}
          onPress={onPressMock}
        />
        <Radio
          key={'radio-item-16'}
          testID={'radio-item-16'}
          onPress={onPressMock}
        />
        <Radio key={'radio-item-17'} testID={'radio-item-17'} />
      </RadioGroup>
    );

    fireEvent.press(queryByTestId('radio-group-10-card-0'));
    fireEvent.press(queryByTestId('radio-group-10-card-1'));
    fireEvent.press(queryByTestId('radio-group-10-card-2'));
    fireEvent.press(queryByTestId('radio-group-10-card-3'));

    expect(onPressMock).toHaveBeenCalledTimes(3);
    expect(onChangeMock).toHaveBeenCalledTimes(2);
  });
});
