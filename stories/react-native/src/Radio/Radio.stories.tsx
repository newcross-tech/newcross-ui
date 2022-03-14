import { View, StyleSheet, Platform } from 'react-native';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioProps } from '@newcross-ui/react-native';

export default {
  title: 'ReactNative/Radio',
  component: Radio,
} as Meta;

export const All = () => {
  return (
    <View style={styles.container}>
      <View>
        <Radio selected={false} label="Primary" />
        <Radio selected={true} label="Primary Selected" />
        <Radio label="Disabled" disabled />
        <Radio selected label="Disabled Selected" disabled />
      </View>
    </View>
  );
};

const Template: Story<RadioProps> = (props) => (
  <View style={styles.container}>
    <Radio {...props} />
  </View>
);

export const Interactive = Template.bind({});
Interactive.args = { label: 'My Label', selected: true, disabled: false };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: Platform.OS === 'web' ? 'flex-start' : 'center',
  },
});
