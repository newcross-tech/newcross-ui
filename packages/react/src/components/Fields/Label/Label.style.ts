import styled from 'styled-components';
import { getTabbedStateStyles } from '../../../utils';
import { LabelPropsStrict } from './Label.types';

export const Label = styled.label<Pick<LabelPropsStrict, 'disabled'>>(({ disabled }) => [
  !disabled && getTabbedStateStyles(),
  {
    cursor: disabled ? 'not-allowed' : 'pointer',
  },
]);
