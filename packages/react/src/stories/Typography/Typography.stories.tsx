import { Meta, Story } from '@storybook/react';
import React from 'react';
import Typography, {
  TypographyProps,
  TypographyVariant,
} from '../../components/Typography';
import Container from '../Container';
import Spacing from '../Spacing';

export default {
  title: 'React/Components/Typography',
  component: Typography,
} as Meta;

const variants: { variant: TypographyVariant; text: string }[] = [
  { variant: 'heading1', text: 'h1 Heading 32px' },
  { variant: 'heading2', text: 'h2 Heading 28px' },
  { variant: 'heading3', text: 'h3 Heading 24px' },
  { variant: 'heading4', text: 'h4 Heading 20px' },
  { variant: 'heading5', text: 'h5 Heading 18px' },
  { variant: 'heading6', text: 'h6 Heading 16px' },
  { variant: 'subtitle1', text: 's1 Subtitle 14px' },
  { variant: 'subtitle2', text: 's2 Subtitle 12px' },
  { variant: 'paragraph1', text: 'p1 Paragraph 16px' },
  { variant: 'paragraph2', text: 'p2 Paragraph 14px' },
  { variant: 'paragraph3', text: 'p3 Paragraph 12px' },
  { variant: 'paragraph4', text: 'p4 Paragraph 10px' },
];

export const Variants = () => {
  return (
    <Container direction="column" hasPadding={false}>
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
  <Container direction="column" hasPadding={false}>
    <Typography {...props} />
  </Container>
);

export const Interactive: Story<TypographyProps> = Template.bind({});

Interactive.args = {
  children: 'My Text',
  variant: 'heading1',
};
