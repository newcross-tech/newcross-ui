import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FABVariant } from './FloatingActionButton.types';
import Typography, { TypographyVariant } from '../Typography';
import fabStyle from './FloatingActionButton.style';
import useTheme from '../../hooks/useTheme';

export type FloatingActionButtonProps = {
  icon: IconDefinition;
  text?: string;
  variant: FABVariant;
  customContainerStyle?: ViewStyle;
  customContentStyle?: ViewStyle;
};

const FloatingActionButton = ({
  icon,
  variant = FABVariant.icon,
  text,
  customContainerStyle,
  customContentStyle,
}: FloatingActionButtonProps) => {
  const isIcon = variant === FABVariant.icon;
  const isText = variant === FABVariant.iconWithText;
  const styles = fabStyle(variant);
  const { FabContentSize, FabContentColor } = useTheme();

  return (
    <View style={[styles.container, customContainerStyle]}>
      {isIcon && (
        <FontAwesomeIcon
          color={FabContentColor}
          style={[customContentStyle]}
          size={FabContentSize}
          icon={icon}
        />
      )}
      {isText && (
        <View style={styles.textContainer}>
          {
            <FontAwesomeIcon
              color={FabContentColor}
              style={[styles.iconWithText, customContentStyle]}
              icon={icon}
              size={FabContentSize}
            />
          }
          <Typography
            style={[styles.content, customContentStyle]}
            variant={TypographyVariant.paragraph1}
          >
            {text}
          </Typography>
        </View>
      )}
    </View>
  );
};

export default FloatingActionButton;
