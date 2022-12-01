import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import Tooltip, { TooltipProps } from '../../components/Tooltip';
import {
  TooltipPositions,
  TooltipVariant,
} from '../../components/Tooltip/Tooltip.types';
import Typography, { TypographyVariant } from '../../components/Typography';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import Spacing, { SpacingSizes } from '../Spacing';
import { DESCRIPTION, DO, DONT, TITLE } from './Tooltip.info';

export default {
  title: 'React/Components/Tooltip',
  component: Tooltip,
} as Meta;

const CenteredWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Variants = () => {
  return (
    <Container display={'block'} direction="column">
      <Typography variant={TypographyVariant.heading4}>
        Default Tooltip
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Tooltip position={TooltipPositions.Right}>
        This is an info message. This is an info message. This is an info
        message.
      </Tooltip>
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Question Tooltip
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Tooltip
        variant={TooltipVariant.question}
        position={TooltipPositions.Right}
      >
        This is a question message. This is a question message. This is a
        question message.
      </Tooltip>
    </Container>
  );
};

export const VariantsWithPosition = () => {
  return (
    <Container direction="column" display="flex">
      <Typography variant={TypographyVariant.heading3}>
        Variants with Position
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Container display="inline-flex" justifyContent="space-around">
        <Tooltip position={TooltipPositions.Top}>Top</Tooltip>
        <Typography variant={TypographyVariant.heading4}>Top</Typography>

        <Tooltip position={TooltipPositions.Right}>Right</Tooltip>
        <Typography variant={TypographyVariant.heading4}>Right</Typography>

        <Tooltip position={TooltipPositions.Bottom}>Bottom</Tooltip>
        <Typography variant={TypographyVariant.heading4}>Bottom</Typography>

        <Tooltip position={TooltipPositions.Left}>Left</Tooltip>
        <Typography variant={TypographyVariant.heading4}>Left</Typography>
      </Container>
    </Container>
  );
};

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container>
        <Tooltip position={TooltipPositions.Top}>My Content</Tooltip>
      </Container>
    </InfoTemplate>
  );
};

const Template: Story<TooltipProps> = (props) => (
  <>
    <Typography variant={TypographyVariant.heading4}>
      Interactive Tooltip
    </Typography>
    <CenteredWrapper>
      <Tooltip {...props} />
    </CenteredWrapper>
  </>
);

export const Interactive = Template.bind({});
Interactive.args = {
  position: TooltipPositions.Right,
  children: <>My Content</>,
};
