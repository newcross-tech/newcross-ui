import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { ContainerProps } from './Container';
import { ThemeSpacing } from './Container.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

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
        margin-left: ${theme[`SpacingBase${margin}`]};
        margin-right: ${theme[`SpacingBase${margin}`]};
        margin-top: ${theme[`SpacingBase${margin}`]};
        margin-bottom: ${theme[`SpacingBase${margin}`]};
    `}
    ${mx &&
    `
        margin-left: ${theme[`SpacingBase${mx}`]};
        margin-right: ${theme[`SpacingBase${mx}`]};
    `}
    ${my &&
    `
        margin-top: ${theme[`SpacingBase${my}`]};
        margin-bottom: ${theme[`SpacingBase${my}`]};
    `}
    ${ml && `margin-left: ${theme[`SpacingBase${ml}`]};`}
    ${mr && `margin-right: ${theme[`SpacingBase${mr}`]};`}
    ${mt && `margin-top: ${theme[`SpacingBase${mt}`]};`}
    ${mb && `margin-bottom: ${theme[`SpacingBase${mb}`]};`}
    
    ${padding &&
    `
        padding-left: ${theme[`SpacingBase${padding}`]};
        padding-right: ${theme[`SpacingBase${padding}`]};
        padding-top: ${theme[`SpacingBase${padding}`]};
        padding-bottom: ${theme[`SpacingBase${padding}`]};
    `}
    ${px &&
    `
        padding-left: ${theme[`SpacingBase${px}`]};
        padding-right: ${theme[`SpacingBase${px}`]};
    `}
    ${py &&
    `
        padding-top: ${theme[`SpacingBase${py}`]};
        padding-bottom: ${theme[`SpacingBase${py}`]};
    `}
    ${pl && `padding-left: ${theme[`SpacingBase${pl}`]};`}
    ${pr && `padding-right: ${theme[`SpacingBase${pr}`]};`}
    ${pt && `padding-top: ${theme[`SpacingBase${pt}`]};`}
    ${pb && `padding-bottom: ${theme[`SpacingBase${pb}`]};`}

    ${direction &&
    `
        display: flex;
        flex-direction: ${direction};
    `}
    ${direction &&
    gap &&
    `
        & > *:not(:first-child) {
            ${getMarginProperty[direction]}: ${theme[`SpacingBase${gap}`]};
        }
    `}

    ${fullWidth && `width: 100%;`}
  `}
`;
