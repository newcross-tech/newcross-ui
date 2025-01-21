import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../Container';
import styled from 'styled-components';
import { BadgePropsStrict, badgeSize, favoriteIconSize } from './Badge.types';
import { Theme } from '../../types';

const getBackgroundColor = ({
  theme,
  type,
  scheme,
  disabled,
}: Theme & Pick<BadgePropsStrict, 'type' | 'scheme' | 'disabled'>): string => {
  if (type === 'notification' && !disabled) {
    return theme.ElementsSurfaceActionDanger;
  }

  if (scheme === 'dark') {
    return disabled ? theme.ElementsSurfaceDisabled : theme.ElementsSurfaceActionDefault;
  }

  return disabled ? theme.ElementsSurfaceDisabledHighlight : theme.ElementsSurfaceHighlightStrong;
};

export const getFillColor = ({
  theme,
  disabled,
  scheme,
  type,
}: Theme & Pick<BadgePropsStrict, 'type' | 'disabled' | 'scheme'>) => {
  if (disabled) return theme.ElementsTextDisabled;
  if (scheme === 'dark' && type !== 'notification') return theme.ElementsTextDefaultDark;
  return theme.ElementsTextDefaultLight;
};

export const Wrapper = styled(Container)<Pick<BadgePropsStrict, 'size' | 'type' | 'scheme' | 'disabled'>>(
  ({ theme, size, type, scheme, disabled }) => ({
    ...badgeSize[size],
    backgroundColor: getBackgroundColor({ theme, type, scheme, disabled }),
    borderRadius: theme.BorderBaseRadiusRounded,
  })
);

export const FavoriteIcon = styled(FontAwesomeIcon)<Pick<BadgePropsStrict, 'type' | 'disabled' | 'scheme' | 'size'>>(
  ({
    theme,
    disabled,
    scheme,
    type,
    size,
  }: Theme & Pick<BadgePropsStrict, 'type' | 'disabled' | 'scheme' | 'size'>) => {
    return {
      height: favoriteIconSize[size],
      width: favoriteIconSize[size],
      color: getFillColor({
        theme,
        disabled,
        scheme,
        type,
      }),
    };
  }
);
