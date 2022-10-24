import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import * as Styled from './Avatar.style';
import { AvatarSizes } from './Avatar.types';
import AvatarContent from './AvatarContent';

export type AvatarProps = {
  /**
   * Accepts either full name or an abbreviation to be used as the avatar's text.
   */
  name?: string;
  /**
   * Accepts an image source to be used as the avatar's image.
   */
  source?: string;
  /**
   * Accepts a test ID to be used for the avatar.
   */
  testID?: string;
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
  icon?: IconDefinition;
};

const Avatar = ({
  source,
  inactive = false,
  size = AvatarSizes.large,
  ...rest
}: AvatarProps) => {
  const sharedProps = {
    size,
    inactive,
    source,
  };
  return (
    <Styled.AvatarContainer {...sharedProps}>
      <div className="innerContainer">
        <AvatarContent {...sharedProps} {...rest} />
      </div>
    </Styled.AvatarContainer>
  );
};
export default Avatar;
