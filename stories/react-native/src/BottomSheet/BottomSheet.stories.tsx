import { createRef } from 'react';
import { View } from 'react-native';
import { Meta, Story } from '@storybook/react';
import {
  BottomSheet,
  BottomSheetProps,
  BottomSheetRefProps,
  Button,
  ButtonSizes,
  ButtonCorners,
  Calendar,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { native } from '@newcross-ui/design-tokens';
import Container from '../Container';
import { getParameters, isWebPlatform } from '../utils';
import ButtonGroup from './ButtonGroup';
import Spacing, { SpacingPositions } from '../Spacing';

const { SpacingBase0, SpacingBase24 } = native.healthforce;

export default {
  title: 'ReactNative/Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
    ...getParameters(true, false),
  },
} as Meta;

export const VariantWithContent = () => {
  const ref = createRef<BottomSheetRefProps>();

  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container
        containerStyle={{
          justifyContent: 'flex-end',
          padding: SpacingBase0,
        }}
      >
        <BottomSheet ref={ref}>
          <Calendar />
          <Spacing />
          <Spacing />
          <Spacing />
        </BottomSheet>
        <ButtonGroup
          expand={() => ref.current?.expand()}
          collapse={() => ref.current?.collapse()}
        />
      </Container>
    </GestureHandlerRootView>
  );
};

export const VariantWithNoIndicator = () => {
  const ref = createRef<BottomSheetRefProps>();

  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container
        containerStyle={{
          justifyContent: 'flex-end',
          padding: SpacingBase0,
        }}
      >
        <Button
          onPress={() => ref.current?.expand()}
          fullWidth
          size={ButtonSizes.medium}
        >
          Open
        </Button>
        <BottomSheet ref={ref} hasGestureIndicator={false}>
          <Calendar />
          <Button
            corners={ButtonCorners.pill}
            onPress={() => ref.current?.collapse()}
            style={{ alignSelf: 'center' }}
            size={ButtonSizes.medium}
          >
            Got it
          </Button>
        </BottomSheet>
      </Container>
    </GestureHandlerRootView>
  );
};

export const VariantWithFullHeightNoScroll = () => {
  const ref = createRef<BottomSheetRefProps>();

  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container
        containerStyle={{
          justifyContent: 'flex-end',
          padding: SpacingBase0,
        }}
      >
        <Button
          onPress={() => ref.current?.expand()}
          fullWidth
          size={ButtonSizes.medium}
        >
          Show full screen bottom sheet
        </Button>
        <BottomSheet
          ref={ref}
          snapPoint={'95%'}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            corners={ButtonCorners.pill}
            onPress={() => ref.current?.collapse()}
            size={ButtonSizes.medium}
          >
            Close
          </Button>
        </BottomSheet>
      </Container>
    </GestureHandlerRootView>
  );
};

export const VariantWithFullHeightAndScroll = () => {
  const ref = createRef<BottomSheetRefProps>();

  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container
        containerStyle={{
          justifyContent: 'flex-end',
          padding: SpacingBase0,
        }}
      >
        <Button
          onPress={() => ref.current?.expand()}
          fullWidth
          size={ButtonSizes.medium}
        >
          Show full screen bottom sheet
        </Button>
        <BottomSheet ref={ref}>
          <View>
            <Container
              containerStyle={{
                padding: SpacingBase24,
              }}
            >
              <Typography variant={TypographyVariant.paragraph1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Spacing position={SpacingPositions.Bottom} />
              <Typography variant={TypographyVariant.paragraph1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Spacing position={SpacingPositions.Bottom} />
              <Typography variant={TypographyVariant.paragraph1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Spacing position={SpacingPositions.Bottom} />
            </Container>
            <Button
              style={{ alignSelf: 'center' }}
              corners={ButtonCorners.pill}
              onPress={() => ref.current?.collapse()}
              size={ButtonSizes.medium}
            >
              Close
            </Button>
            <Spacing position={SpacingPositions.Bottom} />
          </View>
        </BottomSheet>
      </Container>
    </GestureHandlerRootView>
  );
};

export const VariantWithScrollableView = () => {
  const ref = createRef<BottomSheetRefProps>();

  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container
        containerStyle={{
          justifyContent: 'flex-end',
          padding: SpacingBase0,
        }}
      >
        <BottomSheet ref={ref}>
          <Container
            containerStyle={{
              padding: SpacingBase24,
            }}
          >
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Spacing position={SpacingPositions.Bottom} />
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Spacing position={SpacingPositions.Bottom} />
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Spacing position={SpacingPositions.Bottom} />
          </Container>
        </BottomSheet>
        <ButtonGroup
          expand={() => ref.current?.expand()}
          collapse={() => ref.current?.collapse()}
        />
      </Container>
    </GestureHandlerRootView>
  );
};

export const VariantWithScrollableViewNoIndicator = () => {
  const ref = createRef<BottomSheetRefProps>();

  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container
        containerStyle={{
          justifyContent: 'flex-end',
          padding: SpacingBase0,
        }}
      >
        <BottomSheet ref={ref} hasGestureIndicator={false}>
          <Container
            containerStyle={{
              padding: SpacingBase24,
            }}
          >
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Spacing position={SpacingPositions.Bottom} />
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Spacing position={SpacingPositions.Bottom} />
            <Typography variant={TypographyVariant.paragraph1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Spacing position={SpacingPositions.Bottom} />
          </Container>
        </BottomSheet>
        <ButtonGroup
          expand={() => ref.current?.expand()}
          collapse={() => ref.current?.collapse()}
        />
      </Container>
    </GestureHandlerRootView>
  );
};

const Template: Story<BottomSheetProps> = ({ ...rest }) => {
  const ref = createRef<BottomSheetRefProps>();

  return (
    <GestureHandlerRootView
      style={{ flex: 1, height: isWebPlatform ? '100vh' : undefined }}
    >
      <Container
        containerStyle={{
          justifyContent: 'flex-end',
          padding: SpacingBase0,
        }}
      >
        <BottomSheet ref={ref} {...rest} />

        <ButtonGroup
          expand={() => ref.current?.expand()}
          collapse={() => ref.current?.collapse()}
        />
      </Container>
    </GestureHandlerRootView>
  );
};

export const Interactive = Template.bind({});
Interactive.parameters = {
  options: { showPanel: true, panelPosition: 'right' },
};
Interactive.args = {
  snapPoint: '60%',
  collapseThreshold: 100,
  hasBackdrop: true,
};
