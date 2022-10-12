import { Meta, Story } from '@storybook/react';
import Container from '../Container';
import Spacing, { SpacingSizes } from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './AccordionInfo';
import Typography, { TypographyVariant } from '../../components/Typography';
import Accordion, { AccordionProps } from '../../components/Accordion';
import { faCircleInfo } from '@fortawesome/pro-solid-svg-icons/faCircleInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccordionGroup from '../../components/AccordionGroup';

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
      <Container>
        <Typography variant={TypographyVariant.heading4}>
          Default Accordion
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Accordion label={'Label'}>
          <Typography variant={TypographyVariant.paragraph2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Default Accordion Group (Exclusive Selection)
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <AccordionGroup>
          <Accordion label={'Section 1'}>
            <Typography variant={TypographyVariant.paragraph2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
          <Accordion label={'Section 2'}>
            <Typography variant={TypographyVariant.paragraph2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
        </AccordionGroup>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Default Accordion Group (Multiple Selection)
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <AccordionGroup exclusiveSelection={false}>
          <Accordion label={'Section 1'}>
            <Typography variant={TypographyVariant.paragraph2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consequat.
            </Typography>
          </Accordion>
          <Accordion label={'Section 2'}>
            <Typography variant={TypographyVariant.paragraph2}>
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
    <>
      <Container>
        <Typography variant={TypographyVariant.heading4}>
          Default Accordion
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Accordion label={'Label'}>
          <Typography variant={TypographyVariant.paragraph2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Two Line Label Accordion
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Accordion
          label={
            'This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines This label flows onto 2 lines'
          }
        >
          <Typography variant={TypographyVariant.paragraph2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Expanded Accordion with Icon
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Accordion
          label={'Information'}
          icon={<FontAwesomeIcon icon={faCircleInfo} />}
          expanded={true}
        >
          <Typography variant={TypographyVariant.paragraph2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            consequat.
          </Typography>
        </Accordion>
      </Container>
    </>
  );
};

const Template: Story<AccordionProps> = ({ ...rest }) => {
  return (
    <Container>
      <Accordion {...rest}>
        <Typography variant={TypographyVariant.paragraph2}>
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
