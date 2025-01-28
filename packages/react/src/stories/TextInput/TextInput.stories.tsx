import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import TextInput, { TextInputProps } from '../../components/TextInput';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
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
      <Container flexDirection="column">
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
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('User entered text');
  const [text3, setText3] = useState('User entered text');
  const [text4, setText4] = useState('');

  return (
    <Container flexDirection="column" gap="lg">
      <TextInput
        required
        value={text1}
        label="Label"
        placeholder="Default"
        type="text"
        onChange={setText1}
        helperText="Short and supportive text"
      />
      <TextInput
        required
        value={text2}
        label="Label"
        placeholder="Default"
        type="text"
        onChange={setText2}
        isValid
        helperText="Short and supportive text"
      />
      <TextInput
        required
        value={text3}
        label="Label"
        placeholder="Default"
        type="text"
        onChange={setText3}
        errorText="Short and supportive text"
      />
      <TextInput
        required
        value={text4}
        disabled
        label="Label"
        placeholder="Default"
        type="text"
        onChange={setText4}
        helperText="Short and supportive text"
      />
    </Container>
  );
};

export const PasswordVariants = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('User entered text');
  const [text3, setText3] = useState('User entered text');
  const [text4, setText4] = useState('');

  return (
    <Container flexDirection="column" gap="lg">
      <TextInput
        required
        value={text1}
        label="Label"
        placeholder="Default"
        type="password"
        onChange={setText1}
        helperText="Short and supportive text"
      />
      <TextInput
        required
        value={text2}
        label="Label"
        placeholder="Default"
        type="password"
        onChange={setText2}
        isValid
        helperText="Short and supportive text"
      />
      <TextInput
        required
        value={text3}
        label="Label"
        placeholder="Default"
        type="password"
        onChange={setText3}
        errorText="Short and supportive text"
      />
      <TextInput
        required
        value={text4}
        disabled
        label="Label"
        placeholder="Default"
        type="password"
        onChange={setText4}
        helperText="Short and supportive text"
      />
    </Container>
  );
};

export const TextAreaVariants = () => {
  const [text1a, setText1a] = useState('');
  const [text1b, setText1b] = useState('');
  const [text2a, setText2a] = useState('User entered text');
  const [text2b, setText2b] = useState('User entered text');
  const [text3a, setText3a] = useState('User entered text');
  const [text3b, setText3b] = useState('User entered text');
  const [text4a, setText4a] = useState(
    'This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar!'
  );
  const [text4b, setText4b] = useState(
    'This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar! This is really long text that triggers the scrollbar!'
  );
  const [text5a, setText5a] = useState('User entered text');
  const [text5b, setText5b] = useState('User entered text');

  return (
    <Container flexDirection="column" gap="lg">
      <Container gap="lg">
        <TextInput
          required
          value={text1a}
          type={'textarea'}
          label={'Label'}
          placeholder={'Default'}
          onChange={setText1a}
          helperText="Short and supportive text"
        />
        <TextInput
          required
          value={text1b}
          type={'textarea'}
          label={'Label'}
          placeholder={'Default'}
          onChange={setText1b}
          helperText="Short and supportive text"
          fullWidth
        />
      </Container>
      <Container gap="lg">
        <TextInput
          required
          isValid
          value={text2a}
          type={'textarea'}
          label={'Label'}
          onChange={setText2a}
          maxLength={300}
        />
        <TextInput
          required
          isValid
          value={text2b}
          type={'textarea'}
          label={'Label'}
          onChange={setText2b}
          maxLength={300}
          fullWidth
        />
      </Container>

      <Container gap="lg">
        <TextInput
          required
          type={'textarea'}
          label={'Label'}
          value={text3a}
          placeholder={'Default'}
          onChange={setText3a}
          maxLength={300}
          errorText="Short and supportive text"
        />
        <TextInput
          required
          type={'textarea'}
          label={'Label'}
          value={text3b}
          placeholder={'Default'}
          onChange={setText3b}
          maxLength={300}
          errorText="Short and supportive text"
          fullWidth
        />
      </Container>

      <Container gap="lg">
        <TextInput
          required
          type={'textarea'}
          label={'Label'}
          value={text4a}
          placeholder={'Default'}
          onChange={setText4a}
          maxLength={2000}
          helperText="Short and supportive text"
        />
        <TextInput
          required
          type={'textarea'}
          label={'Label'}
          value={text4b}
          placeholder={'Default'}
          onChange={setText4b}
          maxLength={2000}
          helperText="Short and supportive text"
          fullWidth
        />
      </Container>

      <Container gap="lg">
        <TextInput
          required
          disabled
          type={'textarea'}
          label={'Label'}
          value={text5a}
          placeholder={'Default'}
          onChange={setText5a}
          maxLength={300}
          helperText="Short and supportive text"
        />
        <TextInput
          required
          disabled
          type={'textarea'}
          label={'Label'}
          value={text5b}
          placeholder={'Default'}
          onChange={setText5b}
          maxLength={300}
          helperText="Short and supportive text"
          fullWidth
        />
      </Container>
    </Container>
  );
};

const Template: Story<TextInputProps> = ({ value, ...rest }) => {
  const [text, setText] = useState(value);

  return (
    <Container flexDirection="column">
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
  fullWidth: false,
  required: false,
};
