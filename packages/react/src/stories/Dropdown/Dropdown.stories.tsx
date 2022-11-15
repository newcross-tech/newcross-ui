import { Meta, Story } from '@storybook/react';
import DropDown, { DropdownProps } from '../../components/Dropdown';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './DropdownInfo';

import React from 'react';
import Typography, { TypographyVariant } from '../../components/Typography';
import Container from '../Container';
import Spacing, { SpacingSizes } from '../Spacing';

export default {
  title: 'React/Components/DropDown',
  component: DropDown,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container direction="column" hasPadding={false}>
        <Typography variant={TypographyVariant.heading4}>
          Single Select
        </Typography>
        <DropDown
          options={[
            'Option 1',
            'Option 2 may be something that has really long copy this ...',
            'Option 3',
          ]}
          label="Label"
          placeholder="Select a 'label'"
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <Container direction="column" hasPadding={false}>
      <Typography variant={TypographyVariant.heading4}>
        Default Dropdown
      </Typography>
      <DropDown
        label="Label"
        placeholder="Select a 'label'"
        options={options}
        testID={'Drop1'}
      />

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Disabled Dropdown
      </Typography>
      <DropDown
        placeholder={'Disabled Dropdown'}
        disabled
        options={options}
        testID={'Drop2'}
      />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Error Dropdown
      </Typography>
      <DropDown
        placeholder={'Error Dropdown'}
        errorText={'Please make a selection'}
        options={options}
        testID={'Drop3'}
      />
    </Container>
  );
};

const Template: Story<DropdownProps> = ({ ...rest }) => (
  <Container>
    <DropDown {...rest} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedValue: 'Option1',
  placeholder: "Select a 'label'",
};
