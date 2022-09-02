import { Meta, Story } from '@storybook/react';
import { View } from 'react-native';
import {
  PhoneInput,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Spacing, { SpacingPositions } from '../Spacing';
import Container from '../Container';
import { getParameters, isWebPlatform } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './PhoneInputInfo';
import useState from 'storybook-addon-state';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { createRef } from 'react';
import { BottomSheetRefProps } from '@newcross-ui/react-native';
import { BottomSheet } from '@newcross-ui/react-native';
import { ListOption } from '@newcross-ui/react-native';
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
  const ref = createRef<BottomSheetRefProps>();

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
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(
    'phoneNumberValid',
    defualtValues.phoneNumberValid
  );

  const handleSelection = (countryData: PhoneInputTypes) => {
    setPhoneInputSelected(countryData);
    ref.current?.collapse();
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
          setPhoneNumber={(phoneInput) => setPhoneNumber(phoneInput)}
          phoneInputSelected={phoneInputSelected}
          phoneNumber={phoneNumber}
          handleDropDownSelect={() => ref.current?.expand()}
          setIsPhoneNumberValid={setIsPhoneNumberValid}
          isPhoneNumberValid={isPhoneNumberValid}
        />
        <Spacing />
      </Container>
      <BottomSheet ref={ref}>
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
  const ref = createRef<BottomSheetRefProps>();

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

  const [isPhoneNumberValid2, setIsPhoneNumberValid2] = useState(
    'phoneNumberValid2',
    false
  );

  const handleSelection = (countryData: PhoneInputTypes) => {
    setPhoneInputSelected2(countryData);
    ref.current?.collapse();
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
          setPhoneNumber={(phoneInput) => setPhoneNumber2(phoneInput)}
          phoneInputSelected={phoneInputSelected2}
          phoneNumber={phoneNumber2}
          handleDropDownSelect={() => ref.current?.expand()}
          setIsPhoneNumberValid={setIsPhoneNumberValid2}
          isPhoneNumberValid={isPhoneNumberValid2}
        />
        <Spacing />
      </Container>
      <BottomSheet ref={ref}>
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
