import { Meta, Story } from '@storybook/react';
import { View } from 'react-native';
import {
  Checkbox,
  CheckboxProps,
  CheckboxType,
  Typography,
  TypographyVariant,
  Link,
  LinkSizes,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import Container from '../Container';
import Spacing from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './CheckboxInfo';

const { ColorPrimaryGravitas, SpacingBase4 } = native.healthforce;

export default {
  title: 'ReactNative/Components/Checkbox',
  component: Checkbox,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container>
        <Checkbox label="Label" />
      </Container>
    </InfoTemplate>
  );
};

const CustomLabel = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    <Typography
      style={{ color: ColorPrimaryGravitas, marginRight: SpacingBase4 }}
      variant={TypographyVariant.paragraph1}
    >
      I agree to Newcross
    </Typography>
    <Link size={LinkSizes.medium}>Terms and Conditions</Link>
  </View>
);

export const Variants = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading4}>Custom label</Typography>
      <Checkbox label={<CustomLabel />} />
      <Typography variant={TypographyVariant.heading4}>Enabled</Typography>
      <Checkbox label="Label" />
      <Checkbox label="Label" defaultChecked />
      <Checkbox
        type={CheckboxType.INDETERMINATE}
        label="Label"
        defaultChecked
      />

      <Typography variant={TypographyVariant.heading4}>Disabled</Typography>
      <Checkbox label="Label" disabled />
      <Checkbox label="Label" defaultChecked disabled />
      <Checkbox
        type={CheckboxType.INDETERMINATE}
        label="Label"
        defaultChecked
        disabled
      />

      <Typography variant={TypographyVariant.heading4}>Error</Typography>
      <Checkbox label="Label" hasError />
      <Checkbox label="Label" defaultChecked hasError />
      <Checkbox
        type={CheckboxType.INDETERMINATE}
        label="Label"
        defaultChecked
        hasError
      />

      <Typography variant={TypographyVariant.heading4}>
        With long text
      </Typography>
      <Checkbox label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
    </Container>
  );
};

const Template: Story<CheckboxProps> = ({
  defaultChecked,
  type,
  label,
  disabled,
  hasError,
  ...rest
}) => (
  <Container>
    <Checkbox
      defaultChecked={defaultChecked}
      type={type}
      label={label}
      disabled={disabled}
      hasError={hasError}
      {...rest}
    />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  defaultChecked: false,
  type: CheckboxType.CHECK,
  label: 'Label',
  disabled: false,
  hasError: false,
  testID: '',
};
