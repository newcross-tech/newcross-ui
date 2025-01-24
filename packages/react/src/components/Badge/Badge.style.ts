import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../Container';
import styled from 'styled-components';
import { BadgePropsStrict, BadgeSizes, BadgeStyleProps } from './Badge.types';
import { Theme } from '../../types';

const getBackgroundColor = ({ theme, type, scheme, disabled }: Theme & BadgeStyleProps): string => {
  if (type === 'notification' && !disabled) {
    return theme.ElementsSurfaceActionDanger;
  }

  if (scheme === 'dark') {
    return disabled ? theme.ElementsSurfaceDisabled : theme.ElementsSurfaceActionDefault;
  }

  return disabled ? theme.ElementsSurfaceDisabledHighlight : theme.ElementsSurfaceHighlightStrong;
};

export const getFillColor = ({ theme, disabled, scheme, type }: Theme & BadgeStyleProps) => {
  if (disabled) return theme.ElementsTextDisabled;
  if (scheme === 'dark' && type !== 'notification') return theme.ElementsTextDefaultDark;
  return theme.ElementsTextDefaultLight;
};

const getBadgeSize = ({ size }: Pick<BadgePropsStrict, 'size'>) =>
  ({
    small: {
      height: '12px',
      width: '12px',
    },
    medium: {
      height: '20px',
      minWidth: '20px',
    },
    large: {
      height: '32px',
      minWidth: '32px',
    },
  }[size]);

const getContentPosition = ({ size }: Pick<BadgePropsStrict, 'size'>) =>
  ({
    small: '-2px',
    medium: '-7px',
    large: '-11px',
  }[size]);

export const Wrapper = styled(Container)<Pick<BadgePropsStrict, 'size'> & BadgeStyleProps & { hasCutout: boolean }>(
  (props) => ({
    ...getBadgeSize(props),
    backgroundColor: getBackgroundColor(props),
    borderRadius: props.theme.BorderBaseRadiusRounded,
    position: 'relative',
    ...(props.hasCutout && {
      position: 'absolute',
      top: getContentPosition(props),
      right: getContentPosition(props),
    }),
  })
);

export const BadgeWrapper = styled(Container)<Pick<BadgePropsStrict, 'onClick' | 'disabled'>>(
  ({ onClick, disabled }) => ({
    cursor: onClick && !disabled ? 'pointer' : 'default',
    position: 'relative',
    overflow: 'visible',
  })
);

const getBadgeIconSize = ({ size }: Pick<BadgePropsStrict, 'size'>): string => {
  return {
    small: '6px',
    medium: '8px',
    large: '16px',
  }[size];
};

export const BadgeIcon = styled(FontAwesomeIcon)<BadgeStyleProps & { customSize: BadgeSizes }>((props) => ({
  height: getBadgeIconSize({ size: props.customSize }),
  width: getBadgeIconSize({ size: props.customSize }),
  color: getFillColor(props),
  '& .fa-primary, .fa-secondary': {
    fill: getFillColor(props),
    opacity: 1,
  },
}));

const getCutoutStyles = (size: BadgeSizes) => {
  const cutoutPositionMap: Record<string, Record<BadgeSizes, string>> = {
    avatarHalo: {
      small: '11px',
      medium: '9.5px',
      large: '11.2px',
    },
    avatarContent: {
      small: '4px',
      medium: '3px',
      large: '5px',
    },
    iconContent: {
      small: '4px',
      medium: '3px',
      large: '5px',
    },
  };

  const cutoutSizeMap: Record<BadgeSizes, string> = {
    small: '8.5px',
    medium: '13px',
    large: '19px',
  };

  return {
    '> svg': {
      maskImage: `radial-gradient(circle at top ${cutoutPositionMap.iconContent[size]} right ${cutoutPositionMap.iconContent[size]}, transparent ${cutoutSizeMap[size]}, black 0)`,
    },
    '> div > div': {
      maskImage: `radial-gradient(circle at top ${cutoutPositionMap.avatarContent[size]} right ${cutoutPositionMap.avatarContent[size]}, transparent ${cutoutSizeMap[size]}, black 0)`,
    },
    '> div::before': {
      maskImage: `radial-gradient(circle at top ${cutoutPositionMap.avatarHalo[size]} right ${cutoutPositionMap.avatarHalo[size]}, transparent ${cutoutSizeMap[size]}, black 0)`,
    },
  };
};

export const Cutout = styled.div<Pick<BadgePropsStrict, 'size'>>(({ size }) => ({
  ...getCutoutStyles(size),
}));
