import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { ToggleButtonGroupExtended } from './ToggleButtonGroup.types';
import * as ToggleButtonStyled from '../ToggleButton/ToggleButton.style';

export const Container = styled.div<ToggleButtonGroupExtended>`
  ${({ theme, direction, isMulti }: ExtendedTheme<ToggleButtonGroupExtended>) => css`
    display: flex;
    flex-direction: ${direction === 'column' && 'column'};

    > ${ToggleButtonStyled.Container} {
      flex: 1;
      margin-bottom: ${(direction === 'column' || isMulti) && theme.ToggleButtonItemsGap};
      margin-right: ${direction !== 'column' && theme.ToggleButtonItemsGap};
    }
  `};
`;
