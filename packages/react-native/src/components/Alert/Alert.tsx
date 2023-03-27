import React, { ReactNode } from 'react';
import { View, TextStyle, ViewStyle, Pressable } from 'react-native';
import alertStyle from './Alert.style';
import { getTitle, getAccentColor, getIcon } from './Alert.types';
import Typography, { TypographyVariant } from '../Typography';
import useTheme from '../../hooks/useTheme';
import Card from '../Card';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { Variant } from '../../types';

export type AlertProps = {
  /**
   * Overwrites or extends the styles applied to the component's content.
   */
  containerStyle?: ViewStyle;
  /**
   * Overwrites or extends the styles applied to the component's header text.
   */
  headerStyle?: TextStyle;
  /**
   * Overwrites or extends the styles applied to the component's content text.
   */
  contentStyle?: TextStyle;
  /**
   * Whether the alert has a close button.
   */
  hasCloseButton?: boolean;
  /**
   * The action to trigger when the close button is pressed.
   */
  onCloseButtonPress?: VoidFunction;
  /**
   * Whether the alert has a border.
   */
  hasBorder?: boolean;
  /**
   * Accepts a variant of the Alert.
   */
  variant: Variant;
  /**
   * Overwrites a custom icon for the Alert.
   */
  icon?: ReactNode;
  /**
   * Whether the alert has a title.
   */
  hasTitle?: boolean;
  /**
   * Accepts a custom title.
   */
  title?: string;
  /**
   * Accepts children as the alert's message.
   */
  children?: ReactNode;
  /**
   * Whether the card is full width.
   */
  fullWidth?: boolean;
  /**
   * The action to be displayed in the alert.
   */
  action?: ReactNode;
  /**
   * A test identifier for the component.
   */
  testID?: string;
};

const Alert = ({
  variant,
  hasTitle = true,
  title,
  icon,
  children,
  fullWidth = true,
  containerStyle,
  headerStyle,
  hasCloseButton,
  onCloseButtonPress,
  hasBorder = true,
  contentStyle,
  action,
  testID = 'alert',
  ...rest
}: AlertProps) => {
  const theme = useTheme();
  const defaultTitle = getTitle();
  const accent = getAccentColor(theme);

  const defaultIcon = getIcon();
  const styles = alertStyle({ variant, hasBorder });

  return (
    <Card
      testID={testID}
      fullWidth={fullWidth}
      disabled
      contentStyle={styles.alertContainer}
      containerStyle={styles.cardContainer}
      hasShadow={false}
      {...rest}
    >
      {icon || (
        <FontAwesomeIcon
          style={[styles.iconStyle]}
          size={theme.AlertIconSizeLeft}
          color={accent[variant]}
          icon={defaultIcon[variant]}
        />
      )}
      <View style={[styles.textContainer, containerStyle]}>
        {hasTitle && (
          <Typography
            style={headerStyle || styles.text}
            variant={TypographyVariant.heading4}
          >
            {title || defaultTitle[variant]}
          </Typography>
        )}
        {children && (
          <Typography
            style={contentStyle || styles.text}
            variant={TypographyVariant.paragraph3}
          >
            {children}
          </Typography>
        )}
        {action}
      </View>
      {hasCloseButton && (
        <Pressable
          hitSlop={theme.SpacingBase12}
          onPress={onCloseButtonPress}
          style={[styles.iconStyle, styles.closeIconStyle]}
          testID="alert-close-icon"
        >
          <FontAwesomeIcon
            size={theme.AlertIconSizeRight}
            color={theme.BrandColorPrimary}
            icon={faXmark}
          />
        </Pressable>
      )}
    </Card>
  );
};

export default Alert;
