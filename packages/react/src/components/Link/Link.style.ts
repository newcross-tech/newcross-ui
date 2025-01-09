import styled from 'styled-components';
import { type LinkPropsStrict } from './Link.types';

export const Link = styled.a<Pick<LinkPropsStrict, 'disabled'>>(({ theme, disabled }) => [
  {
    cursor: disabled ? 'not-allowed' : 'pointer',
    pointerEvents: disabled ? 'none' : 'auto',
    ':active': {
      opacity: theme.OpacityBaseMd,
    },
  },
]);
