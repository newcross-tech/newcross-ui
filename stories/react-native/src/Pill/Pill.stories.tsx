import { Meta, Story } from '@storybook/react';
import {
  Pill,
  PillProps,
  PillGroup,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import Container from '../Container';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBird } from '@fortawesome/pro-solid-svg-icons';
import Spacing, { SpacingSizes } from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './PillInfo';
import { getParameters } from '../utils';

export default {
  title: 'ReactNative/Components/Pill',
  component: Pill,
  parameters: getParameters(),
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
        <Typography variant={TypographyVariant.heading7}>
          Pill with Label
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Pill label="Label" removable={false} />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading7}>
          Disabled Pill with Label
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Pill label="Label" removable={false} disabled />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading7}>
          Removable Pill Group
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <PillGroup>
          <Pill label="One" />
          <Pill label="Two" />
        </PillGroup>
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading7}>
        Pill with Label
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill label="Label" removable={false} />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading7}>
        Disabled Pill with Label
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill label="Label" removable={false} disabled />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading7}>
        Pill with Icon
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill
        label="Label"
        removable={false}
        icon={<FontAwesomeIcon icon={faBird} />}
      />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading7}>
        Disabled Pill with Icon
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill
        label="Label"
        removable={false}
        disabled
        icon={<FontAwesomeIcon icon={faBird} />}
      />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading7}>
        Removable Pill with Icon
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill label="Label" icon={<FontAwesomeIcon icon={faBird} />} />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading7}>
        Disabled Removable Pill with Icon
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill label="Label" disabled icon={<FontAwesomeIcon icon={faBird} />} />
      <Spacing size={SpacingSizes.Large} />
    </Container>
  );
};

const Template: Story<PillProps> = ({ ...rest }) => {
  return (
    <Container>
      <Pill {...rest} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = { label: 'Label', icon: <FontAwesomeIcon icon={faBird} /> };
