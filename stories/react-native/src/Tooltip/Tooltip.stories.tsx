import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import {
  PressableIconProps,
  BottomSheet,
  Button,
  PressableIcon,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import Container from '../Container';
import { getParameters } from '../utils';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './TooltipInfo';

const { BrandColorPrimary, SpacingBase24 } = native.healthforce;

export default {
  title: 'ReactNative/Components/Tooltip',
  component: PressableIcon,
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
        <PressableIcon onPress={() => console.log('pressed')}>
          <FontAwesomeIcon
            icon={faInfoCircle}
            size={SpacingBase24}
            color={BrandColorPrimary}
          />
        </PressableIcon>
      </Container>
    </InfoTemplate>
  );
};

const Template: Story<PressableIconProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <PressableIcon onPress={() => setIsOpen(true)}>
          <FontAwesomeIcon
            icon={faInfoCircle}
            size={SpacingBase24}
            color={BrandColorPrimary}
          />
        </PressableIcon>
      </Container>
      <BottomSheet
        isOpen={isOpen}
        snapPoint={'50%'}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button onPress={() => setIsOpen(false)}>Close</Button>
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
