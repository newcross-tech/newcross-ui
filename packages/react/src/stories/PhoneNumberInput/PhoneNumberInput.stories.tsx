import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import PhoneNumberInput, {
  PhoneNumberInputProps,
} from '../../components/Fields/PhoneNumberInput';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
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

export const PhoneNumberVariants = () => {
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('3456454564');
  const [phone3, setPhone3] = useState('');
  const [phone4, setPhone4] = useState('');

  return (
    <Container flexDirection="column" gap="lg">
      <PhoneNumberInput
        required
        value={phone1}
        label="Phone Number"
        placeholder="Enter your phone number"
        onChange={setPhone1}
        helperText="Enter a valid phone number"
      />

      <PhoneNumberInput
        required
        value={phone2}
        label="Phone Number with Value"
        onChange={setPhone2}
        isValid
        helperText="Valid phone number"
      />

      <PhoneNumberInput
        required
        value={phone3}
        label="Phone Number with Error"
        placeholder="Enter your phone number"
        onChange={setPhone3}
        isError
        helperText="Invalid phone number"
      />

      <PhoneNumberInput
        required
        value={phone4}
        label="Disabled Phone Number"
        placeholder="Enter your phone number"
        onChange={setPhone4}
        disabled
        helperText="This input is disabled"
      />
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
