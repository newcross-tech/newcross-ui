import { View, ViewStyle } from 'react-native';
import { native } from '@newcross-ui/design-tokens';

const {
  SpacingBase12,
  SpacingBase24,
  SpacingBase32,
  BorderBaseWidthSm,
  ColorBaseGrey100,
} = native.healthforce;

export enum SpacingPositions {
  Bottom = 'Bottom',
  Horizontal = 'Horizontal',
}

export enum SpacingSizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

type SpacingProps = {
  position?: SpacingPositions;
  hasBorder?: boolean;
  size?: SpacingSizes;
};

const positionValues: Record<SpacingPositions, ViewStyle> = {
  [SpacingPositions.Bottom]: { marginBottom: SpacingBase12 },
  [SpacingPositions.Horizontal]: { marginHorizontal: SpacingBase12 },
};

type SizeValues = Record<SpacingSizes, Record<SpacingPositions, ViewStyle>>;

const sizeValues: SizeValues = {
  [SpacingSizes.Small]: {
    [SpacingPositions.Bottom]: { marginBottom: SpacingBase12 },
    [SpacingPositions.Horizontal]: { marginHorizontal: SpacingBase12 },
  },
  [SpacingSizes.Medium]: {
    [SpacingPositions.Bottom]: { marginBottom: SpacingBase24 },
    [SpacingPositions.Horizontal]: { marginHorizontal: SpacingBase24 },
  },
  [SpacingSizes.Large]: {
    [SpacingPositions.Bottom]: { marginBottom: SpacingBase32 },
    [SpacingPositions.Horizontal]: { marginHorizontal: SpacingBase32 },
  },
};

const borderValues = (hasBorder: boolean | undefined) =>
  hasBorder
    ? { borderBottomWidth: BorderBaseWidthSm, borderColor: ColorBaseGrey100 }
    : undefined;

const Spacing = ({
  position = SpacingPositions.Bottom,
  hasBorder,
  size = SpacingSizes.Small,
}: SpacingProps) => {
  return (
    <View
      style={{
        ...positionValues[position],
        ...borderValues(hasBorder),
        ...sizeValues[size],
      }}
    />
  );
};

export default Spacing;
