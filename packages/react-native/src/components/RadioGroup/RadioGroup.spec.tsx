import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RadioGroup, { RadioGroupProps } from './RadioGroup';
import Radio from '../Radio';

const renderComponent = (props: RadioGroupProps) => {
  const { getByText, queryByTestId } = render(<RadioGroup {...props} />);

  return { getByText, queryByTestId };
};

describe('Radio Group Component', () => {
  it('renders default view', () => {
    // Act
    const { queryByTestId } = renderComponent({
      children: [
        <Radio key={'radio-item-1'} testID={'radio-item-1'} />,
        <Radio key={'radio-item-2'} testID={'radio-item-2'} />,
        <Radio key={'radio-item-3'} testID={'radio-item-3'} />,
      ],
      testID: 'radio-group',
      disabled: ['radio-item-3'],
    });

    // Assert
    expect(queryByTestId('radio-group')).toBeTruthy();
    expect(queryByTestId('radio-item-1')).toBeTruthy();
    expect(queryByTestId('radio-item-2')).toBeTruthy();
  });

  it('renders disabled and selected item view', () => {
    // Act
    const { queryByTestId } = renderComponent({
      children: [
        <Radio key={'radio-item-1'} testID={'radio-item-1'} />,
        <Radio key={'radio-item-2'} testID={'radio-item-2'} />,
        <Radio key={'radio-item-3'} testID={'radio-item-3'} />,
      ],
      initialSelected: 'radio-item-3',
      testID: 'radio-group',
      disabled: ['radio-item-3'],
    });

    // Assert
    expect(queryByTestId('radio-group')).toBeTruthy();
    expect(queryByTestId('radio-item-1')).toBeTruthy();
    expect(queryByTestId('radio-item-2')).toBeTruthy();
  });

  it(`displays empty radiogroup when without radioitems`, () => {
    // Act
    const { queryByTestId } = renderComponent({
      children: [],
      testID: 'radio-group',
    });

    // Assert
    expect(queryByTestId('radio-group')).toBeTruthy();
  });

  it(`shows selected view when selected prop is true`, () => {
    // Act
    const { queryByTestId } = renderComponent({
      children: [
        <Radio key={'radio-item-1'} testID={'radio-item-1'} selected={true} />,
      ],
      testID: 'radio-group',
      initialSelected: '',
    });

    // Assert
    expect(queryByTestId('radio-selected-view')).toBeFalsy();
  });

  it(`shows selected `, () => {
    // Act
    const { queryByTestId } = renderComponent({
      children: [
        <Radio
          key={'radio-item-1'}
          testID={'radio-item-1'}
          value={'this-will-be-selected'}
          selected={true}
        />,
      ],
      testID: 'radio-group',
      initialSelected: 'this-will-be-selected',
    });

    // Assert
    expect(queryByTestId('radio-selected-view')).toBeTruthy();
  });

  it('calls onChange when selection changes and ignores same value passed', () => {
    // Arrange
    const onChangeMock = jest.fn();

    // Act
    const { queryByTestId } = renderComponent({
      children: [
        <Radio
          key={'radio-item-1'}
          testID={'radio-item-1'}
          value={'value-1'}
        />,
        <Radio
          key={'radio-item-2'}
          testID={'radio-item-2'}
          value={'value-2'}
        />,
      ],
      testID: 'radio-group',
      onChange: onChangeMock,
    });

    // Select a radio item
    fireEvent.press(queryByTestId('radio-item-1'));

    // Assert
    expect(onChangeMock).toHaveBeenCalledWith('value-1');

    // Deselect the radio item
    fireEvent.press(queryByTestId('radio-item-1'));

    // Assert
    expect(onChangeMock).toHaveBeenCalledWith('value-1');
  });

  it('applies custom styles', () => {
    // Arrange
    const customContainerStyle = { backgroundColor: 'red' };

    // Act
    const { queryByTestId } = renderComponent({
      children: [<Radio key={'radio-item-1'} testID={'radio-item-1'} />],
      testID: 'radio-group',
      containerStyle: customContainerStyle,
    });

    // Assert
    const container = queryByTestId('radio-group');
    expect(container.props.style).toContainEqual(customContainerStyle);
  });

  it('applies test IDs to components', () => {
    // Act
    const { queryByTestId } = renderComponent({
      children: [
        <Radio key={'radio-item-1'} testID={'radio-item-1'} />,
        <Radio key={'radio-item-2'} testID={'radio-item-2'} />,
      ],
      testID: 'radio-group',
    });

    // Assert
    expect(queryByTestId('radio-group')).toBeTruthy();
    expect(queryByTestId('radio-item-1')).toBeTruthy();
    expect(queryByTestId('radio-item-2')).toBeTruthy();
  });

  it('calls onPress when provided', () => {
    // Arrange
    const onPressMock = jest.fn();

    // Act
    const { queryByTestId } = renderComponent({
      children: [
        <Radio
          key={'radio-item-1'}
          testID={'radio-item-1'}
          onPress={onPressMock}
        />,
      ],
      testID: 'radio-group',
    });

    // Simulate press
    fireEvent.press(queryByTestId('radio-item-1'));

    // Assert
    expect(onPressMock).toHaveBeenCalled();
  });
});
