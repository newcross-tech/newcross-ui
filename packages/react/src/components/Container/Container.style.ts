import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { ContainerProps } from './Container';

const getMarginProperty = {
  row: 'margin-left',
  column: 'margin-top',
  'row-reverse': 'margin-right',
  'column-reverse': 'margin-bottom',
};

export const Container = styled.div<ExtendedTheme<ContainerProps>>`
  ${({ theme, margin, mx, my, ml, mr, mt, mb, padding, px, py, pl, pr, pt, pb, direction, gap, fullWidth }) => css`
    ${margin &&
    `
        margin: ${theme[margin]};
    `}
    ${mx &&
    `
        margin-left: ${theme[mx]};
        margin-right: ${theme[mx]};
    `}
    ${my &&
    `
        margin-top: ${theme[my]};
        margin-bottom: ${theme[my]};
    `}
    ${ml && `margin-left: ${theme[ml]};`}
    ${mr && `margin-right: ${theme[mr]};`}
    ${mt && `margin-top: ${theme[mt]};`}
    ${mb && `margin-bottom: ${theme[mb]};`}
    
    ${padding &&
    `
        padding-left: ${theme[padding]};
    `}
    ${px &&
    `
        padding-left: ${theme[px]};
        padding-right: ${theme[px]};
    `}
    ${py &&
    `
        padding-top: ${theme[py]};
        padding-bottom: ${theme[py]};
    `}
    ${pl && `padding-left: ${theme[pl]};`}
    ${pr && `padding-right: ${theme[pr]};`}
    ${pt && `padding-top: ${theme[pt]};`}
    ${pb && `padding-bottom: ${theme[pb]};`}

    ${direction &&
    `
        display: flex;
        flex-direction: ${direction};
    `}
    ${direction &&
    gap &&
    `
        & > *:not(:first-child) {
            ${getMarginProperty[direction]}: ${theme[gap]};
        }
    `}

    ${fullWidth && `width: 100%;`}
  `}
`;
