import { useState } from 'react';
import { AvatarProps } from './Avatar';
import * as Styled from './Avatar.style';
import { nameToAbbreviation } from './utils';
import { TypographyVariant } from '../Typography';
import { faUser } from '@fortawesome/pro-regular-svg-icons/faUser';

const baseTestId = 'avatar';

const AvatarContent = ({
  name,
  source,
  icon,
  inactive,
  size,
  testID = '',
}: AvatarProps) => {
  const abbreviation = name && nameToAbbreviation(name);
  const [imageError, setImageError] = useState(false);

  if (source && !imageError) {
    return (
      <Styled.AvatarImage
        inactive={inactive}
        src={source}
        onError={() => setImageError(true)}
        data-testid={`${baseTestId}-with-image${testID}`}
        alt="Avatar Image"
      />
    );
  }

  if (abbreviation) {
    return (
      <Styled.Text inactive={inactive} variant={TypographyVariant.heading3}>
        {abbreviation}
      </Styled.Text>
    );
  }

  return (
    <>
      {icon || (
        <Styled.Icon
          inactive={inactive}
          data-testid={`${baseTestId}-with-icon${testID}`}
        >
          <Styled.AvatarIcon $size={size} icon={faUser} />
        </Styled.Icon>
      )}
    </>
  );
};

export default AvatarContent;
