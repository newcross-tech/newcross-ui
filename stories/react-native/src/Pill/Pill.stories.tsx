import { Meta, Story } from '@storybook/react';
import {
  Pill,
  PillGroup,
  PillGroupOrientation,
  PillProps,
  PillSizes,
  PillStatus,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import Container from '../Container';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBird } from '@fortawesome/pro-solid-svg-icons/faBird';
import Spacing, { SpacingSizes } from '../Spacing';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './PillInfo';
import { getParameters } from '../utils';

const {
  ColorBaseOrange300,
  ColorBaseOrange100,
  ColorBaseBlack100,
  ColorBaseWhite100,
} = native.healthforce;

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
  console.log(-1);
  return (
    <Container>
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Small Status Pills
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <PillGroup orientation={PillGroupOrientation.horizontal}>
        <Pill
          label="Success"
          removable={false}
          hasBorder={false}
          size={PillSizes.small}
          status={PillStatus.success}
        />
        <Pill
          label="Info"
          removable={false}
          hasBorder={false}
          size={PillSizes.small}
          status={PillStatus.info}
        />
        <Pill
          label="Warning"
          removable={false}
          hasBorder={false}
          size={PillSizes.small}
          status={PillStatus.warning}
        />
        <Pill
          label="Error"
          removable={false}
          hasBorder={false}
          size={PillSizes.small}
          status={PillStatus.error}
        />
        <Pill
          label="Default"
          removable={false}
          hasBorder={false}
          size={PillSizes.small}
          status={PillStatus.default}
        />
      </PillGroup>

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Medium Status Pills
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <PillGroup orientation={PillGroupOrientation.horizontal}>
        <Pill
          label="Success"
          removable={false}
          hasBorder={false}
          size={PillSizes.medium}
          status={PillStatus.success}
        />
        <Pill
          label="Info"
          removable={false}
          hasBorder={false}
          size={PillSizes.medium}
          status={PillStatus.info}
        />
        <Pill
          label="Warning"
          removable={false}
          hasBorder={false}
          size={PillSizes.medium}
          status={PillStatus.warning}
        />
        <Pill
          label="Error"
          removable={false}
          hasBorder={false}
          size={PillSizes.medium}
          status={PillStatus.error}
        />
        <Pill
          label="Default"
          removable={false}
          hasBorder={false}
          size={PillSizes.medium}
          status={PillStatus.default}
        />
      </PillGroup>

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Small Status Pills with Icon and Border
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <PillGroup orientation={PillGroupOrientation.horizontal}>
        <Pill
          label="Success"
          removable={false}
          hasBorder={true}
          size={PillSizes.small}
          status={PillStatus.success}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Info"
          removable={false}
          hasBorder={true}
          size={PillSizes.small}
          status={PillStatus.info}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Warning"
          removable={false}
          hasBorder={true}
          size={PillSizes.small}
          status={PillStatus.warning}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Error"
          removable={false}
          hasBorder={true}
          size={PillSizes.small}
          status={PillStatus.error}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Default"
          removable={false}
          hasBorder={true}
          size={PillSizes.small}
          status={PillStatus.default}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
      </PillGroup>

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Medium Status Pills with Icon and Border
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <PillGroup orientation={PillGroupOrientation.horizontal}>
        <Pill
          label="Success"
          removable={false}
          hasBorder={true}
          size={PillSizes.medium}
          status={PillStatus.success}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Info"
          removable={false}
          hasBorder={true}
          size={PillSizes.medium}
          status={PillStatus.info}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Warning"
          removable={false}
          hasBorder={true}
          size={PillSizes.medium}
          status={PillStatus.warning}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Error"
          removable={false}
          hasBorder={true}
          size={PillSizes.medium}
          status={PillStatus.error}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Default"
          removable={false}
          hasBorder={true}
          size={PillSizes.medium}
          status={PillStatus.default}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
      </PillGroup>

      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Custimizable Pills
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <PillGroup orientation={PillGroupOrientation.horizontal}>
        <Pill
          label="Label"
          removable={false}
          hasBorder={false}
          containerStyle={{ backgroundColor: ColorBaseOrange300 }}
          iconStyle={{ color: ColorBaseOrange100 }}
          textStyle={{ color: ColorBaseOrange100 }}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
        <Pill
          label="Label"
          removable={false}
          hasBorder={false}
          containerStyle={{ backgroundColor: ColorBaseBlack100 }}
          iconStyle={{ color: ColorBaseWhite100 }}
          textStyle={{ color: ColorBaseWhite100 }}
          icon={<FontAwesomeIcon icon={faBird} />}
        />
      </PillGroup>
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
