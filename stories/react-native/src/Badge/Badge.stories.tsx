import { View } from 'react-native';
import { Meta, Story } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarsFilter } from '@fortawesome/pro-light-svg-icons/faBarsFilter';
import { faTrainSubway } from '@fortawesome/pro-light-svg-icons/faTrainSubway';
import { faKitMedical } from '@fortawesome/pro-light-svg-icons/faKitMedical';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import {
  Badge,
  BadgeProps,
  BadgeSizes,
  BadgePositions,
} from '@newcross-ui/react-native';
import { healthforce } from '@newcross-ui/design-tokens';
import Container from '../Container';
import Spacing from '../Spacing';
import { isWebPlatform } from '../utils';
import { getParameters } from '../utils';

const {
  ColorBaseWhite,
  SpacingBase32,
  SpacingBase24,
  SpacingBase48,
  BorderBaseRadiusRounded,
} = healthforce;

export default {
  title: 'ReactNative/Components/Badge',
  component: Badge,
  parameters: getParameters(),
} as Meta;

export const VariantsWithIcons = () => {
  return (
    <Container
      direction="row"
      containerStyle={{
        justifyContent: 'space-around',
        width: isWebPlatform ? '25%' : '50%',
        padding: isWebPlatform ? 0 : SpacingBase32,
      }}
    >
      <Badge size={BadgeSizes.small} position={BadgePositions.TopRight}>
        <View
          style={{
            backgroundColor: ColorBaseWhite,
            width: SpacingBase32,
            height: SpacingBase32,
            borderRadius: BorderBaseRadiusRounded,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon icon={faBarsFilter} size={SpacingBase24} />
        </View>
      </Badge>
      <Spacing />
      <Badge
        size={BadgeSizes.medium}
        badgeContent={9}
        position={BadgePositions.TopLeft}
      >
        <FontAwesomeIcon icon={faUser} size={SpacingBase24} />
      </Badge>
      <Spacing />
      <Badge
        size={BadgeSizes.large}
        badgeContent={'!'}
        position={BadgePositions.BottomRight}
      >
        <FontAwesomeIcon icon={faTrainSubway} size={SpacingBase48} />
      </Badge>
    </Container>
  );
};

export const Variants = () => {
  return (
    <Container
      direction="row"
      containerStyle={{
        justifyContent: 'space-around',
        width: isWebPlatform ? '25%' : '50%',
        padding: isWebPlatform ? 0 : SpacingBase32,
      }}
    >
      <Badge size={BadgeSizes.small} />
      <Spacing />
      <Badge size={BadgeSizes.medium} badgeContent={9} />
      <Spacing />
      <Badge size={BadgeSizes.medium} badgeContent={'?'} />
      <Spacing />
      <Badge size={BadgeSizes.large} badgeContent={1000} maxNumber={999} />
      <Spacing />
      <Badge size={BadgeSizes.large} badgeContent={'!'} />
    </Container>
  );
};

const Template: Story<BadgeProps> = ({ size, ...rest }) => (
  <Container>
    <Badge size={size as BadgeSizes} {...rest}>
      <FontAwesomeIcon icon={faKitMedical} size={SpacingBase48} />
    </Badge>
  </Container>
);

export const Interactive = Template.bind({});
Interactive.args = {
  badgeContent: 9,
  size: BadgeSizes.large,
  position: BadgePositions.TopRight,
};
