import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import PhoneNumberInput, {
  PhoneNumberInputProps,
} from '../../components/PhoneNumberInput';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import * as StoryTitle from '../StoryTitle';
import { DESCRIPTION, DO, DONT, TITLE } from './PhoneNumberInput';

export default {
  title: 'React/Components/PhoneNumberInput',
  component: PhoneNumberInput,
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
        <PhoneNumberInput value={text} onChange={setText} />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [text1, onChangeText1] = useState('text1');
  const [text2, onChangeText2] = useState('text2');

  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>With a title</StoryTitle.Regular>
      <PhoneNumberInput value={text1} onChange={onChangeText1} />
      <Container m="SpacingBase4" />

      <StoryTitle.Regular>With a title and disabled</StoryTitle.Regular>
      <PhoneNumberInput value={text2} disabled onChange={onChangeText2} />
      <Container m="SpacingBase4" />

      <Container m="SpacingBase4" />
    </Container>
  );
};

const Template: Story<PhoneNumberInputProps> = ({ value, disabled }) => {
  const [text, setText] = useState(value);

  return (
    <Container flexDirection="column">
      <PhoneNumberInput value={text} onChange={setText} disabled={disabled} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  value: '',
  disabled: false,
};
