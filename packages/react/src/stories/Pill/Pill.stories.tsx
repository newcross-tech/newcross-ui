import { faBird } from '@fortawesome/pro-solid-svg-icons/faBird';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, Story } from '@storybook/react';
import Pill, { PillProps } from '../../components/Pill';
import PillGroup from '../../components/PillGroup';
import Typography from '../../components/Typography';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './PillInfo';

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
        <Typography variant={'heading4'}>Pill with Label</Typography>
        <Container>
          <Pill label="Label" removable={false} />
          <Pill label="Label" removable={false} selected />
        </Container>

        <Typography variant={'heading4'}>Disabled Pill with Label</Typography>
        <Pill label="Label" removable={false} disabled />

        <Typography variant={'heading4'}>Removable Pill Group</Typography>

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
    <Container direction="column">
      <Typography variant={'heading4'}>Pill with Label</Typography>
      <Pill label="Label" />
      <Typography variant={'heading4'}>Selected Pill with Label</Typography>
      <Pill label="Label" selected />

      <Typography variant={'heading4'}>Disabled Pill with Label</Typography>
      <Pill label="Label" disabled />

      <Typography variant={'heading4'}>Pill with Icon</Typography>
      <Pill label="Label" icon={<FontAwesomeIcon icon={faBird} />} />
      <Typography variant={'heading4'}>Disabled Pill with Icon</Typography>

      <Pill label="Label" disabled icon={<FontAwesomeIcon icon={faBird} />} />

      <Typography variant={'heading4'}>Removable Pill with Icon</Typography>

      <Pill removable label="Label" icon={<FontAwesomeIcon icon={faBird} />} />

      <Typography variant={'heading4'}>
        Disabled Removable Pill with Icon
      </Typography>

      <Pill
        removable
        label="Label"
        disabled
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
