import React, { ReactNode } from 'react';
import { View, TextStyle, ViewStyle } from 'react-native';
import alertStyle from './Alert.style';
import { AlertVariant, getTitle, getAccentColor, getIcon } from './Alert.types';
import Typography, { TypographyVariant } from '../Typography';
import useTheme from '../../hooks/useTheme';
import Card from '../Card';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

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
   * Accepts a variant of the Alert.
   */
  variant: AlertVariant;
  /**
   * Overwrites a custom icon for the Alert.
   */
  icon?: ReactNode;
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
  title,
  icon,
  children,
  fullWidth = true,
  containerStyle,
  headerStyle,
  contentStyle,
  action,
  testID = 'alert',
  ...rest
}: AlertProps) => {
  const theme = useTheme();
  const defaultTitle = getTitle();
  const accent = getAccentColor(theme);

  const defaultIcon = getIcon();
  const styles = alertStyle({ variant });

  return (
    <Card
      testID={testID}
      fullWidth={fullWidth}
      disabled
      contentStyle={styles.alertContainer}
      {...rest}
    >
      {icon || (
        <FontAwesomeIcon
          style={[styles.iconStyle]}
          size={theme.AlertIconSize}
          color={accent[variant]}
          icon={defaultIcon[variant]}
        />
      )}
      <View style={[styles.textContainer, containerStyle]}>
        <Typography
          style={headerStyle || styles.text}
          variant={TypographyVariant.heading4}
        >
          {title || defaultTitle[variant]}
        </Typography>
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
    </Card>
  );
};

export default Alert;
