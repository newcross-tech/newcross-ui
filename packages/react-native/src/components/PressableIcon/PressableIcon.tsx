import React from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import useTheme from '../../hooks/useTheme';

export type PressableIconProps = {
  style?: StyleProp<ViewStyle>;
} & PressableProps;

const PressableIcon = ({ children, style, ...rest }: PressableIconProps) => {
  const theme = useTheme();

  return (
    <Pressable
      hitSlop={theme.SpacingBase12}
      style={({ pressed }) => [
        { opacity: pressed ? theme.OpacityBaseMd : 1 },
        style,
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default PressableIcon;
