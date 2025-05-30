import { Meta, Story } from '@storybook/react';
import Accordion, { AccordionProps } from '../../components/Accordion';
import AccordionGroup from '../../components/AccordionGroup';
import Typography from '../../components/Typography';
import Container from '../../components/Container';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/AccordionGroup',
  component: AccordionGroup,
} as Meta;

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>
        Accordion Group (Exclusive Selection)
      </StoryTitle.Regular>
      <Container my="SpacingBase4" />
      <AccordionGroup>
        <Accordion label={'Section 1'}>
          <Typography variant={'paragraph2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
            lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis vitae
            consequat nec, vestibulum at metus. Quisque et lectus in tortor
            mattis cursus ut vel sapien.
          </Typography>
        </Accordion>
        <Accordion label={'Section 2'}>
          <Typography variant={'paragraph2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
            lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis vitae
            consequat nec, vestibulum at metus. Quisque et lectus in tortor
            mattis cursus ut vel sapien.
          </Typography>
        </Accordion>
        <Accordion label={'Section 3'}>
          <Typography variant={'paragraph2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
            lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis vitae
            consequat nec, vestibulum at metus. Quisque et lectus in tortor
            mattis cursus ut vel sapien.
          </Typography>
        </Accordion>
      </AccordionGroup>
      <Container my="SpacingBase4" />
      <Container my="SpacingBase4" />
      <StoryTitle.Regular>
        Accordion Group (Multiple Selection)
      </StoryTitle.Regular>
      <Container my="SpacingBase4" />
      <AccordionGroup exclusiveSelection={false}>
        <Accordion label={'Section 1'} expanded>
          <Container flexDirection="column" m="auto" alignItems="center">
            <Typography variant="heading4">
              Center aligned contents on Expanded Accordion
            </Typography>
            <Typography variant="paragraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididunt.
            </Typography>
          </Container>
        </Accordion>
        <Accordion label={'Section 2'} expanded>
          <Typography variant={'paragraph2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
            lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis vitae
            consequat nec, vestibulum at metus. Quisque et lectus in tortor
            mattis cursus ut vel sapien.
          </Typography>
        </Accordion>
        <Accordion label={'Section 3'}>
          <Typography variant={'paragraph2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.Mauris quis dapibus nisi. Donec malesuada condimentum
            lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis vitae
            consequat nec, vestibulum at metus. Quisque et lectus in tortor
            mattis cursus ut vel sapien.
          </Typography>
        </Accordion>
      </AccordionGroup>
    </Container>
  );
};

const Template: Story<AccordionProps> = ({ ...rest }) => {
  return (
    <Container>
      <AccordionGroup {...rest}>
        <Accordion>
          <Typography variant={'paragraph2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat. Mauris quis dapibus nisi. Donec malesuada condimentum
            lorem vel pharetra. Ut sed ex ante. Ut erat tellus, venenatis vitae
            consequat nec, vestibulum at metus. Quisque et lectus in tortor
            mattis cursus ut vel sapien.
          </Typography>
        </Accordion>
        <Accordion>
          <Typography variant={'paragraph2'}>
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
