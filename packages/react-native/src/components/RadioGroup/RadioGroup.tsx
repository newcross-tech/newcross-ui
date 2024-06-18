import React, { Children, isValidElement, ReactElement, useState } from 'react';
import { GestureResponderEvent, ViewStyle } from 'react-native';
import { RadioProps } from '../Radio';
import radioGroupStyle from './RadioGroup.style';
import CardGroup from '../CardGroup';
import Card from '../Card';

export type RadioGroupProps = {
  /**
   * A test identifier for the component.
   */
  testID?: string;
  /**
   * Used to display the group in either a row or a column.
   */
  direction?: 'row' | 'column';
  /**
   * The content of the component.
   */
  children: ReactElement<RadioProps>[];
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (value: string) => void;
  /**
   * Initial selected radio by value
   */
  initialSelected?: string;
  /**
   * Disables radios from being pressed. Accept array with value identifier
   */
  disabled?: string[];
  /**
   * Overwrites or extends the styles applied to the component's content.
   */
  containerStyle?: ViewStyle;
  /**
   * The style of the container of a single item.
   */
  itemContainerStyle?: ViewStyle;
  /**
   * The style of the divider.
   */
  dividerStyle?: ViewStyle;
  /**
   * The style of the content of a single item.
   */
  itemContentStyle?: ViewStyle;
};

const RadioGroup = ({
  testID,
  direction = 'row',
  initialSelected = '',
  disabled = [],
  onChange,
  children,
  containerStyle,
  itemContainerStyle,
  itemContentStyle,
  dividerStyle,
}: RadioGroupProps) => {
  const styles = radioGroupStyle();
  const [selectedValue, setSelectedValue] = useState(initialSelected);

  const handleRadioPress = (value = '') => {
    if (value !== selectedValue) {
      setSelectedValue(value);
      onChange?.(value);
    }
  };

  const renderClonedRadioElement = (
    childElement: React.ReactElement<RadioProps>
  ) => {
    const { value, testID, onPress } = childElement.props;

    const isDisabled = !!value && disabled.includes(value);

    return (
      <Card
        testID={`group-card-${testID}`}
        fullWidth={false}
        isPressable={isDisabled}
        onPress={(e: GestureResponderEvent) => {
          if (!isDisabled) {
            handleRadioPress(value);
            if (onPress) {
              onPress(e);
            }
          }
        }}
        contentStyle={itemContentStyle}
        containerStyle={{
          ...styles.container,
          ...itemContainerStyle,
        }}
      >
        {React.cloneElement(childElement, {
          testID: `group-item-${testID}`,
          selected: value === selectedValue,
          disabled: isDisabled,
          containerStyle: styles.container,
          onPress: () => {
            handleRadioPress(value);
          },
        })}
      </Card>
    );
  };

  return (
    <CardGroup
      testID={testID}
      containerStyle={{
        ...styles.container,
        ...containerStyle,
      }}
      dividerStyle={dividerStyle}
      direction={direction}
    >
      {Children.map(
        children,
        (childElement) =>
          isValidElement(childElement) && renderClonedRadioElement(childElement)
      )}
    </CardGroup>
  );
};

export default RadioGroup;
