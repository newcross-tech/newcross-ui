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
            'Dropdown Option 1',
            'Dropdown Option 2',
            'Dropdown Option overflowing Dropdown Option overflowing Dropdown Option overflowing',
          ]}
          label="Label"
          placeholder="Select a 'label'"
        />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Multi Select
        </Typography>
        <DropDown
          isMulti
          options={[
            'Dropdown Option 1',
            'Dropdown Option 2',
            'Dropdown Option overflowing Dropdown Option overflowing Dropdown Option overflowing',
          ]}
          label="Label"
          placeholder="Select multiple 'labels'"
        />
      </Container>
    </InfoTemplate>
  );
};

export const MultiSelectVariants = () => {
  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ];

  return (
    <Container direction="column" hasPadding={false}>
      <Typography variant={TypographyVariant.heading4}>
        Default Multi Select
      </Typography>
      <DropDown
        isMulti
        label="Label"
        placeholder="Select some 'labels'"
        options={options}
        testID={'Drop1'}
      />

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Disabled Dropdown
      </Typography>
      <DropDown
        isMulti
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
        isMulti
        placeholder={'Error Dropdown'}
        errorText={'Please make a selection'}
        options={options}
        testID={'Drop3'}
      />
    </Container>
  );
};

export const SingleSelectVariants = () => {
  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ];

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
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ],
  placeholder: "Select a 'label'",
};
