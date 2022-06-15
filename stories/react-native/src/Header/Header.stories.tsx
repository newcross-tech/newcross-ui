import { Meta, Story } from '@storybook/react';
import { View, Text } from 'react-native';
import {
  Header,
  HeaderProps,
  HeaderColors,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { healthforce } from '@newcross-ui/design-tokens';
import Container from '../Container';
import Spacing from '../Spacing';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSliders } from '@fortawesome/pro-light-svg-icons';
import { getParameters, isWebPlatform } from '../utils';

const {
  SpacingBase4,
  ColorBaseGreen100,
  ColorBaseWhite,
  SpacingBase24,
  SpacingBase32,
  BorderBaseRadiusRounded,
} = healthforce;

export default {
  title: 'ReactNative/Components/Header',
  component: Header,
  parameters: getParameters(),
} as Meta;

export const Variants = () => {
  return (
    <Container containerStyle={{ width: isWebPlatform ? '35%' : '100%' }}>
      <Header>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            style={{ color: ColorBaseWhite }}
            variant={TypographyVariant.heading7}
          >
            Welcome back&nbsp;
            <Typography
              style={{ color: ColorBaseGreen100 }}
              variant={TypographyVariant.heading7}
            >
              Holly
            </Typography>
            !
          </Typography>
          <Typography
            style={{ color: ColorBaseWhite }}
            variant={TypographyVariant.paragraph2}
          >
            83% of your reviews are great!
          </Typography>
        </View>
      </Header>
      <Spacing />
      <Spacing />
      <Spacing />
      <Header hasHeaderTail>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            style={{ color: ColorBaseWhite }}
            variant={TypographyVariant.heading7}
          >
            Welcome back&nbsp;
            <Typography
              style={{ color: ColorBaseGreen100 }}
              variant={TypographyVariant.heading7}
            >
              Holly
            </Typography>
            !
          </Typography>
          <Typography
            style={{ color: ColorBaseWhite }}
            variant={TypographyVariant.paragraph2}
          >
            83% of your reviews are great!
          </Typography>
        </View>
      </Header>
      <Spacing />
      <Spacing />
      <Spacing />
      <Header hasHeaderTail color={HeaderColors.secondary}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            style={{ color: ColorBaseWhite }}
            variant={TypographyVariant.heading3}
          >
            Find shifts
          </Typography>
          <View
            style={{
              marginTop: SpacingBase4,
              backgroundColor: ColorBaseWhite,
              width: SpacingBase32,
              height: SpacingBase32,
              borderRadius: BorderBaseRadiusRounded,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon icon={faSliders} size={SpacingBase24} />
          </View>
        </View>
      </Header>
    </Container>
  );
};

const Template: Story<HeaderProps> = ({ color, hasHeaderTail, children }) => (
  <Container containerStyle={{ width: isWebPlatform ? '35%' : '100%' }}>
    <Header color={color} hasHeaderTail={hasHeaderTail}>
      {children}
    </Header>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {};
