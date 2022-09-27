import React from 'react';
import { Meta, Story } from '@storybook/react';
import Container from '../Container';
import Spacing from '../Spacing';
import Typography, {
  TypographyProps,
  TypographyVariant,
} from '../../components/Typography';

export default {
  title: 'React/Components/Typography',
  component: Typography,
} as Meta;

const {
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
} = TypographyVariant;

const variants = [
  { variant: heading1, text: 'h1 Heading 28px' },
  { variant: heading2, text: 'h2 Heading 20px' },
  { variant: heading3, text: 'h3 Heading 16px' },
  { variant: heading4, text: 'h4 Heading 14px' },
  { variant: heading5, text: 'h5 Heading 12px' },
  { variant: paragraph1, text: 'p1 Paragraph 16px' },
  { variant: paragraph2, text: 'p2 Paragraph 14px' },
  { variant: paragraph3, text: 'p3 Paragraph 12px' },
  { variant: paragraph4, text: 'p4 Paragraph 10px' },
];

export const Variants = () => {
  return (
    <Container>
      {variants.map(({ variant, text }, index) => (
        <React.Fragment key={`${variant}${text}${index}`}>
          <Typography variant={variant}>{text}</Typography>
          <Spacing />
        </React.Fragment>
      ))}
    </Container>
  );
};

const Template: Story<TypographyProps> = (props) => (
  <Container>
    <Typography {...props} />
  </Container>
);

export const Interactive: Story<TypographyProps> = Template.bind({});

Interactive.args = {
  children: 'My Text',
  variant: TypographyVariant.heading1,
};
