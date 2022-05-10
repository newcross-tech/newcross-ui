import { FC, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { healthforce } from '@newcross-ui/design-tokens';

const { SpacingBase12 } = healthforce;

type ContainerProps = {
  children: ReactNode;
  direction?: 'row' | 'column';
  containerStyle?: ViewStyle;
};

const Container: FC<ContainerProps> = ({
  children,
  direction,
  containerStyle,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: SpacingBase12,
      flexDirection: direction,
    },
  });

  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

export default Container;
