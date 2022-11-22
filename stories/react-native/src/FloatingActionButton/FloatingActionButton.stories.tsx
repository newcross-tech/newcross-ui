import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container from '../Container';
import Spacing, { SpacingSizes } from '../Spacing';
import {
  FloatingActionButton,
  FloatingActionButtonProps,
  FABVariant,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { faCalendarDays } from '@fortawesome/pro-light-svg-icons/faCalendarDays';

export default {
  title: 'ReactNative/Components/FloatingActionButton',
  component: FloatingActionButton,
} as Meta;

export const Variants = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading4}>
        Floating Action Button
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <FloatingActionButton icon={faCalendarDays} variant={FABVariant.icon} />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Floating Action Button with text
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <FloatingActionButton
        icon={faCalendarDays}
        variant={FABVariant.iconWithText}
        text={'test'}
      />
    </Container>
  );
};

const Template: Story<FloatingActionButtonProps> = (props) => {
  return (
    <Container>
      <FloatingActionButton {...props} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  icon: faCalendarDays,
  variant: FABVariant.icon,
};
