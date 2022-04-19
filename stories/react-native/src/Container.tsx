import { FC, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { healthforce } from '@newcross-ui/design-tokens';
import { ThemeProvider, Brand } from '@newcross-ui/react-native';

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

  return (
    <ThemeProvider brand={Brand.healthforce}>
      <View style={[styles.container, containerStyle]}>{children}</View>
    </ThemeProvider>
  );
};

export default Container;
