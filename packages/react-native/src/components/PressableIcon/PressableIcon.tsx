import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import useTheme from '../../hooks/useTheme';

export type PressableIconProps = PressableProps;

const PressableIcon = ({ children, ...rest }: PressableIconProps) => {
  const theme = useTheme();

  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? theme.OpacityBaseMd : 1 })}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default PressableIcon;
