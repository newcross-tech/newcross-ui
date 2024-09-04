import React, { useState } from 'react';
import { View, ImageSourcePropType, ViewStyle, TextStyle } from 'react-native';
import avatarStyles from './Avatar.style';
import AvatarContent from './AvatarContent';
import { AvatarSizes } from './Avatar.types';

export type AvatarProps = {
  /**
   * Accepts either full name or an abbreviation to be used as the avatar's text.
   */
  name?: string;
  /**
   * Accepts an image source to be used as the avatar's image.
   */
  source?: ImageSourcePropType;
  /**
   * Accepts a test ID to be used for the avatar.
   */
  testId?: string;
  /**
   * Accepts a boolean to determine if the avatar is inactive or not.
   */
  inactive?: boolean;
  /**
   * Accepts a size to be used for the avatar.
   */
  size?: AvatarSizes;
  /**
   * Accepts a icon to be used for the avatar.
   */
  icon?: JSX.Element;
  /**
   * Accepts a style to be used for the avatar's content.
   */
  contentStyle?: ViewStyle | TextStyle;
};

const Avatar = ({
  source,
  inactive = false,
  size = AvatarSizes.large,
  ...rest
}: AvatarProps) => {
  const styles = avatarStyles({ inactive, source, size });
  const [imageError, setImageError] = useState(false);

  return (
    <View style={styles.avatarContainer}>
      <View style={styles.innerContainer}>
        <AvatarContent
          inactive={inactive}
          source={source}
          size={size}
          hasImageError={imageError}
          onError={() => setImageError(true)}
          {...rest}
        />
      </View>
    </View>
  );
};
export default Avatar;
