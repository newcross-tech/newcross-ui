import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../Container';
import styled from 'styled-components';
import { BadgePropsStrict, BadgeSizes, BadgeStyleProps } from './Badge.types';
import { Theme } from '../../types';
import React, { ComponentProps } from 'react';

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

export const BadgeIcon = (() => {
  const FontAwesomeIconWithoutSize: React.FC<Omit<ComponentProps<typeof FontAwesomeIcon>, 'size'>> = ({
    size,
    ...props
  }: ComponentProps<typeof FontAwesomeIcon>) => React.createElement(FontAwesomeIcon, props);
  return styled(FontAwesomeIconWithoutSize)<Pick<BadgePropsStrict, 'size' | 'disabled' | 'scheme' | 'type'>>(
    (props) => ({
      height: getBadgeIconSize(props),
      width: getBadgeIconSize(props),
      color: getFillColor(props),
      '& .fa-primary, .fa-secondary': {
        fill: getFillColor(props),
        opacity: 1,
      },
    })
  );
})();

const getCutoutStyles = (size: BadgeSizes) => {
  const iconContentCutoutPosition = {
    small: '4px',
    medium: '3px',
    large: '5px',
  }[size];

  const avatarContentCutoutPosition = {
    small: '4px',
    medium: '3px',
    large: '5px',
  }[size];

  const avatarHaloCutoutPosition = {
    small: '11px',
    medium: '9.5px',
    large: '11.2px',
  }[size];

  const cutoutSize = {
    small: '8.5px',
    medium: '13px',
    large: '19px',
  }[size];

  return {
    '> svg': {
      maskImage: `radial-gradient(circle at top ${iconContentCutoutPosition} right ${iconContentCutoutPosition}, transparent ${cutoutSize}, black 0)`,
    },
    '> div > div': {
      maskImage: `radial-gradient(circle at top ${avatarContentCutoutPosition} right ${avatarContentCutoutPosition}, transparent ${cutoutSize}, black 0)`,
    },
    '> div::before': {
      maskImage: `radial-gradient(circle at top ${avatarHaloCutoutPosition} right ${avatarHaloCutoutPosition}, transparent ${cutoutSize}, black 0)`,
    },
  };
};

export const Cutout = styled.div<Pick<BadgePropsStrict, 'size'>>(({ size }) => ({
  ...getCutoutStyles(size),
}));
