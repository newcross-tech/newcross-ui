import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import TextInput, { TextInputProps } from '../../components/TextInput';
import Typography from '../../components/Typography';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './TextInputInfo';

export default {
  title: 'React/Components/TextInput',
  component: TextInput,
} as Meta;

export const Overview = () => {
  const [text, setText] = useState('');
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container direction="column" hasPadding={false}>
        <TextInput
          value={text}
          placeholder="This is placeholder text"
          label="Label"
          helperText="This is the example overview text"
          type="password"
          onChange={setText}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [password, setPassword] = useState('password');
  const [text1, onChangeText1] = useState('text1');
  const [text2, onChangeText2] = useState('text2');
  const [text3, onChangeText3] = useState('text3');
  const [text4, onChangeText4] = useState('text4');
  const [text5, onChangeText5] = useState('text5');
  const [text6, onChangeText6] = useState('text6');
  const [text7, onChangeText7] = useState('text7');

  return (
    <Container direction="column" hasPadding={false}>
      <Typography variant={'heading4'}>Without placeholder</Typography>
      <TextInput value={text1} type="text" onChange={onChangeText1} />
      <Spacing />

      <Typography variant={'heading4'}>With placeholder</Typography>
      <TextInput
        placeholder="This is placeholder text"
        value={text2}
        type="text"
        onChange={onChangeText2}
      />
      <Spacing />

      <Typography variant={'heading4'}>
        With placeholder and disabled
      </Typography>
      <TextInput
        value={text3}
        type="text"
        onChange={onChangeText3}
        placeholder="Disabled"
        disabled
      />
      <Spacing />

      <Typography variant={'heading4'}>Password</Typography>
      <TextInput
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(text: string) => setPassword(text)}
      />
      <Spacing />

      <Typography variant={'heading4'}>With validation check</Typography>
      <TextInput isValid value={text4} type="text" onChange={onChangeText4} />
      <Spacing />

      <Typography variant={'heading4'}>With a label</Typography>
      <TextInput
        value={text5}
        type="text"
        onChange={onChangeText5}
        label="Label"
      />
      <Spacing />

      <Typography variant={'heading4'}>With helper text</Typography>
      <TextInput
        value={text6}
        type="text"
        onChange={onChangeText6}
        label="Label"
        helperText="This is the helper text"
      />
      <Spacing />

      <Typography variant={'heading4'}>With error text</Typography>
      <TextInput
        value={text7}
        type="text"
        onChange={onChangeText7}
        label="Label"
        errorText="This is an error message"
      />
      <Spacing />
    </Container>
  );
};

export const TextAreaVariants = () => {
  const [, onChangeText1] = useState('text1');
  const [text2, onChangeText2] = useState('');
  const [text3, onChangeText3] = useState(
    'This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar!This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar!  '
  );
  return (
    <Container display="flex" direction="row">
      <Container direction="column" display="block">
        <Typography variant={'heading3'}>TextArea</Typography>
        <Spacing />
        <TextInput
          type={'textarea'}
          label={'Label'}
          placeholder={'Please tell us more...'}
          onChange={onChangeText1}
        />
      </Container>
      <Spacing size={'Large'} />

      <Container direction="column" display="block">
        <Typography variant={'heading3'}>TextArea with maxLength</Typography>
        <Spacing />
        <TextInput
          type={'textarea'}
          label={'Label'}
          value={text2}
          placeholder={'Please tell us more...'}
          onChange={onChangeText2}
          maxLength={400}
        />
      </Container>

      <Spacing size={'Large'} />
      <Container direction="column" display="block">
        <Typography variant={'heading3'}>TextArea with long text</Typography>
        <Spacing />
        <TextInput
          value={text3}
          type={'textarea'}
          label={'Label'}
          onChange={onChangeText3}
          maxLength={500}
        />
      </Container>
    </Container>
  );
};

const Template: Story<TextInputProps> = ({ value, ...rest }) => {
  const [text, setText] = useState(value);

  return (
    <Container direction="column" hasPadding={false}>
      <TextInput {...rest} value={text} onChange={setText} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  placeholder: 'this is placeholder text',
  label: 'Label',
  value: '',
  helperText: '',
  errorText: '',
  type: 'password',
  disabled: false,
  isValid: false,
  search: false,
  maxLength: 400,
};
