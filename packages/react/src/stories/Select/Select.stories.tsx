import { Meta } from '@storybook/react';
import { Select } from '../../components/Select';
import { DESCRIPTION, DO, DONT, TITLE } from './Select.info';
import Container from '../Container';
import Spacing from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import * as StoryTitle from '../StoryTitle';
import { SelectProps } from '../../components/Select';

export default {
  title: 'React/Components/Select',
  component: Select,
} as Meta;

const options = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' },
];

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container direction="column" hasPadding={false}>
        <StoryTitle.Overview>Single Select</StoryTitle.Overview>
        <Spacing />
        <Select
          options={options}
          label="Label"
          placeholder="Select a 'label'"
        />
        <Spacing size={'Large'} />
        <StoryTitle.Overview>Multi Select</StoryTitle.Overview>
        <Spacing />
        <Select
          isMulti
          options={options}
          label="Label"
          placeholder="Select multiple 'labels'"
        />
      </Container>
    </InfoTemplate>
  );
};

export const SingleSelectVariants = () => {
  return (
    <Container direction="column" hasPadding={false}>
      <StoryTitle.Regular>Default Select</StoryTitle.Regular>
      <Spacing />
      <Select
        id="default-select"
        placeholder="Select an option..."
        options={options}
      />
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Not Searchable Select</StoryTitle.Regular>
      <Spacing />
      <Select
        placeholder="Select some 'labels'"
        options={options}
        isSearchable={false}
      />
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Disabled Dropdown</StoryTitle.Regular>
      <Spacing />
      <Select placeholder={'Disabled Dropdown'} disabled options={options} />
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Error Dropdown</StoryTitle.Regular>
      <Spacing />
      <Select
        hasError
        placeholder={'Error Dropdown'}
        errorText={'Please make a selection'}
        options={options}
      />
    </Container>
  );
};

export const MultiSelectVariants = () => {
  return (
    <Container direction="column" hasPadding={false}>
      <StoryTitle.Regular>Default Multi Select</StoryTitle.Regular>
      <Spacing />
      <Select
        isMulti
        label="Label"
        placeholder="Select some 'labels'"
        options={options}
      />
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Disabled Dropdown</StoryTitle.Regular>
      <Spacing />
      <Select
        isMulti
        placeholder={'Disabled Dropdown'}
        disabled
        options={options}
      />
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Error Dropdown</StoryTitle.Regular>
      <Spacing />
      <Select
        isMulti
        placeholder={'Error Dropdown'}
        hasError
        errorText={'Please make a selection'}
        options={options}
      />
    </Container>
  );
};

export const GroupedSelect = () => {
  return (
    <Container direction="column" hasPadding={false}>
      <StoryTitle.Regular>Group Select</StoryTitle.Regular>
      <Spacing />
      <Select
        isMulti
        label="Label"
        placeholder="Select some 'labels'"
        options={[
          {
            label: 'Group1',
            options: [
              { label: 'Option 1', value: 'Option 1' },
              { label: 'Option 2', value: 'Option 2' },
              { label: 'Option 3', value: 'Option 3' },
            ],
          },
          {
            label: 'Group2',
            options: [
              { label: 'Option 4', value: 'Option 4' },
              { label: 'Option 5', value: 'Option 5' },
              { label: 'Option 6', value: 'Option 6' },
            ],
          },
        ]}
      />
    </Container>
  );
};

const Template: Story<SelectProps> = ({ ...rest }) => (
  <Container>
    <Select {...rest} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  isMulti: false,
  options: options,
  placeholder: "Select a 'label'",
};
