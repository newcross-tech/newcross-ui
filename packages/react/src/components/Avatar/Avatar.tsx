import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { TestProp } from '../../types';
import * as Styled from './Avatar.style';
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
   * Accepts a boolean to determine if the avatar is inactive or not.
   */
  inactive?: boolean;

  /**
   * Accepts a custom size in px to be used for the avatar (32min, 300max).
   */
  size?: number;
  /**
   * Accepts a icon to be used for the avatar.
   */
  icon?: IconDefinition;
} & TestProp;

const Avatar = ({
  source,
  inactive = false,
  size = 64,
  ...rest
}: AvatarProps) => {
  const sharedProps = {
    inactive,
    source,
    size: size,
  };

  return (
    <Styled.AvatarContainer {...sharedProps}>
      <Styled.InnerContainer>
        <AvatarContent {...sharedProps} {...rest} />
      </Styled.InnerContainer>
    </Styled.AvatarContainer>
  );
};
export default Avatar;
