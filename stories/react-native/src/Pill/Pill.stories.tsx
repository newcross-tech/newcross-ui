import { Meta, Story } from '@storybook/react';
import {
  Pill,
  PillGroup,
  PillProps,
  Typography,
  TypographyVariant,
  PillSizes,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import Container from '../Container';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBird } from '@fortawesome/pro-solid-svg-icons/faBird';
import Spacing, { SpacingSizes } from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './PillInfo';
import { getParameters } from '../utils';

const { ColorBaseOrange300, ColorBaseOrange100 } = native.healthforce;

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
        <Typography variant={TypographyVariant.heading4}>
          Pill with Label
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Pill label="Label" removable={false} />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
          Disabled Pill with Label
        </Typography>
        <Spacing size={SpacingSizes.Large} />
        <Pill label="Label" removable={false} disabled />
        <Spacing size={SpacingSizes.Large} />
        <Typography variant={TypographyVariant.heading4}>
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

export const VariantsWithColor = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading4}>
        Pill Color - Warning
      </Typography>

      <Spacing size={SpacingSizes.Large} />
      <Pill
        label="Label"
        containerStyle={{ backgroundColor: ColorBaseOrange300 }}
        iconStyle={{ color: ColorBaseOrange100 }}
        textStyle={{ color: ColorBaseOrange100 }}
        icon={<FontAwesomeIcon icon={faBird} />}
      />
    </Container>
  );
};
export const Variants = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading4}>
        Pill with Label
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill label="Label" removable={false} />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Disabled Pill with Label
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill label="Label" removable={false} disabled />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Pill with Icon
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill
        label="Label"
        removable={false}
        icon={<FontAwesomeIcon icon={faBird} />}
      />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
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
      <Typography variant={TypographyVariant.heading4}>
        Removable Pill with Icon
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill label="Label" icon={<FontAwesomeIcon icon={faBird} />} />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Disabled Removable Pill with Icon
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill label="Label" disabled icon={<FontAwesomeIcon icon={faBird} />} />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Small Pill with No Border
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <Pill
        label="Label"
        hasBorder={false}
        size={PillSizes.small}
        icon={<FontAwesomeIcon icon={faBird} />}
      />
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
