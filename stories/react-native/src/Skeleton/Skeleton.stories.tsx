import React from 'react';
import { View } from 'react-native';
import { Meta, Story } from '@storybook/react';
import {
  Card,
  Skeleton,
  SkeletonProps,
  useLayout,
} from '@newcross-tech/ui-react-native';
import { native } from '@newcross-tech/ui-design-tokens';
import { LinearGradient } from 'expo-linear-gradient';
import Container from '../Container';

const {
  SpacingBase8,
  SpacingBase12,
  SpacingBase16,
  SpacingBase24,
  SpacingBase80,
  ColorBaseGrey300,
  ColorBaseGrey500,
} = native.healthforce;

export default {
  title: 'ReactNative/Components/Skeleton',
  component: Skeleton,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta;

const startDirection = { x: 0, y: 0 };
const endDirection = { x: 1, y: 0 };

const LinearGradientComponent = () => (
  <LinearGradient
    start={startDirection}
    end={endDirection}
    style={{ flex: 1 }}
    colors={[ColorBaseGrey300, ColorBaseGrey500, ColorBaseGrey300]}
  />
);

export const Variants = () => {
  const { size, onLayout } = useLayout();

  return (
    <Container containerStyle={{ padding: SpacingBase16 }}>
      <Card
        hasRoundedCorners
        fullWidth
        thumbnailContent={
          <Skeleton
            height={SpacingBase80 + SpacingBase24}
            width={SpacingBase80}
            LinearGradientComponent={LinearGradientComponent}
          />
        }
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }} onLayout={onLayout}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={`skeleton-${index}`}
                height={SpacingBase12}
                width={size.width}
                style={{ marginBottom: SpacingBase8 }}
                LinearGradientComponent={LinearGradientComponent}
              />
            ))}
          </View>
          <View style={{ flexDirection: 'row' }}>
            {Array.from({ length: 2 }).map((_, index) => (
              <Skeleton
                key={`skeleton-${index}`}
                height={SpacingBase12}
                width={size.width / 3 - SpacingBase8}
                style={{ marginRight: SpacingBase8 }}
                LinearGradientComponent={LinearGradientComponent}
              />
            ))}
            <Skeleton
              height={SpacingBase12}
              width={size.width / 3}
              LinearGradientComponent={LinearGradientComponent}
            />
          </View>
        </View>
      </Card>
    </Container>
  );
};

const Template: Story<SkeletonProps> = (props) => (
  <Container>
    <Skeleton {...props} LinearGradientComponent={LinearGradientComponent} />
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  height: SpacingBase80,
  width: SpacingBase80 * 3,
};
