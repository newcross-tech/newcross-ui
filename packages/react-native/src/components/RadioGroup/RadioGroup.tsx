import React, { Children, isValidElement, ReactElement, useState } from 'react';
import { GestureResponderEvent, View, ViewStyle } from 'react-native';
import { RadioProps } from '../Radio';
import radioGroupStyle from './RadioGroup.style';

export type RadioGroupProps = {
  testID?: string;
  direction?: 'row' | 'column';
  children: ReactElement<RadioProps>[];
  onChange?: (value: string) => void;
  initialSelected?: string;
  disabled?: string[];
  containerStyle?: ViewStyle;
  dividerStyle?: ViewStyle;
};

const RadioGroup = ({
  testID,
  direction = 'row',
  initialSelected = '',
  disabled = [],
  onChange,
  children,
  containerStyle,
  dividerStyle,
}: RadioGroupProps) => {
  const styles = radioGroupStyle();
  const [selectedValue, setSelectedValue] = useState(initialSelected);

  const handleRadioPress = (value: string) => {
    if (value !== selectedValue) {
      setSelectedValue(value);
      onChange?.(value);
    }
  };

  const renderClonedRadioElement = (
    childElement: React.ReactElement<RadioProps>,
    index: number
  ) => {
    const { value, testID, onPress } = childElement.props;
    const isDisabled = !!value && disabled.includes(value);
    const isLastChild = index === children.length - 1;

    return (
      <>
        {React.cloneElement(childElement, {
          testID,
          selected: value === selectedValue,
          disabled: isDisabled,
          onPress: (e: GestureResponderEvent) => {
            if (!isDisabled) {
              handleRadioPress(value ?? '');
            }
            if (onPress) {
              onPress(e);
            }
          },
        })}
        {!isLastChild && (
          <View
            style={[styles.divider, dividerStyle]}
            testID={`${testID}-divider`}
          />
        )}
      </>
    );
  };

  return (
    <View
      testID={testID}
      style={[styles.container, containerStyle, { flexDirection: direction }]}
    >
      {Children.map(
        children,
        (childElement, index) =>
          isValidElement(childElement) &&
          renderClonedRadioElement(childElement, index)
      )}
    </View>
  );
};

export default RadioGroup;
