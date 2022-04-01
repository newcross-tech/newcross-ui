import { FC, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { healthforce } from '@newcross-ui/design-tokens';
import { ThemeProvider, Brand } from '@newcross-ui/react-native';

const { SpacingBase12 } = healthforce;

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => (
  <ThemeProvider brand={Brand.healthforce}>
    <View style={styles.container}>{children}</View>
  </ThemeProvider>
);

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SpacingBase12,
  },
});
