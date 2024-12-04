import React from 'react';
import { faBird } from '@fortawesome/pro-solid-svg-icons/faBird';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import Pill, { PillProps } from '../../components/Pill';
import PillGroup from '../../components/PillGroup';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './PillInfo';
import * as StoryTitle from '../StoryTitle';
import useTheme from '../../hooks/useTheme';
import { PillVariant } from '../../components/Pill/Pill.types';

export default {
  title: 'React/Components/Pill',
  component: Pill,
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
        <StoryTitle.Overview>Pill with Label</StoryTitle.Overview>
        <Container>
          <Pill label="Label" removable={false} />
          <Pill label="Label" removable={false} selected />
        </Container>

        <StoryTitle.Overview>Disabled Pill with Label</StoryTitle.Overview>
        <Pill label="Label" removable={false} disabled />

        <StoryTitle.Overview>Removable Pill Group</StoryTitle.Overview>

        <PillGroup>
          <Pill removable label="One" />
          <Pill removable label="Two" />
        </PillGroup>
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Pill with Label</StoryTitle.Regular>
      <Pill label="Label" />
      <StoryTitle.Regular>Selected Pill with Label</StoryTitle.Regular>
      <Pill label="Label" selected />
      <StoryTitle.Regular>Disabled Pill with Label</StoryTitle.Regular>
      <Pill label="Label" disabled />
      <StoryTitle.Regular>Pill with Icon</StoryTitle.Regular>
      <Pill label="Label" icon={<FontAwesomeIcon icon={faBird} />} />
      <StoryTitle.Regular>Disabled Pill with Icon</StoryTitle.Regular>
      <Pill label="Label" disabled icon={<FontAwesomeIcon icon={faBird} />} />
      <StoryTitle.Regular>Removable Pill with Icon</StoryTitle.Regular>
      <Pill removable label="Label" icon={<FontAwesomeIcon icon={faBird} />} />
      <StoryTitle.Regular>Disabled Removable Pill with Icon</StoryTitle.Regular>
      <Pill
        removable
        label="Label"
        disabled
        icon={<FontAwesomeIcon icon={faBird} />}
      />
      <StoryTitle.Regular>Removable Pill with No Border</StoryTitle.Regular>
      <Pill
        removable
        label="Label"
        hasBorder={false}
        icon={<FontAwesomeIcon icon={faBird} />}
      />
    </Container>
  );
};
export const VariantsWithColor = () => {
  const theme = useTheme();
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Status Pills</StoryTitle.Regular>
      <Container flexDirection="row">
        <Pill label="Default" icon={<FontAwesomeIcon icon={faBird} />} />
        <Pill label="Success" statusVariant="success" />
        <Pill label="Info" statusVariant="info" />
        <Pill label="Warning" statusVariant="warning" />
        <Pill label="Error" statusVariant="error" />
      </Container>

      <StoryTitle.Regular>Status Pills With Icons</StoryTitle.Regular>
      <Container flexDirection="row">
        {[
          { label: 'Default', statusVariant: 'default' as PillVariant },
          { label: 'Success', statusVariant: 'success' as PillVariant },
          { label: 'Info', statusVariant: 'info' as PillVariant },
          { label: 'Warning', statusVariant: 'warning' as PillVariant },
          { label: 'Error', statusVariant: 'error' as PillVariant },
        ].map(({ label, statusVariant }) => (
          <Pill
            key={label}
            label={label}
            statusVariant={statusVariant}
            icon={<FontAwesomeIcon icon={faBird} />}
          />
        ))}
      </Container>
      <StoryTitle.Regular>Custom styled Pill</StoryTitle.Regular>
      <Container flexDirection="row">
        {[
          {
            style: {
              iconStyles: { color: theme.ColorBaseMint100 },
              textStyles: { color: theme.ColorBaseMint100 },
              coreStyles: {
                backgroundColor: theme.ColorBaseWhite100,
              },
            },
          },
          {
            style: {
              iconStyles: { color: theme.ColorBaseGrey100 },
              textStyles: { color: theme.ColorBaseGrey100 },
              coreStyles: {
                backgroundColor: theme.ColorBaseOrange300,
              },
            },
          },
          {
            style: {
              iconStyles: { color: theme.ColorBaseMagenta100 },
              textStyles: { color: theme.ColorBaseMagenta100 },
              coreStyles: {
                backgroundColor: theme.ColorBaseMagenta400,
              },
            },
          },
          {
            style: {
              iconStyles: { color: theme.ColorBaseCyan100 },
              textStyles: { color: theme.ColorBaseCyan100 },
              coreStyles: {
                backgroundColor: theme.ColorBaseCyan400,
              },
            },
          },
          {
            style: {
              iconStyles: { color: theme.ColorBaseMint100 },
              textStyles: { color: theme.ColorBaseMint100 },
              coreStyles: {
                backgroundColor: theme.ColorBaseMint400,
              },
            },
          },
        ].map(({ style }) => (
          <Pill
            key={style.coreStyles.backgroundColor}
            label="Custom"
            hasBorder={false}
            style={style}
            icon={<FontAwesomeIcon icon={faBird} />}
          />
        ))}
      </Container>
    </Container>
  );
};

const Template: Story<PillProps> = ({ ...rest }) => {
  return (
    <Container>
      <Pill removable {...rest} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = { label: 'Label', icon: <FontAwesomeIcon icon={faBird} /> };
