import { faCalendarDays } from '@fortawesome/pro-light-svg-icons/faCalendarDays';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { native } from '@newcross-ui/design-tokens';
import {
  Badge,
  Card,
  FloatingActionButton,
  FloatingActionButtonGroup,
  FloatingActionButtonGroupProps,
  Typography,
  TypographyVariant,
} from '@newcross-ui/react-native';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Platform, ScrollView } from 'react-native';
import { getParameters } from '../utils';
import Container from '../Container';
import InfoTemplate from '../InfoTemplate/InfoTemplate';
import { DESCRIPTION, DO, DONT, TITLE } from './FloatingActionButtonGroupInfo';
import useState from 'storybook-addon-state';

const { SpacingBase0, SpacingBase24 } = native.healthforce;
const isWeb = Platform.OS === 'web';

export default {
  title: 'ReactNative/Components/FloatingActionButtonGroup',
  component: FloatingActionButtonGroup,
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
        <FloatingActionButtonGroup>
          <FloatingActionButton text={'Sort'} />
          <FloatingActionButton icon={faCalendarDays} />
          <FloatingActionButton text={'Filter'} />
        </FloatingActionButtonGroup>
      </Container>
    </InfoTemplate>
  );
};

export const Variants = () => {
  const [sort, setSort] = useState('sort', false);
  const [calendar, setCalendar] = useState('calendar', false);
  const [filter, setFilter] = useState('filter', false);
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <Container
      containerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: SpacingBase0,
        position: 'relative',
      }}
    >
      <FloatingActionButtonGroup
        style={{
          position: isWeb ? 'fixed' : 'absolute',
          bottom: 30,
        }}
      >
        <FloatingActionButton
          text={'Sort'}
          onPress={() => {
            setSort(!sort);
          }}
          isSelected={sort}
        />
        <FloatingActionButton
          icon={faCalendarDays}
          onPress={() => {
            setCalendar(!calendar);
          }}
          isSelected={calendar}
        />
        <FloatingActionButton
          text={'Filter'}
          onPress={() => {
            setFilter(!filter);
          }}
          isSelected={filter}
        />
      </FloatingActionButtonGroup>
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

Variants.parameters = {
  layout: 'fullscreen',
  ...getParameters(true, false),
};

const Template: Story<FloatingActionButtonGroupProps> = (props) => {
  const [sort, setSort] = useState('sort', false);
  const [calendar, setCalendar] = useState('calendar', false);
  const [filter, setFilter] = useState('filter', false);
  return (
    <Container>
      <FloatingActionButtonGroup {...props} style={{ alignSelf: 'center' }}>
        <FloatingActionButton
          text={'Sort'}
          onPress={() => {
            setSort(!sort);
          }}
          isSelected={sort}
        />
        <FloatingActionButton
          icon={faCalendarDays}
          onPress={() => {
            setCalendar(!calendar);
          }}
          isSelected={calendar}
        />
        <FloatingActionButton
          text={'Filter'}
          onPress={() => {
            setFilter(!filter);
          }}
          isSelected={filter}
        />
      </FloatingActionButtonGroup>
    </Container>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {};
