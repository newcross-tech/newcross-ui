import { View } from 'react-native';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioProps, TextInput } from '@newcross-ui/react-native';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './RadioInfo';

export default {
  title: 'ReactNative/Components/Radio',
  component: Radio,
} as Meta;

export const Variants = () => {
  return (
    <Container>
      <View>
        <Radio selected={false} label="Primary" />
        <Radio selected={true} label="Primary Selected" />
        <Radio label="Disabled" disabled />
        <Radio selected label="Disabled Selected" disabled />
        <Radio
          selected={true}
          label="Primary Selected with extra content on selection"
          extraContentOnSelect={
            <TextInput
              style={{ width: '50%' }}
              label="Extra Content"
              onChangeText={() => null}
            />
          }
        />
      </View>
    </Container>
  );
};

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container>
        <View>
          <Radio selected={true} label="Primary Selected" />
        </View>
      </Container>
    </InfoTemplate>
  );
};

const Template: Story<RadioProps> = (props) => (
  <Container>
    <Radio {...props} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = { label: 'My Label', selected: true, disabled: false };
