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
        margin: ${theme?.[m] ?? m};
    `}
    ${mx &&
    `
        margin-left: ${theme?.[mx] ?? mx};
        margin-right: ${theme?.[mx] ?? mx};
    `}
    ${my &&
    `
        margin-top: ${theme?.[my] ?? my};
        margin-bottom: ${theme?.[my] ?? my};
    `}
    ${ml && `margin-left: ${theme?.[ml] ?? ml};`}
    ${mr && `margin-right: ${theme?.[mr] ?? mr};`}
    ${mt && `margin-top: ${theme?.[mt] ?? mt};`}
    ${mb && `margin-bottom: ${theme?.[mb] ?? mb};`}
    
    ${p &&
    `
        padding: ${theme?.[p] ?? p};
    `}
    ${px &&
    `
        padding-left: ${theme?.[px] ?? px};
        padding-right: ${theme?.[px] ?? px};
    `}
    ${py &&
    `
        padding-top: ${theme?.[py] ?? py};
        padding-bottom: ${theme?.[py] ?? py};
    `}
    ${pl && `padding-left: ${theme?.[pl] ?? pl};`}
    ${pr && `padding-right: ${theme?.[pr] ?? pr};`}
    ${pt && `padding-top: ${theme?.[pt] ?? pt};`}
    ${pb && `padding-bottom: ${theme?.[pb] ?? pb};`}

    ${display && `display: ${display};`}

    ${flexWrap && `flex-wrap: ${flexWrap};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${gap && `gap: ${theme?.[gap] ?? gap};`}
    ${flexDirection && `flex-direction: ${flexDirection};`}

    ${fullWidth && `width: 100%;`}
  `}
`;
