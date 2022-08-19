import React from 'react';
import {
  View,
  Image,
  NativeSyntheticEvent,
  ImageErrorEventData,
} from 'react-native';
import { nameToAbbreviation } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/pro-regular-svg-icons/faUser';
import useTheme from '../../hooks/useTheme';
import { AvatarProps } from './Avatar';
import avatarStyles from './Avatar.style';
import Typography, { TypographyVariant } from '../Typography';
import { AvatarSizes, getIconSize } from './Avatar.types';

type AvatarContentProps = AvatarProps & {
  /**
   * Invoked on load error with {nativeEvent: {error}}
   */
  onError?: (error: NativeSyntheticEvent<ImageErrorEventData>) => void;
  /**
   * A boolean to determine if the avatar has an error.
   */
  hasImageError?: boolean;
};

const AvatarContent = ({
  name,
  source,
  icon,
  inactive,
  contentStyle,
  size,
  testId = 'avatar',
  onError,
  hasImageError,
}: AvatarContentProps) => {
  const theme = useTheme();

  const styles = avatarStyles({ inactive });
  const abbreviation = name && nameToAbbreviation(name);
  const iconSize = getIconSize(theme)[size as AvatarSizes];

  if (source && !hasImageError) {
    return (
      <Image
        testID={`${testId}-with-image`}
        source={source}
        style={styles.avatarImage}
        resizeMode={'cover'}
        onError={onError}
      />
    );
  }

  if (abbreviation) {
    return (
      <Typography
        variant={TypographyVariant.heading6}
        testID={`${testId}-with-text`}
        style={contentStyle || styles.text}
      >
        {abbreviation}
      </Typography>
    );
  }

  return (
    <View style={styles.iconContainer} testID={`${testId}-with-icon`}>
      {icon || (
        <FontAwesomeIcon
          icon={faUser}
          style={contentStyle || styles.icon}
          size={iconSize}
        />
      )}
    </View>
  );
};

export default AvatarContent;
