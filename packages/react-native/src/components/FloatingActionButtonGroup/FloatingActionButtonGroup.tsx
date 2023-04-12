import React, { Children, cloneElement, ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';
import { FABVariant, FloatingActionButtonProps } from '../FloatingActionButton';
import fabGroupStyle from './FloatingActionButtonGroup.style';
import useTheme from '../../hooks/useTheme';

export type FloatingActionButtonGroupProps = {
  children: Array<ReactElement<FloatingActionButtonProps>>;
  style?: ViewStyle;
  testID?: string;
};

const FloatingActionButtonGroup = ({
  children,
  style,
  testID = 'floating-action-button-group',
}: FloatingActionButtonGroupProps) => {
  const theme = useTheme();
  const styles = fabGroupStyle(theme);

  return (
    <View testID={testID} style={[styles.containerStyle, style]}>
      {Children.map(children, (child, index) => {
        const isLastChild = children.length - 1 === index;

        return (
          <>
            {cloneElement(child, {
              hasShadow: false,
              key: index,
              variant: FABVariant.small,
              style: styles.childrenStyles,
            })}
            {!isLastChild && (
              <View testID="divider" style={styles.dividerStyle} />
            )}
          </>
        );
      })}
    </View>
  );
};

export default FloatingActionButtonGroup;
