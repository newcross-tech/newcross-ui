import { Meta, Story } from '@storybook/react';
import CheckboxGroup, {
  CheckboxGroupProps,
} from '../../components/CheckboxGroup';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './CheckboxGroupInfo';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/CheckboxGroup',
  component: CheckboxGroup,
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
        <StoryTitle.Overview>Checkbox Group</StoryTitle.Overview>
        <CheckboxGroup
          defaultChecked={[]}
          options={[
            { label: 'Apple', value: 'fruit1' },
            { label: 'Banana', value: 'fruit2' },
            { label: 'Pear', value: 'fruit3' },
          ]}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Everything is Checked</StoryTitle.Regular>

      <CheckboxGroup
        defaultChecked={['Apple', 'Banana', 'Pear']}
        options={['Apple', 'Banana', 'Pear']}
      />
      <Container m="sm" />
      <StoryTitle.Regular>One or more is Checked</StoryTitle.Regular>

      <CheckboxGroup
        defaultChecked={['Banana']}
        options={['Apple', 'Banana', 'Pear']}
      />
      <Container m="sm" />
      <StoryTitle.Regular>One or more is Disabled</StoryTitle.Regular>

      <CheckboxGroup
        defaultChecked={['Apple']}
        options={[
          { label: 'Apple', value: 'fruit1' },
          { label: 'Banana', value: 'fruit2', disabled: true },
          { label: 'Pear', value: 'fruit3' },
        ]}
      />
      <Container m="sm" />
      <StoryTitle.Regular>
        Some are Disabled and one of them checked
      </StoryTitle.Regular>

      <CheckboxGroup
        defaultChecked={['Apple']}
        options={[
          { label: 'Apple', value: 'fruit1', disabled: true },
          { label: 'Banana', value: 'fruit2', disabled: true },
          { label: 'Pear', value: 'fruit3' },
        ]}
      />
      <Container m="sm" />
      <StoryTitle.Regular>
        Some are Disabled and all of them checked
      </StoryTitle.Regular>

      <CheckboxGroup
        defaultChecked={['Apple', 'Banana', 'Pear']}
        options={[
          { label: 'Apple', value: 'fruit1', disabled: true },
          { label: 'Banana', value: 'fruit2', disabled: true },
          { label: 'Pear', value: 'fruit3' },
        ]}
      />
      <Container m="sm" />
      <StoryTitle.Regular>One or more has Error</StoryTitle.Regular>

      <CheckboxGroup
        defaultChecked={['Apple', 'Banana']}
        options={[
          { label: 'Apple', value: 'fruit1' },
          { label: 'Banana', value: 'fruit2', hasError: true },
          { label: 'Pear', value: 'fruit3' },
        ]}
      />
    </Container>
  );
};
const Template: Story<CheckboxGroupProps> = () => (
  <Container flexDirection="column">
    <StoryTitle.Regular>Checkbox Group</StoryTitle.Regular>
    <CheckboxGroup defaultChecked={[]} options={['Apple', 'Banana', 'Pear']} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {};
