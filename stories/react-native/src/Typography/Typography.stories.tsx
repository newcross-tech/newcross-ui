import { Meta, Story } from '@storybook/react';
import {
  Typography,
  TypographyProps,
  Variant,
} from '@newcross-ui/react-native';
import Container from '../Container';
import Spacing from '../Spacing';

export default {
  title: 'ReactNative/Components/Typography',
  component: Typography,
} as Meta;

export const All = () => {
  return (
    <Container>
      <Typography variant={Variant.heading3}>h3 Heading</Typography>
      <Spacing />
      <Typography variant={Variant.heading5}>h5 Heading</Typography>
      <Spacing />
      <Typography variant={Variant.heading6}>h6 Heading</Typography>
      <Spacing />
      <Typography variant={Variant.heading7}>h7 Heading</Typography>
      <Spacing />
      <Typography variant={Variant.paragraph1}>p1 Paragraph</Typography>
      <Spacing />
      <Typography variant={Variant.paragraph2}>p2 Paragraph</Typography>
    </Container>
  );
};

const Template: Story<TypographyProps> = (props) => (
  <Container>
    <Typography {...props} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = { children: 'My Text', style: { color: 'blue' } };
