import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { TestProp } from '../../types';
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
} & TestProp;

const Avatar = ({
  source,
  inactive = false,
  size = 'large',
  ...rest
}: AvatarProps) => {
  const sharedProps = {
    size,
    inactive,
    source,
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
