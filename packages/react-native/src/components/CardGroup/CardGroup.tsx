import React, { ReactElement, Children, cloneElement } from 'react';
import { View, ViewStyle } from 'react-native';
import { CardProps } from '../Card';
import cardGroupStyle from './CardGroup.style';

export type CardGroupProps = {
  /**
   * The cards to be rendered.
   */
  children: Array<ReactElement<CardProps>>;
  /**
   * The style of the container.
   */
  containerStyle?: ViewStyle;
  /**
   * The style of the divider.
   */
  dividerStyle?: ViewStyle;
  /**
   * The testID to be used for the card group.
   */
  testID?: string;
};

const CardGroup = ({
  children,
  containerStyle,
  dividerStyle,
  testID = 'card-group',
}: CardGroupProps) => {
  const styles = cardGroupStyle();

  return (
    <View testID={testID} style={[styles.container, containerStyle]}>
      {Children.map(children, (child, index) => {
        const isLastChild = index === children.length - 1;

        return (
          <>
            {cloneElement(child, {
              hasShadow: false,
              fullWidth: true,
              testID: `${testID}-card-${index}`,
            })}
            {!isLastChild && (
              <View
                style={[styles.divider, dividerStyle]}
                testID={`${testID}-divider-${index}`}
              />
            )}
          </>
        );
      })}
    </View>
  );
};

export default CardGroup;
