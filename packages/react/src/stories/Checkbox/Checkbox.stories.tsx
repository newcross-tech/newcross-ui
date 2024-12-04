import React from 'react';
import { Meta, Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from '../../components/Checkbox';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './CheckboxInfo';
import useState from 'storybook-addon-state';
import * as StoryTitle from '../StoryTitle';
import Typography from '../../components/Typography';
import Link from '../../components/Link';

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
      <StoryTitle.Regular>Enabled</StoryTitle.Regular>
      <Container my="SpacingBase4" />
      <Checkbox label="Label" />
      <Checkbox label="Label" checked />
      <Checkbox type="indeterminate" checked label="Label" />

      <StoryTitle.Regular>Disabled</StoryTitle.Regular>
      <Container my="SpacingBase4" />
      <Checkbox label="Label" disabled />
      <Checkbox label="Label" checked disabled />
      <Checkbox type="indeterminate" checked label="Label" disabled />

      <StoryTitle.Regular>Error</StoryTitle.Regular>
      <Container my="SpacingBase4" />
      <Checkbox label="Label" hasError />
      <Checkbox label="Label" hasError checked />
      <Checkbox type="indeterminate" label="Label" checked hasError />

      <StoryTitle.Regular>With long text</StoryTitle.Regular>
      <Container my="SpacingBase4" />
      <Checkbox label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />

      <StoryTitle.Regular>Custom React Label</StoryTitle.Regular>
      <Checkbox
        label={
          <span>
            <b>custom</b> react label
          </span>
        }
        checked
      />
      <StoryTitle.Regular>Label with text and link</StoryTitle.Regular>
      <Checkbox
        label={
          <>
            <Typography variant="paragraph1" display="inline">
              Hello
            </Typography>
            <Container display="inline" ml="SpacingBase4">
              <Link
                variant="paragraph1"
                display="inline"
                onClick={(e) => {
                  e.stopPropagation();
                  alert('link is clicked');
                }}
              >
                world
              </Link>
            </Container>
          </>
        }
        onChange={() => alert('checkbox is clicked')}
      />
    </Container>
  );
};

const Template: Story<CheckboxProps> = ({
  type,
  label,
  disabled,
  hasError,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState('interactiveCheckbox', false);

  return (
    <Container display="block">
      <Checkbox
        type={type}
        label={label}
        hasError={hasError}
        checked={isChecked}
        onChange={setIsChecked}
        disabled={disabled}
        {...rest}
      />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'Label',
  disabled: false,
  hasError: false,
  testID: '',
};
