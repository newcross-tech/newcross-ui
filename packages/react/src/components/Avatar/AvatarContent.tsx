import { nameToAbbreviation } from './utils';
import { faUser } from '@fortawesome/pro-regular-svg-icons/faUser';
import * as Styled from './Avatar.style';
import Typography, { TypographyVariant } from '../Typography';
import { Font } from './Avatar.style';
import { useState } from 'react';
import { AvatarContentProps } from './Avatar.types';

const AvatarContent = ({
  name,
  source,
  icon,
  inactive,
  size,
  testID = 'avatar',
}: AvatarContentProps) => {
  const abbreviation = name && nameToAbbreviation(name);
  const [imageError, setImageError] = useState(false);

  if (source && !imageError) {
    return (
      <Styled.AvatarImage
        inactive={inactive}
        src={source}
        onError={() => setImageError(true)}
        data-testid={`${testID}-with-image`}
        alt="Avatar Image"
      />
    );
  }

  if (abbreviation) {
    return (
      <Styled.Text inactive={inactive}>
        <Typography
          variant={TypographyVariant.heading3}
          data-testid={`${testID}-with-text`}
        >
          {abbreviation}
        </Typography>
      </Styled.Text>
    );
  }

  return (
    <>
      {icon || (
        <Styled.Icon inactive={inactive} data-testid={`${testID}-with-icon`}>
          <Font $size={size} icon={faUser} />
        </Styled.Icon>
      )}
    </>
  );
};

export default AvatarContent;
