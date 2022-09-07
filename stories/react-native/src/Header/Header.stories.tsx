import { Meta, Story } from '@storybook/react';
import { View } from 'react-native';
import {
  Header,
  HeaderProps,
  HeaderColors,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { native } from '@newcross-ui/design-tokens';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSliders } from '@fortawesome/pro-light-svg-icons/faSliders';
import Container from '../Container';
import Spacing from '../Spacing';
import { getParameters, isWebPlatform } from '../utils';

const {
  SpacingBase4,
  ColorBaseMint100,
  ColorBaseWhite100,
  SpacingBase24,
  SpacingBase32,
  BorderBaseRadiusRounded,
} = native.healthforce;

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
            style={{ color: ColorBaseWhite100 }}
            variant={TypographyVariant.heading2}
          >
            Welcome back&nbsp;
            <Typography
              style={{ color: ColorBaseMint100 }}
              variant={TypographyVariant.heading2}
            >
              Holly
            </Typography>
            !
          </Typography>
          <Typography
            style={{ color: ColorBaseWhite100 }}
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
            style={{ color: ColorBaseWhite100 }}
            variant={TypographyVariant.heading2}
          >
            Welcome back&nbsp;
            <Typography
              style={{ color: ColorBaseMint100 }}
              variant={TypographyVariant.heading2}
            >
              Holly
            </Typography>
            !
          </Typography>
          <Typography
            style={{ color: ColorBaseWhite100 }}
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
            style={{ color: ColorBaseWhite100 }}
            variant={TypographyVariant.heading1}
          >
            Find shifts
          </Typography>
          <View
            style={{
              marginTop: SpacingBase4,
              backgroundColor: ColorBaseWhite100,
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
