import { FC } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

type ContainerProps = {
  children: JSX.Element;
};

const Container: FC<ContainerProps> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: Platform.OS === 'web' ? 'flex-start' : 'center',
  },
});
