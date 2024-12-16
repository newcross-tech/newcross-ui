import { faBird } from '@fortawesome/pro-solid-svg-icons/faBird';
import { Meta, Story } from '@storybook/react';
import Pill, { PillProps } from '../../components/Pill';
import PillGroup from '../../components/PillGroup';
import Container from '../../components/Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './PillInfo';
import * as StoryTitle from '../StoryTitle';
import useTheme from '../../hooks/useTheme';
import { PillVariant } from '../../components/Pill/Pill.types';
import Icon from '../../components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <Container flexDirection="column" gap="lg">
      {/* Variants */}
      <Container flexDirection="column" gap="md">
        {/* Label Pill */}
        <Container flexDirection="column" gap="sm">
          <StoryTitle.Regular>Pill with Label</StoryTitle.Regular>
          <Container flexDirection="row" gap="sm" alignItems="center">
            <Pill label="Large" />
            <Pill label="Small" size="small" />
          </Container>
        </Container>

        {/* Selected Pill */}
        <Container flexDirection="column" gap="sm">
          <StoryTitle.Regular>Selected Pill</StoryTitle.Regular>
          <Container flexDirection="row" gap="sm" alignItems="center">
            <Pill label="Large" selected />
            <Pill label="Small" selected size="small" />
          </Container>
        </Container>

        {/* Disabled Pill */}
        <Container flexDirection="column" gap="sm">
          <StoryTitle.Regular>Disabled Pill</StoryTitle.Regular>
          <Container flexDirection="row" gap="sm" alignItems="center">
            <Pill label="Large" disabled />
            <Pill label="Small" disabled size="small" />
          </Container>
        </Container>

        {/* Pill with Icon */}
        <Container flexDirection="column" gap="sm">
          <StoryTitle.Regular>Pill with Icon</StoryTitle.Regular>
          <Container flexDirection="row" gap="sm" alignItems="center">
            <Pill label="Large" icon={<Icon variant="p1" icon={faBird} />} />
            <Pill
              label="Small"
              icon={<Icon variant="p2" icon={faBird} />}
              size="small"
            />
          </Container>
        </Container>

        {/* Disabled Pill with Icon */}
        <Container flexDirection="column" gap="sm">
          <StoryTitle.Regular>Disabled Pill with Icon</StoryTitle.Regular>
          <Container flexDirection="row" gap="sm" alignItems="center">
            <Pill
              label="Large"
              disabled
              icon={<Icon variant="p1" icon={faBird} />}
            />
            <Pill
              label="Small"
              disabled
              icon={<Icon variant="p2" icon={faBird} />}
              size="small"
            />
          </Container>
        </Container>

        {/* Removable Pill */}
        <Container flexDirection="column" gap="sm">
          <StoryTitle.Regular>Removable Pill</StoryTitle.Regular>
          <Container flexDirection="row" gap="sm" alignItems="center">
            <Pill label="Large" removable />
            <Pill label="Small" removable size="small" />
          </Container>
        </Container>

        {/* Removable Pill with Icon */}
        <Container flexDirection="column" gap="sm">
          <StoryTitle.Regular>Removable Pill with Icon</StoryTitle.Regular>
          <Container flexDirection="row" gap="sm" alignItems="center">
            <Pill
              label="Large"
              removable
              icon={<Icon variant="p1" icon={faBird} />}
            />
            <Pill
              label="Small"
              removable
              icon={<Icon variant="p2" icon={faBird} />}
              size="small"
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
export const VariantsWithColor = () => {
  const theme = useTheme();
  return (
    <Container flexDirection="column">
      <StoryTitle.Regular>Status Pills</StoryTitle.Regular>
      <Container flexDirection="row">
        <Pill label="Default" icon={<Icon variant="p1" icon={faBird} />} />
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
            icon={<Icon variant="p1" icon={faBird} />}
          />
        ))}
      </Container>
      <StoryTitle.Regular>Custom styled Pill</StoryTitle.Regular>
      <Container flexDirection="row">
        {[
          {
            style: {
              iconStyles: { color: theme.ThemesSecondary400 },
              textStyles: { color: theme.ThemesSecondary400 },
              coreStyles: {
                backgroundColor: theme.ThemesNeutral0,
              },
            },
          },
          {
            style: {
              iconStyles: { color: theme.ThemesNeutral700 },
              textStyles: { color: theme.ThemesNeutral700 },
              coreStyles: {
                backgroundColor: theme.ThemesWarning400,
              },
            },
          },
          {
            style: {
              iconStyles: { color: theme.ThemesTertiary700 },
              textStyles: { color: theme.ThemesTertiary700 },
              coreStyles: {
                backgroundColor: theme.ThemesTertiary300,
              },
            },
          },
          {
            style: {
              iconStyles: { color: theme.ThemesPrimary100 },
              textStyles: { color: theme.ThemesPrimary100 },
              coreStyles: {
                backgroundColor: theme.ThemesPrimary700,
              },
            },
          },
          {
            style: {
              iconStyles: { color: theme.ThemesSecondary400 },
              textStyles: { color: theme.ThemesSecondary400 },
              coreStyles: {
                backgroundColor: theme.ThemesSecondary100,
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
Interactive.args = {
  label: 'Label',
  icon: <Icon variant="p1" icon={faBird} />,
};
