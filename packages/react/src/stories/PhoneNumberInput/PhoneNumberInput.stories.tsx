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
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container flexDirection="column">
        <PhoneNumberInput defaultCountry="gb" />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [phone, setPhone] = useState('3456454564');

  return (
    <Container flexDirection="column">
      <PhoneNumberInput
        label={'Phone number With Default Country'}
        defaultCountry="gb"
      />
      <Container m="SpacingBase8" />

      <PhoneNumberInput
        value={phone}
        label={'Phone number With a value'}
        onChange={setPhone}
      />
      <Container m="SpacingBase8" />

      <PhoneNumberInput label={'Phone number Disabled'} disabled />
    </Container>
  );
};

const Template: Story<PhoneNumberInputProps> = (props) => {
  return (
    <Container flexDirection="column">
      <PhoneNumberInput {...props} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  value: '',
  label: 'Phone Number',
  disabled: false,
  defaultCountry: 'gb',
  countries: undefined,
  preferredCountries: ['gb'],
  hideDropdown: false,
  prefix: '+',
  defaultMask: '...',
  charAfterDialCode: ' ',
  historySaveDebounceMS: 200,
  disableCountryGuess: false,
  disableDialCodePrefill: false,
  forceDialCode: false,
  disableDialCodeAndPrefix: false,
  showDisabledDialCodeAndPrefix: false,
  disableFocusAfterCountrySelect: false,
  disableFormatting: false,
  flags: undefined,
  inputProps: undefined,
};
