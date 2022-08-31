import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../../components/Button/Button';
import {
  ButtonCorners,
  ButtonSizes,
  ButtonVariant,
} from '../../components/Button/Button.types';
import Spacing from '../Spacing';

export default {
  title: 'React/Components/Button',
  component: Button,
} as Meta;

export const ButtonsWithSizes = () => {
  return (
    <>
      <Button size={ButtonSizes.small}>Small Button</Button>
      <Spacing />
      <Button size={ButtonSizes.medium}>Medium Button</Button>
      <Spacing />
      <Button size={ButtonSizes.large}>Large Button</Button>
      <Spacing />
      <Button fullWidth size={ButtonSizes.large}>
        Full Width Large Button
      </Button>
    </>
  );
};

export const ButtonsWithCorners = () => {
  return (
    <>
      <Button>Default Button</Button>
      <Spacing />
      <Button corners={ButtonCorners.rounded}>Rounded Button</Button>
      <Spacing />
      <Button corners={ButtonCorners.pill}>Pill Button</Button>
    </>
  );
};

export const Variants = () => {
  return (
    <>
      <Button variant={ButtonVariant.primary}>Primary Button</Button>
      <Spacing />
      <Button variant={ButtonVariant.secondary}>Secondary Button</Button>
      <Spacing />
      <Button variant={ButtonVariant.outlinePrimary}>
        Primary Outline Button
      </Button>
      <Spacing />
      <Button disabled variant={ButtonVariant.primary}>
        Primary Disabled Button
      </Button>
      <Spacing />
      <Button disabled variant={ButtonVariant.secondary}>
        Secondary Button
      </Button>
      <Spacing />
      <Button disabled variant={ButtonVariant.outlinePrimary}>
        Primary Outline Disabled Button
      </Button>
      <Spacing />
    </>
  );
};

const Template = ({ children, ...rest }: ButtonProps) => (
  <Button {...rest}>{children}</Button>
);

export const Interactive: Story<ButtonProps> = Template.bind({});

Interactive.args = { children: 'My Button' };
