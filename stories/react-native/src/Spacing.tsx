import { View, ViewStyle } from 'react-native';
import { healthforce } from '@newcross-ui/design-tokens';

const { SpacingBase12 } = healthforce;

export enum SpacingPositions {
  Bottom = 'Bottom',
  Horizontal = 'Horizontal',
}

type SpacingProps = {
  position?: SpacingPositions;
};

const positionValues: Record<SpacingPositions, ViewStyle> = {
  [SpacingPositions.Bottom]: { marginBottom: SpacingBase12 },
  [SpacingPositions.Horizontal]: { marginHorizontal: SpacingBase12 },
};

const Spacing = ({ position = SpacingPositions.Bottom }: SpacingProps) => {
  return <View style={{ ...positionValues[position] }}></View>;
};

export default Spacing;
