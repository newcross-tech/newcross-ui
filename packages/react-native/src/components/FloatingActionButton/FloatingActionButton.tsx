import React from 'react';
import { View, ViewStyle } from 'react-native';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faCalendarDays } from '@fortawesome/pro-light-svg-icons/faCalendarDays';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FABVariant } from './FloatingActionButton.types';
import Typography, { TypographyVariant } from '../Typography';
import fabStyle from './FloatingActionButton.style';
import useTheme from '../../hooks/useTheme';

export type FloatingActionButtonProps = {
  icon?: IconDefinition;
  text?: string;
  variant?: FABVariant;
  selected?: boolean;
  customContainerStyle?: ViewStyle;
  customContentStyle?: ViewStyle;
  testID?: string;
};

const FloatingActionButton = ({
  icon = faCalendarDays,
  variant = FABVariant.icon,
  text,
  testID = 'floating-action-button',
  selected,
  customContainerStyle,
  customContentStyle,
}: FloatingActionButtonProps) => {
  const isIcon = variant === FABVariant.icon;
  const isText = variant === FABVariant.iconWithText;
  const styles = fabStyle(variant);
  const { FabContentSize, FabContentColor, FabContentSlectedColor } =
    useTheme();

  return (
    <View testID={testID} style={[styles.container, customContainerStyle]}>
      {isIcon && (
        <FontAwesomeIcon
          color={FabContentColor}
          style={[customContentStyle]}
          size={FabContentSize}
          icon={icon}
        />
      )}
      {isText && (
        <View testID="icon-with-text" style={styles.textContainer}>
          {
            <FontAwesomeIcon
              color={FabContentColor}
              style={[styles.iconWithText, customContentStyle]}
              icon={icon}
              size={FabContentSize}
            />
          }
          {text && (
            <Typography
              style={[
                styles.content,
                selected && styles.iconWithText,
                customContentStyle,
              ]}
              variant={TypographyVariant.paragraph1}
            >
              {text}
            </Typography>
          )}
          {selected && (
            <View testID="selected-icon">
              <FontAwesomeIcon
                color={FabContentSlectedColor}
                style={[customContentStyle]}
                icon={faCheck}
                size={FabContentSize}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default FloatingActionButton;
