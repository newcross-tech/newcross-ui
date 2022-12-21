import { Meta, Story } from '@storybook/react';
import React from 'react';
import Checkbox, {
  CheckboxProps,
  CheckboxType,
} from '../../components/Checkbox';
import Typography, { TypographyVariant } from '../../components/Typography';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './CheckboxInfo';

export default {
  title: 'React/Components/Checkbox',
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
      <Container display="block">
        <Checkbox label="Label" />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container display="block">
      <Typography variant={TypographyVariant.heading4}>Enabled</Typography>
      <Spacing />
      <Checkbox label="Label" />
      <Checkbox label="Label" checked />
      <Checkbox type={CheckboxType.INDETERMINATE} checked label="Label" />

      <Typography variant={TypographyVariant.heading4}>Disabled</Typography>
      <Spacing />
      <Checkbox label="Label" disabled />
      <Checkbox label="Label" checked disabled />
      <Checkbox
        type={CheckboxType.INDETERMINATE}
        checked
        label="Label"
        disabled
      />

      <Typography variant={TypographyVariant.heading4}>Error</Typography>
      <Spacing />
      <Checkbox label="Label" hasError />
      <Checkbox label="Label" hasError checked />
      <Checkbox
        type={CheckboxType.INDETERMINATE}
        label="Label"
        checked
        hasError
      />

      <Typography variant={TypographyVariant.heading4}>
        With long text
      </Typography>
      <Spacing />
      <Checkbox label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
    </Container>
  );
};

const Template: Story<CheckboxProps> = ({
  type,
  label,
  disabled,
  hasError,
  ...rest
}) => (
  <Container display="block">
    <Checkbox
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
  label: 'Label',
  disabled: false,
  hasError: false,
  checked: true,
  testID: '',
};
