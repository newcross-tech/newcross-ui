import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { TestProp } from '../../types';
import * as Styled from './Avatar.style';
import AvatarContent from './AvatarContent';
import { SizeRange } from './Avatar.types';

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
   * Accepts a boolean to determine if the avatar is selected.
   */
  selected?: boolean;

  /**
   * Accepts a boolean to determine if the avatar is disabled or inactive.
   */
  inactive?: boolean;

  /**
   * Accepts a boolean to determine if the avatar is clickable.
   */
  clickable?: boolean;

  /**
   * Accepts a custom size in px to be used for the avatar (32min, 300max).
   */
  size?: SizeRange;
  /**
   * Accepts a icon to be used for the avatar.
   */
  icon?: IconDefinition;
  /**
   * Accepts a boolean to determine if hover effect s allowed for disabled state.
   */
  allowHoverOnDisabled?: boolean;
} & TestProp;

const Avatar = ({
  allowHoverOnDisabled = false,
  clickable = false,
  inactive = false,
  selected = false,
  size = 64,
  ...rest
}: AvatarProps) => {
  const sharedProps = {
    allowHoverOnDisabled,
    clickable,
    inactive,
    selected,
    size,
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
