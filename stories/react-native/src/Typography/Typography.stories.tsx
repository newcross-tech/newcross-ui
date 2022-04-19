import { Meta, Story } from '@storybook/react';
import {
  Typography,
  TypographyProps,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/Typography',
  component: Typography,
} as Meta;

export const Variants = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading3}>h3 Heading</Typography>
      <Spacing />
      <Typography variant={TypographyVariant.heading5}>h5 Heading</Typography>
      <Spacing />
      <Typography variant={TypographyVariant.heading6}>h6 Heading</Typography>
      <Spacing />
      <Typography variant={TypographyVariant.heading7}>h7 Heading</Typography>
      <Spacing />
      <Typography variant={TypographyVariant.paragraph1}>
        p1 Paragraph
      </Typography>
      <Spacing />
      <Typography variant={TypographyVariant.paragraph2}>
        p2 Paragraph
      </Typography>
    </Container>
  );
};

const Template: Story<TypographyProps> = (props) => (
  <Container>
    <Typography {...props} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  children: 'My Text',
  style: { color: 'blue' },
  variant: TypographyVariant.heading3,
};
