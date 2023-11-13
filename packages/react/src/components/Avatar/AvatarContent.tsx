import { faUser } from '@fortawesome/pro-regular-svg-icons/faUser';
import { useState } from 'react';
import { AvatarProps } from './Avatar';
import * as Styled from './Avatar.style';
import { nameToAbbreviation } from './utils';

const baseTestId = 'avatar';

const AvatarContent = ({
  name,
  source,
  icon,
  inactive,
  size = 0,
  testID = '',
}: AvatarProps) => {
  const abbreviation = name && nameToAbbreviation(name);
  const [imageError, setImageError] = useState(false);

  const getTypographyVariant = (size: number) => {
    if (size <= 47) return 'heading6';
    if (size >= 48 && size <= 87) return 'heading5';
    return 'heading1';
  };

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
      <Styled.Text inactive={inactive} variant={getTypographyVariant(size)}>
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
