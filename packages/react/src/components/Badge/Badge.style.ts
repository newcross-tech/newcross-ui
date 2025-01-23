import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../Container';
import styled from 'styled-components';
import {
  BadgePropsStrict,
  badgeSize,
  BadgeSizes,
  contentPositionMap,
  cutoutPositionMap,
  favoriteIconSize,
  maskSizeMap,
} from './Badge.types';
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

export const Wrapper = styled(Container)<
  Pick<BadgePropsStrict, 'size' | 'type' | 'scheme' | 'disabled'> & { hasCutout: boolean }
>(({ theme, size, type, scheme, disabled, hasCutout }) => ({
  ...badgeSize[size],
  backgroundColor: getBackgroundColor({ theme, type, scheme, disabled }),
  borderRadius: theme.BorderBaseRadiusRounded,
  position: 'relative',
  ...(hasCutout && {
    position: 'absolute',
    top: contentPositionMap[size],
    right: contentPositionMap[size],
  }),
}));

export const BadgeWrapper = styled(Container)<Pick<BadgePropsStrict, 'onClick' | 'disabled'>>(
  ({ onClick, disabled }) => ({
    cursor: onClick && !disabled ? 'pointer' : 'default',
    position: 'relative',
    overflow: 'visible',
  })
);

export const FavoriteIcon = styled(FontAwesomeIcon)<
  Pick<BadgePropsStrict, 'type' | 'disabled' | 'scheme'> & { customSize: BadgeSizes }
>(({ theme, disabled, scheme, type, customSize }) => {
  return {
    height: favoriteIconSize[customSize],
    width: favoriteIconSize[customSize],
    color: getFillColor({ theme, disabled, scheme, type }),
    '& .fa-primary , .fa-secondary': {
      fill: getFillColor({ theme, disabled, scheme, type }),
      opacity: 1,
    },
  };
});

export const Cutout = styled.div<Pick<BadgePropsStrict, 'size'>>(({ size }) => ({
  '> svg': {
    maskImage: `radial-gradient(circle at top ${cutoutPositionMap.iconContent[size]} right ${cutoutPositionMap.iconContent[size]}, transparent ${maskSizeMap[size]}, black 0)`,
  },
  '> div > div': {
    maskImage: `radial-gradient(circle at top ${cutoutPositionMap.avatarContent[size]} right ${cutoutPositionMap.avatarContent[size]}, transparent ${maskSizeMap[size]}, black 0)`,
  },
  '> div::before': {
    maskImage: `radial-gradient(circle at top ${cutoutPositionMap.avatarHalo[size]} right ${cutoutPositionMap.avatarHalo[size]}, transparent ${maskSizeMap[size]}, black 0)`,
  },
}));
