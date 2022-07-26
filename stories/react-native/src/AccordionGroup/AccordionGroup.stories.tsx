import { Meta, Story } from '@storybook/react';
import {
  AccordionGroup,
  Accordion,
  AccordionProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Spacing, { SpacingSizes } from '../Spacing';
import Container from '../Container';
import { getParameters, isWebPlatform } from '../utils';
import { ScrollView } from 'react-native-gesture-handler';

export default {
  title: 'ReactNative/Components/AccordionGroup',
  component: AccordionGroup,
  parameters: getParameters(),
} as Meta;

export const Variants = () => {
  return (
    <ScrollView>
      <Container
        containerStyle={{
          width: isWebPlatform ? '35%' : '100%',
          height: '50%',
          marginTop: isWebPlatform ? 0 : 20,
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant={TypographyVariant.heading7}>
          Accordion Group (Exclusive Selection)
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <AccordionGroup>
          <Accordion label={'Section 1'}>
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
              lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis
              vitae consequat nec, vestibulum at metus. Quisque et lectus in
              tortor mattis cursus ut vel sapien.
            </Typography>
          </Accordion>
          <Accordion label={'Section 2'}>
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
              lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis
              vitae consequat nec, vestibulum at metus. Quisque et lectus in
              tortor mattis cursus ut vel sapien.
            </Typography>
          </Accordion>
          <Accordion label={'Section 3'}>
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
              lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis
              vitae consequat nec, vestibulum at metus. Quisque et lectus in
              tortor mattis cursus ut vel sapien.
            </Typography>
          </Accordion>
        </AccordionGroup>
        <Spacing size={SpacingSizes.Large} />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading7}>
          Accordion Group (Multiple Selection)
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <AccordionGroup exclusiveSelection={false}>
          <Accordion label={'Section 1'}>
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.Mauris quis dapibus nisi. Donec malesuada condimentum
              lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis
              vitae consequat nec, vestibulum at metus. Quisque et lectus in
              tortor mattis cursus ut vel sapien.
            </Typography>
          </Accordion>
          <Accordion label={'Section 2'}>
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
              lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis
              vitae consequat nec, vestibulum at metus. Quisque et lectus in
              tortor mattis cursus ut vel sapien.
            </Typography>
          </Accordion>
          <Accordion label={'Section 3'}>
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.Mauris quis dapibus nisi. Donec malesuada condimentum
              lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis
              vitae consequat nec, vestibulum at metus. Quisque et lectus in
              tortor mattis cursus ut vel sapien.
            </Typography>
          </Accordion>
        </AccordionGroup>
      </Container>
    </ScrollView>
  );
};

const Template: Story<AccordionProps> = ({ ...rest }) => {
  return (
    <Container
      containerStyle={{
        width: isWebPlatform ? '35%' : '100%',
        justifyContent: 'flex-start',
        marginTop: isWebPlatform ? 0 : 20,
      }}
    >
      <AccordionGroup {...rest}>
        <Accordion>
          <Typography variant={TypographyVariant.paragraph1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
            lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis vitae
            consequat nec, vestibulum at metus. Quisque et lectus in tortor
            mattis cursus ut vel sapien.
          </Typography>
        </Accordion>
        <Accordion>
          <Typography variant={TypographyVariant.paragraph1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
            lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis vitae
            consequat nec, vestibulum at metus. Quisque et lectus in tortor
            mattis cursus ut vel sapien.
          </Typography>
        </Accordion>
      </AccordionGroup>
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {};
