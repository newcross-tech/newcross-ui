import { Meta, Story } from '@storybook/react';
import { View } from 'react-native';
import {
  PhoneInput,
  Typography,
  TypographyVariant,
  BottomSheet,
  ListOption,
} from '@newcross-ui/react-native';
import Spacing, { SpacingPositions } from '../Spacing';
import Container from '../Container';
import { getParameters, isWebPlatform } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './PhoneInputInfo';
import useState from 'storybook-addon-state';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { PHONE_FORMAT_DATA } from './PhoneFormatData.constants';
import { PhoneInputProps } from '@newcross-ui/react-native/build/components/PhoneInput';

export default {
  title: 'ReactNative/Components/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'fullscreen',
    ...getParameters(true, false),
  },
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Typography variant={TypographyVariant.paragraph1}>N/A</Typography>
    </InfoTemplate>
  );
};

export const Variant = () => {
  const [expanded, setExpanded] = useState('expanded', false);

  const defualtValues = {
    phoneInput: {
      name: {
        en: 'United Kingdom',
      },
      dial_code: '+44',
      code: 'GB',
      flag: '🇬🇧',
      format: { minLength: 10, maxLength: 10 },
    },
    phoneNumberValid: false,
  };

  const [phoneInputSelected, setPhoneInputSelected] = useState(
    'phoneInputSelected',
    defualtValues.phoneInput
  );
  const [phoneNumber, setPhoneNumber] = useState('phoneNumber', '');
  const handleSelection = (countryData: PhoneInputTypes) => {
    setPhoneInputSelected(countryData);
    setExpanded(false);
  };

  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container>
        <Typography variant={TypographyVariant.heading5}>
          Phone Number
        </Typography>
        <PhoneInput
          // TODO: On refactor include defaultCountry="HK"
          onChangePhoneNumber={(phoneInput) => setPhoneNumber(phoneInput)}
          phoneInputSelected={phoneInputSelected}
          phoneNumber={phoneNumber}
          handleDropDownSelect={() => setExpanded(true)}
        />
        <Spacing />
      </Container>
      <BottomSheet isOpen={expanded}>
        <View>
          <Spacing />
          {PHONE_FORMAT_DATA.map((countryData) => (
            <ListOption
              selected={countryData === phoneInputSelected}
              value={
                countryData.name.en + '  ' + '(' + countryData.dial_code + ')'
              }
              leftIcon={
                <Typography variant={TypographyVariant.heading2}>
                  {countryData.flag}
                </Typography>
              }
              onSelect={() => handleSelection(countryData)}
            />
          ))}
          <Spacing position={SpacingPositions.Bottom} />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const Template: Story<PhoneInputProps> = () => {
  const [expanded, setExpanded] = useState('expanded', false);

  const defualtValues = {
    phoneInput: {
      name: {
        en: 'United Kingdom',
      },
      dial_code: '+44',
      code: 'GB',
      flag: '🇬🇧',
      format: { minLength: 10, maxLength: 10 },
    },
  };

  const [phoneInputSelected2, setPhoneInputSelected2] = useState(
    'phoneInputSelected2',
    defualtValues.phoneInput
  );
  const [phoneNumber2, setPhoneNumber2] = useState('phoneNumber2', '');

  const handleSelection = (countryData: PhoneInputTypes) => {
    setPhoneInputSelected2(countryData);
    setExpanded(false);
  };

  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container>
        <Typography variant={TypographyVariant.heading5}>
          Phone Number
        </Typography>
        <PhoneInput
          onChangePhoneNumber={(phoneInput) => setPhoneNumber2(phoneInput)}
          phoneInputSelected={phoneInputSelected2}
          phoneNumber={phoneNumber2}
          handleDropDownSelect={() => setExpanded(true)}
        />
        <Spacing />
      </Container>
      <BottomSheet isOpen={expanded}>
        <View>
          <Spacing />
          {PHONE_FORMAT_DATA.map((countryData) => (
            <ListOption
              selected={countryData === phoneInputSelected2}
              value={
                countryData.name.en + '  ' + '(' + countryData.dial_code + ')'
              }
              leftIcon={
                <Typography variant={TypographyVariant.heading2}>
                  {countryData.flag}
                </Typography>
              }
              onSelect={() => handleSelection(countryData)}
            />
          ))}
          <Spacing position={SpacingPositions.Bottom} />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
export const Interactive = Template.bind({});
Interactive.args = {};

export type PhoneInputTypes = {
  name: {
    en: string;
  };
  dial_code: string;
  code: string;
  flag: string;
  format: { maxLength: number; minLength: number };
};
