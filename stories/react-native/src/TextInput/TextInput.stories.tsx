import {
  TextInput,
  TextInputProps,
  Mode,
} from '@newcross-tech/ui-react-native';
import { Meta, Story } from '@storybook/react';
import { ScrollView } from 'react-native';
import useState from 'storybook-addon-state';
import { native } from '@newcross-tech/ui-design-tokens';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { isWebPlatform } from '../utils';
import { DESCRIPTION, DO, DONT, TITLE } from './TextInputInfo';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/TextInput',
  component: TextInput,
} as Meta;

const { ColorPrimaryGravitas, SpacingBase8 } = native.healthforce;

export const Overview = () => {
  const [text, onChangeText] = useState('text', '');
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container
        containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
      >
        <TextInput
          value={text}
          placeholder="This is placeholder text"
          label="Label"
          helperText="This is the example overview text"
          textContentType="password"
          onChangeText={onChangeText}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [password, setPassword] = useState('password', '');
  const [text1, onChangeText1] = useState('text1', '');
  const [text2, onChangeText2] = useState('text2', '');
  const [text3, onChangeText3] = useState('text3', '');
  const [text4, onChangeText4] = useState('text4', '');
  const [text5, onChangeText5] = useState('text5', '');
  const [text6, onChangeText6] = useState('text6', '');
  const [text7, onChangeText7] = useState('text7', '');
  const [text8, onChangeText8] = useState('text8', '');
  const [text9, onChangeText9] = useState('text9', '1234');

  return (
    <ScrollView>
      <Container
        containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
      >
        <TextInput
          label="Without placeholder"
          value={text1}
          textContentType="name"
          onChangeText={onChangeText1}
        />
        <TextInput
          label="With placeholder"
          placeholder="This is placeholder text"
          value={text2}
          textContentType="name"
          onChangeText={onChangeText2}
        />
        <TextInput
          label="With placeholder and disabled"
          value={text3}
          textContentType="name"
          onChangeText={onChangeText3}
          placeholder="Disabled"
          disabled
        />
        <TextInput
          label="Password"
          placeholder="Enter password"
          textContentType="password"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
        />
        <TextInput
          label="With validation check"
          isValid
          value={text4}
          textContentType="name"
          onChangeText={onChangeText4}
        />
        <TextInput
          value={text5}
          textContentType="name"
          onChangeText={onChangeText5}
          label="With helper text"
          helperText="This is the helper text"
        />
        <TextInput
          value={text6}
          textContentType="name"
          onChangeText={onChangeText6}
          label="Error state without message"
          hasError
        />
        <TextInput
          value={text7}
          textContentType="name"
          onChangeText={onChangeText7}
          label="With error text"
          errorText="This is an error message"
        />
        <Spacing />
        <TextInput
          style={{
            padding: SpacingBase8,
            backgroundColor: ColorPrimaryGravitas,
          }}
          value={text8}
          textContentType="name"
          onChangeText={onChangeText8}
          label="With dark mode"
          errorText="This is an error message"
          mode={Mode.dark}
        />
        <Spacing />
        <TextInput
          value={text9}
          textContentType="name"
          onChangeText={onChangeText9}
          label="With multiline"
          errorText="This is an error message"
          multiline={true}
          characterCountLabel=" characters"
        />
      </Container>
    </ScrollView>
  );
};

const Template: Story<TextInputProps> = ({
  placeholder,
  label,
  helperText,
  textContentType,
  disabled,
  isValid,
}) => {
  const [text8, onChangeText8] = useState('text8', '');
  return (
    <Container
      containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
    >
      <TextInput
        placeholder={placeholder}
        label={label}
        helperText={helperText}
        textContentType={textContentType}
        disabled={disabled}
        isValid={isValid}
        onChangeText={onChangeText8}
        value={text8}
      />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  placeholder: 'this is placeholder text',
  label: 'Label',
  helperText: 'This is the helper text content',
  errorText: '',
  textContentType: 'newPassword',
  disabled: false,
  isValid: false,
};
