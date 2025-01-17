import Container from '../Container';
import styled from 'styled-components';
import { BadgePropsStrict, badgeSize, BadgeSizes } from './Badge.types';

export const Wrapper = styled(Container)<Pick<BadgePropsStrict, 'size'>>(({ size }) => ({
  ...badgeSize[size],
}));
