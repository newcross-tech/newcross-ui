import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { native } from '@newcross-ui/design-tokens';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Platform, ScrollView } from 'react-native';
import { getParameters } from '../utils';
import Container from '../Container';
import Spacing, { SpacingSizes, SpacingPositions } from '../Spacing';
import {
  FloatingActionButton,
  FloatingActionButtonProps,
  FABVariant,
  Typography,
  TypographyVariant,
  Card,
  Badge,
} from '@newcross-ui/react-native';
import { faCalendarDays } from '@fortawesome/pro-light-svg-icons/faCalendarDays';
import { faBarsFilter } from '@fortawesome/pro-regular-svg-icons/faBarsFilter';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { TITLE, DESCRIPTION, DO, DONT } from './FloatingActionButtonInfo';

const { SpacingBase24 } = native.healthforce;
const isWeb = Platform.OS === 'web';

export default {
  title: 'ReactNative/Components/FloatingActionButton',
  component: FloatingActionButton,
} as Meta;

export const Overview = () => {
  return (
    <InfoTemplate
      title={TITLE}
      description={DESCRIPTION}
      doInfo={DO}
      dontInfo={DONT}
    >
      <Container
        containerStyle={{
          flexDirection: 'row',
          alignSelf: 'flex-start',
        }}
      >
        <FloatingActionButton icon={faCalendarDays} variant={FABVariant.big} />
        <Spacing
          size={SpacingSizes.Medium}
          position={SpacingPositions.Horizontal}
        />
        <FloatingActionButton
          icon={faBarsFilter}
          onPress={() => console.log('pressed')}
          variant={FABVariant.small}
          text={'test'}
        />
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  return (
    <Container>
      <Typography variant={TypographyVariant.heading4}>
        Floating Action Button
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <FloatingActionButton icon={faCalendarDays} variant={FABVariant.big} />
      <Spacing size={SpacingSizes.Large} />
      <Typography variant={TypographyVariant.heading4}>
        Floating Action Button with text
      </Typography>
      <Spacing size={SpacingSizes.Large} />
      <FloatingActionButton
        icon={faBarsFilter}
        onPress={() => console.log('pressed')}
        variant={FABVariant.small}
        text={'test'}
      />
    </Container>
  );
};

export const VariantWithScroll = () => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const Wrapper = isWeb ? 'div' : React.Fragment;

  return (
    <Container>
      <Wrapper
        style={
          isWeb
            ? {
                position: 'fixed',
                bottom: 10,
                right: 10,
                zIndex: 100,
              }
            : {}
        }
      >
        <FloatingActionButton
          icon={faCalendarDays}
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
          }}
        />
      </Wrapper>

      <ScrollView style={{ width: '100%' }}>
        {ids.map((id) => (
          <Card
            hasRoundedCorners
            key={id}
            fullWidth
            containerStyle={{ marginBottom: SpacingBase24 }}
          >
            <FontAwesomeIcon icon={faUser} size={SpacingBase24} />
            <Typography
              variant={TypographyVariant.heading3}
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
              My Profile
            </Typography>
            <Badge badgeContent={7} />
          </Card>
        ))}
      </ScrollView>
    </Container>
  );
};
VariantWithScroll.parameters = {
  layout: 'fullscreen',
  ...getParameters(true, false),
};

const Template: Story<FloatingActionButtonProps> = (props) => {
  return (
    <Container>
      <FloatingActionButton {...props} />
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  icon: faCalendarDays,
  variant: FABVariant.big,
};
