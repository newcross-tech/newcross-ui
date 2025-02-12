import styled from 'styled-components';
import Container from '../Container';
import { breakpoint } from '../../utils/css';

export const ButtonsSection = styled(Container)(() => [
  breakpoint.sm({
    flexDirection: 'column-reverse',
  }),
]);
