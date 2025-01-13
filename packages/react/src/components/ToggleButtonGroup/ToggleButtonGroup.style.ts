import styled from 'styled-components';
import Container from '../Container';

export const GroupWrapper = styled(Container)(() => [
  {
    '> *': {
      flex: 1,
    },
  },
]);
