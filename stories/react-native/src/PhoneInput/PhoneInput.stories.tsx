import { Meta, Story } from '@storybook/react';
import { ScrollView, Text, View } from 'react-native';
import {
  TextInput,
  TextInputProps,
  Typography,
  TypographyVariant,
  BottomSheet,
  BottomSheetRefProps,
  Button,
  ButtonSizes,
  ButtonCorners,
  ListOption,
} from '@newcross-ui/react-native';
import Spacing, { SpacingPositions } from '../Spacing';
import Container from '../Container';
import { getParameters, isWebPlatform } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './PhoneInputInfo';
import useState from 'storybook-addon-state';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createRef } from 'react';
import { countryCodes } from './constants';

export default {
  title: 'ReactNative/Components/PhoneInput',
  component: TextInput,
  parameters: {
    layout: 'fullscreen',
    ...getParameters(true, false),
  },
} as Meta;

export const Overview = () => {
  const [cc, setCc] = useState('cc', {
    name: {
      en: 'United Kingdom',
    },
    dial_code: '+44',
    code: 'GB',
    flag: '🇬🇧',
  });
  const [number, setNumber] = useState('number', '');

  const ref = createRef<BottomSheetRefProps>();

  const onSelection = (countryCode) => {
    setCc(countryCode);
    ref.current?.collapse();
  };
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
          value={number}
          textContentType="name"
          label="Enter phone number"
          onChangeText={setNumber}
          options
          selectedOption={cc}
          onOptionsPress={() => ref.current?.expand()}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [cc, setCc] = useState('cc', {
    name: {
      en: 'United Kingdom',
    },
    dial_code: '+44',
    code: 'GB',
    flag: '🇬🇧',
  });
  const [number, setNumber] = useState('number', '');

  const ref = createRef<BottomSheetRefProps>();

  const onSelection = (countryCode) => {
    setCc(countryCode);
    ref.current?.collapse();
  };

  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container>
        <Typography variant={TypographyVariant.heading7}>
          Phone Number
        </Typography>

        <TextInput
          value={number}
          textContentType="name"
          label="Enter phone number"
          onChangeText={setNumber}
          options
          selectedOption={cc}
          onOptionsPress={() => ref.current?.expand()}
        />
        <Spacing />
      </Container>

      <BottomSheet ref={ref}>
        <View>
          <Typography>Choose Country code</Typography>
          <Spacing />
          {countryCodes.map((countryCode) => (
            <ListOption
              optionText={
                countryCode.name.en + '  ' + '(' + countryCode.dial_code + ')'
              }
              leftIcon={
                <Text style={{ fontSize: 20 }}>{countryCode.flag}</Text>
              }
              onSelect={() => onSelection(countryCode)}
            />
          ))}
          <Spacing />
          <Button
            style={{ alignSelf: 'center' }}
            corners={ButtonCorners.pill}
            onPress={() => ref.current?.collapse()}
            size={ButtonSizes.medium}
          >
            Close
          </Button>
          <Spacing position={SpacingPositions.Bottom} />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
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
  const [cc, setCc] = useState('cc', {
    name: {
      en: 'United Kingdom',
    },
    dial_code: '+44',
    code: 'GB',
    flag: '🇬🇧',
  });
  const [number, setNumber] = useState('number', '');

  const ref = createRef<BottomSheetRefProps>();

  const onSelection = (countryCode) => {
    setCc(countryCode);
    ref.current?.collapse();
  };
  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container>
        <TextInput
          value={number}
          textContentType="name"
          label="Enter phone number"
          onChangeText={setNumber}
          options
          selectedOption={cc}
          onOptionsPress={() => ref.current?.expand()}
        />
      </Container>
      <BottomSheet ref={ref}>
        <View>
          <Typography>Choose Country code</Typography>
          <Spacing />
          {countryCodes.map((countryCode) => (
            <ListOption
              optionText={
                countryCode.name.en + '  ' + '(' + countryCode.dial_code + ')'
              }
              leftIcon={
                <Text style={{ fontSize: 20 }}>{countryCode.flag}</Text>
              }
              onSelect={() => onSelection(countryCode)}
            />
          ))}
          <Spacing />
          <Button
            style={{ alignSelf: 'center' }}
            corners={ButtonCorners.pill}
            onPress={() => ref.current?.collapse()}
            size={ButtonSizes.medium}
          >
            Close
          </Button>
          <Spacing position={SpacingPositions.Bottom} />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'Label',
  disabled: false,
  isValid: false,
};
