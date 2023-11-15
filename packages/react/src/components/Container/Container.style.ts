import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { ContainerProps } from './Container';

export const Container = styled.div<ExtendedTheme<ContainerProps>>`
  ${({
    theme,
    m,
    mx,
    my,
    ml,
    mr,
    mt,
    mb,
    p,
    px,
    py,
    pl,
    pr,
    pt,
    pb,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    gap,
    display,
    fullWidth,
  }) => css`
    ${m &&
    `
        margin: ${theme[m]};
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
    
    ${p &&
    `
        padding: ${theme[p]};
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

    ${display && `display: ${display};`}

    ${flexWrap && `flex-wrap: ${flexWrap};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${gap && `gap: ${theme[gap]};`}
    ${flexDirection && `flex-direction: ${flexDirection};`}

    ${fullWidth && `width: 100%;`}
  `}
`;
