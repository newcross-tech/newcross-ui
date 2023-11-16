import { faUser } from '@fortawesome/pro-regular-svg-icons/faUser';
import { useState } from 'react';
import { AvatarProps } from './Avatar';
import * as Styled from './Avatar.style';
import { nameToAbbreviation } from './utils';
import { getPxFromRem } from '../../utils/getPxFromRem';
import useTheme from '../../hooks/useTheme';

const baseTestId = 'avatar';

const AvatarContent = ({
  name,
  source,
  icon,
  inactive,
  size = 32,
  testID = '',
}: AvatarProps) => {
  const abbreviation = name && nameToAbbreviation(name);
  const [imageError, setImageError] = useState(false);
  const theme = useTheme();

  const getTypographyVariant = (size: number) => {
    const mediumBreakpoint = getPxFromRem(theme.SpacingBase48);
    const largeBreakPoint = getPxFromRem(theme.SpacingBase80);

    if (size <= mediumBreakpoint) return 'heading6';
    if (size <= largeBreakPoint) return 'heading5';
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
      <Styled.Text
        inactive={inactive}
        variant={getTypographyVariant(size)}
        data-testid={`${baseTestId}-with-text${testID}`}
      >
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
