import { createRef } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  BottomSheet,
  BottomSheetProps,
  BottomSheetRefProps,
} from '@newcross-ui/react-native';
import { Calendar } from 'react-native-calendars';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { healthforce } from '@newcross-ui/design-tokens';
import Container from '../Container';
import { getParameters, isWebPlatform } from '../utils';
import ButtonGroup from './ButtonGroup';

const { SpacingBase0 } = healthforce;

export default {
  title: 'ReactNative/Components/BottomSheet',
  component: BottomSheet,
  parameters: { layout: 'fullscreen', ...getParameters(true, false) },
} as Meta;

export const VarientsWithCalendar = () => {
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
        <BottomSheet ref={ref} snapPoint={isWebPlatform ? '70%' : '60%'}>
          <Calendar current={new Date().toISOString()} />
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
