import { View, Text } from 'react-native';
import { Meta, Story } from '@storybook/react';
import useState from 'storybook-addon-state';
import {
  ToggleSwitch,
  ToggleSwitchProps,
} from '@newcross-tech/ui-react-native';
import Container from '../Container';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/ToggleSwitch',
  component: ToggleSwitch,
} as Meta;

export const Variants = () => {
  const [toggle1Value, setToggle1Value] = useState('toggle1', false);
  const [toggle2Value, setToggle2Value] = useState('toggle2', false);
  const [toggle3Value, setToggle3Value] = useState('toggle3', true);
  return (
    <Container>
      <View>
        <Text>Default</Text>
        <ToggleSwitch
          onValueChange={(value) => setToggle1Value(value)}
          value={toggle1Value}
        />
        <Spacing />
        <Text>Disabled</Text>
        <ToggleSwitch
          onValueChange={(value) => setToggle2Value(value)}
          value={toggle2Value}
          disabled={true}
        />
        <Spacing />
        <Text>Disabled and Value set to true</Text>
        <ToggleSwitch
          onValueChange={(value) => setToggle3Value(value)}
          value={toggle3Value}
          disabled={true}
        />
      </View>
    </Container>
  );
};

const Template: Story<ToggleSwitchProps> = (props) => {
  const [toggleValue, setToggleValue] = useState('toggleSwitch', false);

  return (
    <Container>
      <ToggleSwitch
        {...props}
        onValueChange={(value) => setToggleValue(value)}
        value={toggleValue}
      />
    </Container>
  );
};
export const Interactive = Template.bind({});
Interactive.args = {};
