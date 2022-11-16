import React from 'react';
import { ViewStyle } from 'react-native';
import { Meta, Story } from '@storybook/react';
import { Loader, LoaderProps } from '@newcross-ui/react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBird } from '@fortawesome/pro-solid-svg-icons/faBird';
import { native } from '@newcross-ui/design-tokens';
import { isWebPlatform } from '../utils';
import Container from '../Container';

const { SpacingBase32, ColorNeutralWhite } = native.healthforce;

export default {
  title: 'ReactNative/Components/Loader',
  component: Loader,
} as Meta;

const webStyles: ViewStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  height: '100vh',
};

export const VariantsWithIcon = () => {
  return (
    <Container containerStyle={isWebPlatform ? webStyles : undefined}>
      <Loader
        icon={
          <FontAwesomeIcon
            size={SpacingBase32}
            icon={faBird}
            color={ColorNeutralWhite}
          />
        }
      />
    </Container>
  );
};

const Template: Story<LoaderProps> = ({ text }) => {
  return (
    <Container containerStyle={isWebPlatform ? webStyles : undefined}>
      <Loader text={text} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  text: 'Hello, I am loader',
};
