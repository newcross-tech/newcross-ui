import { ScrollView } from 'react-native';
import { Meta, Story } from '@storybook/react';
import {
  CheckboxGroup,
  CheckboxGroupProps,
  Typography,
  TypographyVariant,
} from '@newcross-tech/ui-react-native';
import Container from '../Container';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/CheckboxGroup',
  component: CheckboxGroup,
} as Meta;

export const Variants = () => {
  return (
    <ScrollView>
      <Typography variant={TypographyVariant.heading4}>
        Everything is Checked
      </Typography>

      <CheckboxGroup
        defaultChecked={['apple', 'banana', 'pear']}
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Pear', value: 'pear' },
        ]}
      />
      <Spacing />
      <Typography variant={TypographyVariant.heading4}>
        One or more is Checked
      </Typography>

      <CheckboxGroup
        defaultChecked={['banana']}
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Pear', value: 'pear' },
        ]}
      />
      <Spacing />
      <Typography variant={TypographyVariant.heading4}>
        One or more is Disabled
      </Typography>

      <CheckboxGroup
        defaultChecked={['apple']}
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana', disabled: true },
          { label: 'Pear', value: 'pear' },
        ]}
      />
      <Spacing />
      <Typography variant={TypographyVariant.heading4}>
        One or more has Error
      </Typography>

      <CheckboxGroup
        defaultChecked={['apple', 'banana']}
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana', hasError: true },
          { label: 'Pear', value: 'pear' },
        ]}
      />
    </ScrollView>
  );
};

const Template: Story<CheckboxGroupProps> = (props) => (
  <Container direction="column">
    <Typography variant={TypographyVariant.heading3}>Checkbox Group</Typography>
    <CheckboxGroup
      {...props}
      options={[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Pear', value: 'pear' },
      ]}
    />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = { label: 'All' };
