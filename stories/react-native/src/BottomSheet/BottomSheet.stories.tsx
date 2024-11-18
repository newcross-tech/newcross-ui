import { Meta, Story } from '@storybook/react';
import {
  BottomSheet,
  BottomSheetProps,
  Button,
  ButtonSizes,
} from '@newcross-ui/react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { native } from '@newcross-ui/design-tokens';
import Container from '../Container';
import { getParameters, isWebPlatform } from '../utils';
import ButtonGroup from './ButtonGroup';
import { BottomSheetActionType } from './reducer';
import { BottomSheetContentType, demoData } from './bottomSheetContent';
import { useBottomSheetContext } from './bottomSheetContext';

const { SpacingBase0 } = native.healthforce;

export default {
  title: 'ReactNative/Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
    ...getParameters(true, false),
  },
} as Meta;

export const VariantWithContent = () => {
  const { dispatch } = useBottomSheetContext();

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
        <ButtonGroup
          expand={() => {
            dispatch &&
              dispatch({
                type: BottomSheetActionType.openBottomSheet,
                payload: {
                  contentType: BottomSheetContentType.demoContentCalendar,
                  contentData: demoData,
                },
              });
          }}
          collapse={() => {
            dispatch &&
              dispatch({
                type: BottomSheetActionType.closeBottomSheet,
              });
          }}
        />
      </Container>
    </GestureHandlerRootView>
  );
};

export const VariantWithFullHeightAndScroll = () => {
  const { dispatch } = useBottomSheetContext();

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
          onPress={() => {
            dispatch &&
              dispatch({
                type: BottomSheetActionType.openBottomSheet,
                payload: {
                  contentType: BottomSheetContentType.demoContentLongText,
                  contentData: demoData,
                },
              });
          }}
          fullWidth
          size={ButtonSizes.large}
        >
          Show full screen bottom sheet
        </Button>
      </Container>
    </GestureHandlerRootView>
  );
};

const Template: Story<BottomSheetProps> = () => {
  const { dispatch } = useBottomSheetContext();

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
        <ButtonGroup
          expand={() => {
            dispatch &&
              dispatch({
                type: BottomSheetActionType.openBottomSheet,
                payload: {
                  contentType: BottomSheetContentType.demoContentLongText,
                  contentData: demoData,
                },
              });
          }}
          collapse={() => {
            dispatch &&
              dispatch({
                type: BottomSheetActionType.closeBottomSheet,
              });
          }}
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
