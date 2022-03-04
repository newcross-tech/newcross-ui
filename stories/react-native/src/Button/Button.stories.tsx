import { View, StyleSheet, Platform } from 'react-native';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@newcross-ui/react-native';

export default {
  title: 'ReactNative/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = () => (
  <View style={styles.container}>
    <Button text="Primary" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: Platform.OS === 'web' ? 'flex-start' : 'center',
  },
});

export const Primary = Template.bind({});
