import { createRef } from 'react';
import { Meta, Story } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import {
  Badge,
  BadgeProps,
  BadgeSizes,
  BottomSheet,
  BottomSheetRefProps,
  Button,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import Container from '../Container';
import { getParameters } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './TooltipInfo';

const { ColorBaseGravitas, SpacingBase24 } = native.healthforce;

export default {
  title: 'ReactNative/Components/Tooltip',
  component: Badge,
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
        <Badge
          onPress={() => console.log('pressed')}
          size={BadgeSizes.large}
          badgeContent={
            <FontAwesomeIcon
              icon={faInfoCircle}
              size={SpacingBase24}
              color={ColorBaseGravitas}
            />
          }
          style={{
            backgroundColor: 'transparent',
            paddingTop: 5,
          }}
        />
      </Container>
    </InfoTemplate>
  );
};

const Template: Story<BadgeProps> = () => {
  const refTemplate = createRef<BottomSheetRefProps>();
  return (
    <>
      <Container>
        <Badge
          onPress={() => refTemplate.current?.expand()}
          size={BadgeSizes.large}
          badgeContent={
            <FontAwesomeIcon
              icon={faInfoCircle}
              size={SpacingBase24}
              color={ColorBaseGravitas}
            />
          }
          style={{
            backgroundColor: 'transparent',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        />
      </Container>
      <BottomSheet
        ref={refTemplate}
        snapPoint={'50%'}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button onPress={() => refTemplate.current?.collapse()}>Close</Button>
      </BottomSheet>
    </>
  );
};

export const Interactive = Template.bind({});
Interactive.parameters = {
  ...getParameters(true, true),
  ...{ options: { panelPosition: 'right' } },
};
Interactive.args = {};

export const Variants = Template.bind({});
Variants.parameters = {
  ...getParameters(true, false),
};
