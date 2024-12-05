import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { IconProps } from './Icon';
import { ExtendedTheme } from '../..';
import { getIconSize } from '../../utils/css';
import { getColorStyles } from '../Typography';

export const Icon = styled(FontAwesomeIcon)<IconProps>`
  ${({ theme, variant, color, scheme = 'light' }: ExtendedTheme<IconProps>) => css`
    ${getIconSize(theme, variant, 'heightWidth')};
    ${color ? { color: getColorStyles(theme)[scheme][color] } : { color: 'inherit' }};
  `};
`;
