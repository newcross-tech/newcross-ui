import { View, StyleSheet, Platform } from 'react-native';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <View style={styles.container}>
        <Story />
      </View>
    );
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: Platform.OS === 'web' ? 'flex-start' : 'center',
  },
});
