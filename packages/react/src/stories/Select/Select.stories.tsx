import { Meta, Story } from '@storybook/react';
import Select, { SelectProps } from '../../components/Select';
import { DESCRIPTION, DO, DONT, TITLE } from './Select.info';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';

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
      <Container flexDirection="column" gap="SpacingBase8">
        <Select
          options={options}
          label="Single Select"
          placeholder="Select a 'label'"
        />
        <Select
          isMulti
          options={options}
          label="Multi Select"
          placeholder="Select multiple 'labels'"
        />
      </Container>
    </InfoTemplate>
  );
};

export const SingleSelectVariants = () => {
  return (
    <Container flexDirection="column" gap="SpacingBase8">
      <Select
        label="Default Select"
        id="default-select"
        placeholder="Select an option..."
        options={options}
      />
      <Select
        label={'Not Searchable Select'}
        placeholder="Select some 'labels'"
        options={options}
        isSearchable={false}
      />
      <Select
        label={'Disabled Select'}
        placeholder={'Disabled Select'}
        disabled
        options={options}
      />
      <Select
        label={'Error Select'}
        hasError
        placeholder={'Error Select'}
        errorText={'Please make a selection'}
        options={options}
      />
    </Container>
  );
};

export const MultiSelectVariants = () => {
  return (
    <Container flexDirection="column" gap="SpacingBase8">
      <Select
        label={'Default Multi Select'}
        isMulti
        placeholder="Select some 'labels'"
        options={options}
      />
      <Select
        label={'Disabled Select'}
        isMulti
        placeholder={'Disabled Select'}
        disabled
        options={options}
      />
      <Select
        label={'Error Select'}
        isMulti
        placeholder={'Error Select'}
        hasError
        errorText={'Please make a selection'}
        options={options}
      />
    </Container>
  );
};

export const GroupedSelect = () => {
  return (
    <Container flexDirection="column" gap="SpacingBase8">
      <Select
        isMulti
        label="Group Select"
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
  options,
  placeholder: "Select a 'label'",
};
