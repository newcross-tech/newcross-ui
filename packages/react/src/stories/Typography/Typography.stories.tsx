import React from 'react';
import { Meta, Story } from '@storybook/react';
import Typography, {
  TypographyProps,
  TypographyVariant,
} from '../../components/Typography';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './TypographyInfo';

export default {
  title: 'React/Components/Typography',
  component: Typography,
} as Meta;

const variants: { variant: TypographyVariant; text: string }[] = [
  { variant: 'h1', text: 'h1 Heading' },
  { variant: 'h2', text: 'h2 Heading' },
  { variant: 'h3', text: 'h3 Heading' },
  { variant: 'h4', text: 'h4 Heading' },
  { variant: 'h5', text: 'h5 Heading' },
  { variant: 'p1', text: 'p1 Paragraph' },
  { variant: 'p2', text: 'p2 Paragraph' },
  { variant: 'p3', text: 'p3 Paragraph' },
  { variant: 'p1Strong', text: 'p1Strong Paragraph' },
  { variant: 'p2Strong', text: 'p2Strong Paragraph' },
  { variant: 'p3Strong', text: 'p3Strong Paragraph' },
  { variant: 'p1Action', text: 'p1Action (Uppercase Paragraph)' },
  { variant: 'p2Action', text: 'p2Action (Uppercase Paragraph)' },
  { variant: 'p3Action', text: 'p3Action (Uppercase Paragraph)' },
  {
    variant: 'p1ActionRegular',
    text: 'p1ActionRegular Paragraph (Uppercase Paragraph)',
  },
  {
    variant: 'p2ActionRegular',
    text: 'p2ActionRegular Paragraph (Uppercase Paragraph)',
  },
  {
    variant: 'p3ActionRegular',
    text: 'p3ActionRegular Paragraph (Uppercase Paragraph)',
  },
];

const legacyVariants: { variant: TypographyVariant; text: string }[] = [
  { variant: 'heading1', text: 'Legacy heading1 (Deprecated)' },
  { variant: 'heading2', text: 'Legacy heading2 (Deprecated)' },
  { variant: 'heading3', text: 'Legacy heading3 (Deprecated)' },
  { variant: 'heading4', text: 'Legacy heading4 (Deprecated)' },
  { variant: 'heading5', text: 'Legacy heading5 (Deprecated)' },
  { variant: 'heading6', text: 'Legacy heading6 (Deprecated)' },
  { variant: 'subtitle1', text: 'Legacy subtitle1 (Deprecated)' },
  { variant: 'subtitle2', text: 'Legacy subtitle2 (Deprecated)' },
  { variant: 'paragraph1', text: 'Legacy paragraph1 (Deprecated)' },
  { variant: 'paragraph2', text: 'Legacy paragraph2 (Deprecated)' },
  { variant: 'paragraph3', text: 'Legacy paragraph3 (Deprecated)' },
  { variant: 'paragraph4', text: 'Legacy paragraph4 (Deprecated)' },
];

export const Overview = () => (
  <InfoTemplate
    title={TITLE}
    description={DESCRIPTION}
    doInfo={DO}
    dontInfo={DONT}
  />
);

export const Variants = () => (
  <Container flexDirection="column" gap="lg">
    {variants.map(({ variant, text }) => (
      <Typography key={variant} variant={variant}>
        {text}
      </Typography>
    ))}
  </Container>
);

export const LegacyVariants = () => (
  <Container flexDirection="column" gap="lg">
    {legacyVariants.map(({ variant, text }) => (
      <Typography key={variant} variant={variant}>
        {text}
      </Typography>
    ))}
  </Container>
);

const Template: Story<TypographyProps> = (props) => (
  <Container flexDirection="column">
    <Typography {...props} />
  </Container>
);

export const Interactive: Story<TypographyProps> = Template.bind({});

Interactive.args = {
  children: 'Responsive Typography Example',
  variant: 'h1',
  color: 'defaultDark',
  align: 'left',
};

Interactive.argTypes = {
  align: { control: 'select', options: ['left', 'right', 'center', 'justify'] },
};
