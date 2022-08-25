import { FC, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { native } from '@newcross-ui/design-tokens';

const { SpacingBase12 } = native.healthforce;

type ContainerProps = {
  children: ReactNode;
  direction?: 'row' | 'column';
  containerStyle?: ViewStyle;
  hasPadding?: boolean;
  justifyContent?: 'center' | 'flex-start';
};

const Container: FC<ContainerProps> = ({
  children,
  direction,
  containerStyle,
  hasPadding = true,
  justifyContent = 'center',
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent,
      padding: hasPadding ? SpacingBase12 : undefined,
      flexDirection: direction,
    },
  });

  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

export default Container;
