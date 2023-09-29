import { Meta, Story } from '@storybook/react';
import Accordion, { AccordionProps } from '../../components/Accordion';
import AccordionGroup from '../../components/AccordionGroup';
import Typography from '../../components/Typography';
import Container from '../Container';
import Spacing from '../Spacing';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/AccordionGroup',
  component: AccordionGroup,
} as Meta;

export const Variants = () => {
  return (
    <Container direction="column" hasPadding={false}>
      <StoryTitle.Regular>
        Accordion Group (Exclusive Selection)
      </StoryTitle.Regular>
      <Spacing size={'Large'} />
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
      <Spacing size={'Large'} />
      <Spacing size={'Large'} />
      <StoryTitle.Regular>
        Accordion Group (Multiple Selection)
      </StoryTitle.Regular>
      <Spacing size={'Large'} />
      <AccordionGroup exclusiveSelection={false}>
        <Accordion label={'Section 1'}>
          <Typography variant={'paragraph2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.Mauris quis dapibus nisi. Donec malesuada condimentum
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
