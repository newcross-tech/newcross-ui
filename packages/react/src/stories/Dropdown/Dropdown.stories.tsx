import React from 'react';
import { Meta, Story } from '@storybook/react';
import DropDown, { DropdownProps } from '../../components/Dropdown';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './DropdownInfo';
import Container from '../../components/Container';
import * as StoryTitle from '../StoryTitle';

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
      <Container flexDirection="column">
        <StoryTitle.Overview>Single Select</StoryTitle.Overview>
        <Container m="SpacingBase8" />
        <DropDown
          options={[
            'Dropdown Option 1',
            'Dropdown Option 2',
            'Dropdown Option overflowing Dropdown Option overflowing Dropdown Option overflowing',
          ]}
          label="Label"
          placeholder="Select a 'label'"
        />
        <Container m="SpacingBase8" />
        <StoryTitle.Overview>Multi Select</StoryTitle.Overview>
        <Container m="SpacingBase8" />
        <DropDown
          variant="multi"
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
    <Container flexDirection="column">
      <StoryTitle.Regular>Default Multi Select</StoryTitle.Regular>
      <Container m="SpacingBase8" />
      <DropDown
        variant="multi"
        label="Label"
        placeholder="Select some 'labels'"
        options={options}
        testID={'Drop1'}
      />

      <Container m="SpacingBase8" />
      <StoryTitle.Regular>Disabled Dropdown</StoryTitle.Regular>
      <Container m="SpacingBase8" />
      <DropDown
        variant="multi"
        placeholder={'Disabled Dropdown'}
        disabled
        options={options}
        testID={'Drop2'}
      />
      <Container m="SpacingBase8" />
      <StoryTitle.Regular>Error Dropdown</StoryTitle.Regular>
      <Container m="SpacingBase8" />
      <DropDown
        variant="multi"
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
    <Container flexDirection="column">
      <StoryTitle.Regular>Default Dropdown</StoryTitle.Regular>
      <Container m="SpacingBase8" />
      <DropDown
        label="Label"
        placeholder="Select a 'label'"
        options={options}
        testID={'Drop1'}
      />

      <Container m="SpacingBase8" />
      <StoryTitle.Regular>Disabled Dropdown</StoryTitle.Regular>
      <Container m="SpacingBase8" />
      <DropDown
        placeholder={'Disabled Dropdown'}
        disabled
        options={options}
        testID={'Drop2'}
      />
      <Container m="SpacingBase8" />
      <StoryTitle.Regular>Error Dropdown</StoryTitle.Regular>
      <Container m="SpacingBase8" />
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
  variant: 'single',
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
