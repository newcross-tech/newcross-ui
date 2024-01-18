import React from 'react';
import { View, StyleSheet } from 'react-native';
import { native } from '@newcross-ui/design-tokens';
import { Typography, TypographyVariant } from '@newcross-ui/react-native';

const { SpacingBase8, ColorBaseWhite100 } = native.healthforce;

const styles = StyleSheet.create({
  shiftInvitationCardContentStyle: {
    backgroundColor: ColorBaseWhite100,
    flex: 1,
  },
  shiftInvitationsCardContentContainer: {
    flex: 1,
  },
  shiftInvitationAvailabilityAndExpirationContainer: {
    flex: 1,
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
  },
});
export const ExtraCardContent = (props: Record<string, object>) => {
  const { contentStyles } = props;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onTouchEnd={(e) => {
        e.stopPropagation();
      }}
      style={{ ...styles.shiftInvitationCardContentStyle, ...contentStyles }}
    >
      <View style={styles.shiftInvitationsCardContentContainer}>
        <View style={styles.shiftInvitationAvailabilityAndExpirationContainer}>
          <View style={styles.shiftInvitationAvailabilityContainer}>
            <Typography
              variant={TypographyVariant.paragraph3}
              style={styles.shiftInvitationAvailability}
            >
              You are available
            </Typography>
          </View>
          <View style={styles.shiftInvitationExpirationContainer}>
            <Typography
              variant={TypographyVariant.paragraph3}
              style={styles.shiftInvitationAvailability}
            >
              Expires on date
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};
