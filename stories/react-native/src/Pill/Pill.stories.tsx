import { Meta, Story } from '@storybook/react';
import {
  Pill,
  PillGroup,
  PillGroupOrientation,
  PillProps,
  PillSizes,
  PillVariant,
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
  ColorSemanticsWarning300,
  ColorBaseGrey100,
  ColorBaseMagenta400,
  ColorBaseMagenta100,
  ColorBaseCyan400,
  ColorBaseCyan100,
  ColorBaseMint400,
  ColorBaseMint100,
  ColorPrimaryWarmth,
  BrandColorSecondary200,
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
  const statusPills = [
    { label: 'Success', variant: PillVariant.success, hasBorder: false },
    { label: 'Info', variant: PillVariant.info, hasBorder: false },
    { label: 'Warning', variant: PillVariant.warning, hasBorder: false },
    { label: 'Error', variant: PillVariant.error, hasBorder: false },
    { label: 'Default', variant: PillVariant.default, hasBorder: false },
    {
      label: 'Success',
      variant: PillVariant.success,
      hasBorder: true,
      size: PillSizes.small,
    },
    {
      label: 'Info',
      variant: PillVariant.info,
      hasBorder: true,
      size: PillSizes.small,
    },
    {
      label: 'Warning',
      variant: PillVariant.warning,
      hasBorder: true,
      size: PillSizes.small,
    },
    {
      label: 'Error',
      variant: PillVariant.error,
      hasBorder: true,
      size: PillSizes.small,
    },
    {
      label: 'Default',
      variant: PillVariant.default,
      hasBorder: true,
      size: PillSizes.small,
    },
  ];

  const complimentaryExampleColors = [
    { primary: ColorPrimaryWarmth, secondary: BrandColorSecondary200 },
    { primary: ColorSemanticsWarning300, secondary: ColorBaseGrey100 },
    { primary: ColorBaseMagenta400, secondary: ColorBaseMagenta100 },
    { primary: ColorBaseCyan400, secondary: ColorBaseCyan100 },
    { primary: ColorBaseMint400, secondary: ColorBaseMint100 },
  ];

  return (
    <Container>
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>Status Pills</Typography>
      <Spacing size={SpacingSizes.Large} />
      <PillGroup
        orientation={PillGroupOrientation.horizontal}
        children={statusPills.map((pill) => (
          <Pill {...pill} removable={false} />
        ))}
      />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Status Pills with Icon
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <PillGroup
        orientation={PillGroupOrientation.horizontal}
        children={statusPills.map((pill) => (
          <Pill
            {...pill}
            removable={false}
            icon={<FontAwesomeIcon icon={faBird} />}
          />
        ))}
      />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Customizable Pills
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <PillGroup
        orientation={PillGroupOrientation.horizontal}
        children={complimentaryExampleColors.map((colors) => (
          <Pill
            label="Label"
            removable={false}
            hasBorder={false}
            style={{ backgroundColor: colors.primary }}
            iconStyle={{ color: colors.secondary }}
            textStyle={{ color: colors.secondary }}
            icon={<FontAwesomeIcon icon={faBird} />}
          />
        ))}
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
