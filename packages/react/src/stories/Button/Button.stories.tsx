import React from 'react';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons/faCircleChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../../components/Button';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './ButtonInfo';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Button',
  component: Button,
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
        <Container m="SpacingBase12" />
        <Button variant="primary">Primary Button</Button>
        <Container m="SpacingBase12" />
        <Button variant="secondary">Secondary Button</Button>
        <Container m="SpacingBase12" />
        <Button variant="danger">Danger Button</Button>
        <Container m="SpacingBase12" />
      </Container>
    </InfoTemplate>
  );
};

export const VariantsWithSizes = () => {
  return (
    <Container display="block">
      <StoryTitle.Regular>
        Primary Button with Different Sizes
      </StoryTitle.Regular>
      <Container m="SpacingBase12" />
      <Button size="small">Small Button</Button>
      <Container m="SpacingBase12" />
      <Button size="large">Large Button</Button>
      <Container m="SpacingBase12" />
      <Button fullWidth size="small">
        Full Width Small Button
      </Button>
      <Container m="SpacingBase12" />
      <Button fullWidth size="large">
        Full Width Large Button
      </Button>
    </Container>
  );
};

export const Variants = () => {
  return (
    <Container display="block">
      <StoryTitle.Regular>Primary Button</StoryTitle.Regular>
      <Container m="SpacingBase12" />
      <Button variant="primary">Primary Button</Button>
      <Container m="SpacingBase12" />
      <Button disabled variant="primary">
        Primary Disabled Button
      </Button>
      <Container m="SpacingBase12" />
      <Container m="SpacingBase12" />
      <StoryTitle.Regular>Secondary Button</StoryTitle.Regular>
      <Container m="SpacingBase12" />
      <Button variant="secondary">Secondary Button</Button>
      <Container m="SpacingBase12" />
      <Button disabled variant="secondary">
        Secondary Disabled Button
      </Button>
      <Container m="SpacingBase12" />
      <Container m="SpacingBase12" />
      <StoryTitle.Regular>Danger Button</StoryTitle.Regular>
      <Container m="SpacingBase12" />
      <Button variant="danger">Danger Button</Button>
      <Container m="SpacingBase12" />
      <Button disabled variant="danger">
        Danger Disabled Button
      </Button>
      <Container m="SpacingBase12" />
    </Container>
  );
};
export const VariantsWithIcons = () => {
  return (
    <Container display="block">
      <StoryTitle.Regular>Primary Button with Icons</StoryTitle.Regular>
      <Container m="SpacingBase12" />
      <Button
        size="small"
        rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
      >
        Right Icon
      </Button>
      <Container m="SpacingBase12" />
      <Button leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}>
        Left Icon
      </Button>
      <Container m="SpacingBase12" />
      <Button
        rightIcon={<FontAwesomeIcon icon={faCircleChevronRight} />}
      ></Button>
      <Container m="SpacingBase12" />
      <Button fullWidth rightIcon={<FontAwesomeIcon icon={faChevronRight} />}>
        Full Width with Right Icon
      </Button>
      <Container m="SpacingBase12" />
      <Button
        fullWidth
        rightIcon={<FontAwesomeIcon icon={faCircleChevronRight} />}
      />
    </Container>
  );
};
const Template = ({ children, ...rest }: ButtonProps) => (
  <Button {...rest} rightIcon={<FontAwesomeIcon icon={faChevronRight} />}>
    {children}
  </Button>
);

export const Interactive: Story<ButtonProps> = Template.bind({});

Interactive.args = { children: 'My Button' };
