import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { IconProps } from './Icon';
import { Theme } from '../..';
import { getIconSize } from '../../utils/css';
import { getTypographyColorStyle } from '../Typography';

export const Icon = styled(FontAwesomeIcon)<IconProps>(
  ({ theme, variant, color, scheme = 'light' }: Theme & IconProps) => [
    getIconSize(theme, variant, 'heightWidth'),
    {
      color: getTypographyColorStyle({ mode: scheme, color, theme }),
    },
  ]
);
