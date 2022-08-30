import { Meta, Story } from '@storybook/react';
import { ScrollView } from 'react-native';
import {
  TextInput,
  TextInputProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Spacing from '../Spacing';
import Container from '../Container';
import { isWebPlatform } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './TextInputInfo';
import useState from 'storybook-addon-state';

export default {
  title: 'ReactNative/Components/TextInput',
  component: TextInput,
} as Meta;

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

  return (
    <ScrollView>
      <Container
        containerStyle={{ maxWidth: isWebPlatform ? '350px' : undefined }}
      >
        <Typography variant={TypographyVariant.heading4}>
          Without placeholder
        </Typography>
        <TextInput
          value={text1}
          textContentType="name"
          onChangeText={onChangeText1}
        />
        <Spacing />

        <Typography variant={TypographyVariant.heading4}>
          With placeholder
        </Typography>
        <TextInput
          placeholder="This is placeholder text"
          value={text2}
          textContentType="name"
          onChangeText={onChangeText2}
        />
        <Spacing />

        <Typography variant={TypographyVariant.heading4}>
          With placeholder and disabled
        </Typography>
        <TextInput
          value={text3}
          textContentType="name"
          onChangeText={onChangeText3}
          placeholder="Disabled"
          disabled
        />
        <Spacing />

        <Typography variant={TypographyVariant.heading4}>Password</Typography>
        <TextInput
          placeholder="Enter password"
          textContentType="password"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
        />
        <Spacing />

        <Typography variant={TypographyVariant.heading4}>
          With validation check
        </Typography>
        <TextInput
          isValid
          value={text4}
          textContentType="name"
          onChangeText={onChangeText4}
        />
        <Spacing />

        <Typography variant={TypographyVariant.heading4}>
          With a label
        </Typography>
        <TextInput
          value={text5}
          textContentType="name"
          onChangeText={onChangeText5}
          label="Label"
        />
        <Spacing />

        <Typography variant={TypographyVariant.heading4}>
          With helper text
        </Typography>
        <TextInput
          value={text6}
          textContentType="name"
          onChangeText={onChangeText6}
          label="Label"
          helperText="This is the helper text"
        />
        <Spacing />

        <Typography variant={TypographyVariant.heading4}>
          With error text
        </Typography>
        <TextInput
          value={text7}
          textContentType="name"
          onChangeText={onChangeText7}
          label="Label"
          errorText="This is an error message"
        />
        <Spacing />
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
