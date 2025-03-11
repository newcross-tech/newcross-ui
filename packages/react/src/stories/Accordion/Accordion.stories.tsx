import { faCircleInfo } from '@fortawesome/pro-regular-svg-icons/faCircleInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import Accordion, { AccordionProps } from '../../components/Accordion';
import AccordionGroup from '../../components/AccordionGroup';
import Typography from '../../components/Typography';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './AccordionInfo';
import * as StoryTitle from '../StoryTitle';

export default {
  title: 'React/Components/Accordion',
  component: Accordion,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container flexDirection="column">
        <StoryTitle.Overview>Default Accordion</StoryTitle.Overview>
        <Container my="xs" />
        <Accordion label={'Label'}>
          <Typography variant="p1" color="defaultDark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
        <Container my="xs" />
        <StoryTitle.Overview>
          Default Accordion Group (Exclusive Selection)
        </StoryTitle.Overview>
        <Container my="xs" />
        <AccordionGroup>
          <Accordion label={'Section 1'}>
            <Typography variant="p1" color="defaultDark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
          <Accordion label={'Section 2'}>
            <Typography variant="p1" color="defaultDark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
        </AccordionGroup>
        <Container my="xs" />
        <StoryTitle.Overview>
          Default Accordion Group (Multiple Selection)
        </StoryTitle.Overview>
        <Container my="xs" />
        <AccordionGroup exclusiveSelection={false}>
          <Accordion label={'Section 1'}>
            <Typography variant="p1" color="defaultDark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
          <Accordion label={'Section 2'}>
            <Typography variant="p1" color="defaultDark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
        </AccordionGroup>
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Default Accordion</StoryTitle.Regular>
      <Container my="xs" />
      <Accordion label={'Label'}>
        <Typography variant="p1" color="defaultDark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.
        </Typography>
      </Accordion>
      <Container my="xs" />
      <StoryTitle.Regular>Two Line Label Accordion</StoryTitle.Regular>
      <Container my="xs" />
      <Accordion
        label={
          'This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines'
        }
      >
        <Typography variant="p1" color="defaultDark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.
        </Typography>
      </Accordion>
      <Container my="xs" />
      <StoryTitle.Regular>Expanded Accordion with Icon</StoryTitle.Regular>
      <Container my="xs" />
      <Accordion
        label={'Information'}
        icon={<FontAwesomeIcon icon={faCircleInfo} />}
        expanded={true}
      >
        <Typography variant="p1" color="defaultDark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.
        </Typography>
      </Accordion>
    </Container>
  );
};

const Template: Story<AccordionProps> = ({ ...rest }) => {
  return (
    <Container flexDirection="column">
      <Accordion {...rest}>
        <Typography variant="p1" color="defaultDark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.
        </Typography>
      </Accordion>
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'This is a label',
  onClick: undefined,
};
