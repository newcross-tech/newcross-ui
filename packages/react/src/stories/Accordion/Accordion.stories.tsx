import { faCircleInfo } from '@fortawesome/pro-solid-svg-icons/faCircleInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import Accordion, { AccordionProps } from '../../components/Accordion';
import AccordionGroup from '../../components/AccordionGroup';
import Typography from '../../components/Typography';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing from '../Spacing';
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
      <Container direction="column" hasPadding={false}>
        <StoryTitle.Overview>Default Accordion</StoryTitle.Overview>
        <Spacing size={'Large'} />
        <Accordion label={'Label'}>
          <Typography variant={'paragraph2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
        <Spacing size={'Large'} />
        <StoryTitle.Overview>
          Default Accordion Group (Exclusive Selection)
        </StoryTitle.Overview>
        <Spacing size={'Large'} />
        <AccordionGroup>
          <Accordion label={'Section 1'}>
            <Typography variant={'paragraph2'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
          <Accordion label={'Section 2'}>
            <Typography variant={'paragraph2'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
        </AccordionGroup>
        <Spacing size={'Large'} />
        <StoryTitle.Overview>
          Default Accordion Group (Multiple Selection)
        </StoryTitle.Overview>
        <Spacing size={'Large'} />
        <AccordionGroup exclusiveSelection={false}>
          <Accordion label={'Section 1'}>
            <Typography variant={'paragraph2'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
          <Accordion label={'Section 2'}>
            <Typography variant={'paragraph2'}>
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
    <Container direction="column" hasPadding={false}>
      <StoryTitle.Regular>Default Accordion</StoryTitle.Regular>
      <Spacing size={'Large'} />
      <Accordion label={'Label'}>
        <Typography variant={'paragraph2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.
        </Typography>
      </Accordion>
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Two Line Label Accordion</StoryTitle.Regular>
      <Spacing size={'Large'} />
      <Accordion
        label={
          'This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines'
        }
      >
        <Typography variant={'paragraph2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.
        </Typography>
      </Accordion>
      <Spacing size={'Large'} />
      <StoryTitle.Regular>Expanded Accordion with Icon</StoryTitle.Regular>
      <Spacing size={'Large'} />
      <Accordion
        label={'Information'}
        icon={<FontAwesomeIcon icon={faCircleInfo} />}
        expanded={true}
      >
        <Typography variant={'paragraph2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. consequat.
        </Typography>
      </Accordion>
    </Container>
  );
};

const Template: Story<AccordionProps> = ({ ...rest }) => {
  return (
    <Container direction="column" hasPadding={false}>
      <Accordion {...rest}>
        <Typography variant={'paragraph2'}>
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
