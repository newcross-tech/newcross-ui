import { faBird } from '@fortawesome/pro-solid-svg-icons/faBird';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import Pill, { PillProps } from '../../components/Pill';
import PillGroup from '../../components/PillGroup';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './PillInfo';
import * as StoryTitle from '../StoryTitle';
import useTheme from '../../hooks/useTheme';

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
      <Container direction="column">
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
  const theme = useTheme();
  return (
    <Container direction="column">
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
      <StoryTitle.Regular>Status Pill Variants</StoryTitle.Regular>
      <Container direction="row">
        <Pill label="Default" icon={<FontAwesomeIcon icon={faBird} />} />
        <Pill
          label="Success"
          statusVariant="success"
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Info"
          statusVariant="info"
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Warning"
          statusVariant="warning"
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Error"
          statusVariant="error"
          icon={<FontAwesomeIcon icon={faBird} />}
        />
      </Container>
      <StoryTitle.Regular>Custom styled Pill</StoryTitle.Regular>
      <Pill
        label="Custom"
        style={{
          iconStyles: { color: theme.ColorBaseRed100 },
          textStyles: { color: theme.ColorBaseBlue100 },
          coreStyles: {
            backgroundColor: theme.ColorBaseCyan200,
            borderColor: theme.ColorBaseGreen100,
          },
        }}
        icon={<FontAwesomeIcon icon={faBird} />}
      />
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
