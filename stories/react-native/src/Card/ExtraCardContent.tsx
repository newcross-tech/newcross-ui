import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { native } from '@newcross-ui/design-tokens';
import { faAlarmClock } from '@fortawesome/pro-regular-svg-icons/faAlarmClock';
import { faCircleCheck } from '@fortawesome/pro-regular-svg-icons/faCircleCheck';
import { Typography, TypographyVariant } from '@newcross-ui/react-native';

const { ColorBaseOrange200 } = native.healthforce;
const { ColorBaseGreen100 } = native.homeclinic;

const {
  SpacingBase8,
  SpacingBase16,
  ColorBaseGrey100,
  ColorBaseGrey500,
  TypographyFontSize14,
  ColorBaseWhite100,
  CardBorderRadius,
} = native.healthforce;

const styles = StyleSheet.create({
  shiftInvitationCardContentStyle: {
    backgroundColor: ColorBaseWhite100,
    borderTopWidth: 1,
    borderColor: ColorBaseGrey500,
    flex: 1,
    padding: 0,
    borderBottomLeftRadius: CardBorderRadius,
    borderBottomRightRadius: CardBorderRadius,
  },
  shiftInvitationsCardContentContainer: {
    flex: 1,
  },
  shiftInvitationAvailabilityAndExpirationContainer: {
    flex: 1,
    paddingHorizontal: SpacingBase16,
    paddingTop: SpacingBase16,
  },
  shiftInvitationAvailabilityContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  shiftInvitationExpirationContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    marginTop: SpacingBase8,
  },
  shiftInvitationsIconSpacing: {
    marginRight: SpacingBase8,
    alignItems: 'flex-start',
    paddingBottom: 2,
  },
  shiftInvitationAvailability: {
    display: 'flex',
    alignItems: 'flex-end',
    fontSize: TypographyFontSize14,
  },
  shiftInvitationExpiration: {
    color: ColorBaseGrey100,
    display: 'flex',
    alignItems: 'baseline',
    fontSize: TypographyFontSize14,
  },
  callToAction: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
});
export const ExtraCardContent = (props: Record<string, object>) => {
  const { contentStyles } = props;
  return (
    <View
      style={{ ...styles.shiftInvitationCardContentStyle, ...contentStyles }}
    >
      <View style={styles.shiftInvitationsCardContentContainer}>
        <View style={styles.shiftInvitationAvailabilityAndExpirationContainer}>
          <View style={styles.shiftInvitationAvailabilityContainer}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              color={'green'}
              style={styles.shiftInvitationsIconSpacing}
            />
            <Typography
              variant={TypographyVariant.paragraph3}
              style={{
                ...styles.shiftInvitationAvailability,
                color: ColorBaseGreen100,
              }}
            >
              You are available
            </Typography>
          </View>
          <View style={styles.shiftInvitationExpirationContainer}>
            <FontAwesomeIcon
              icon={faAlarmClock}
              color={ColorBaseOrange200}
              style={styles.shiftInvitationsIconSpacing}
            />
            <Typography
              variant={TypographyVariant.paragraph3}
              style={styles.shiftInvitationExpiration}
            >
              Expires on date
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};
