import { Meta, Story } from '@storybook/react';
import Container from '../Container';
import CheckboxGroup, {
  CheckboxGroupProps,
} from '../../components/CheckboxGroup';
import Typography, { TypographyVariant } from '../../components/Typography';
import Spacing, { SpacingSizes } from '../Spacing';
import { TITLE, DESCRIPTION, DO, DONT } from './CheckboxGroupInfo';
import InfoTemplate from '../InfoTemplate/InfoTemplate';

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
      <Container direction="column">
        <Typography variant={TypographyVariant.heading4}>
          Checkbox Group
        </Typography>
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
    <Container direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Everything is Checked
      </Typography>

      <CheckboxGroup
        defaultChecked={['Apple', 'Banana', 'Pear']}
        options={['Apple', 'Banana', 'Pear']}
      />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        One or more is Checked
      </Typography>

      <CheckboxGroup
        defaultChecked={['Banana']}
        options={['Apple', 'Banana', 'Pear']}
      />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        One or more is Disabled
      </Typography>

      <CheckboxGroup
        defaultChecked={['Apple']}
        options={[
          { label: 'Apple', value: 'fruit1' },
          { label: 'Banana', value: 'fruit2', disabled: true },
          { label: 'Pear', value: 'fruit3' },
        ]}
      />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        One or more has Error
      </Typography>

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
  <Container direction="column">
    <Typography variant={TypographyVariant.heading4}>Checkbox Group</Typography>
    <CheckboxGroup defaultChecked={[]} options={['Apple', 'Banana', 'Pear']} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {};
