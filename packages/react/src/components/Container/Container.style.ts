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
    mTablet,
    mxTablet,
    myTablet,
    mlTablet,
    mrTablet,
    mtTablet,
    mbTablet,
    pTablet,
    pxTablet,
    pyTablet,
    plTablet,
    prTablet,
    ptTablet,
    pbTablet,
    mMobile,
    mxMobile,
    myMobile,
    mlMobile,
    mrMobile,
    mtMobile,
    mbMobile,
    pMobile,
    pxMobile,
    pyMobile,
    plMobile,
    prMobile,
    ptMobile,
    pbMobile,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    gap,
    gapTablet,
    gapMobile,
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

    @media (max-width: ${theme.GridTabletBreakpoint}px) {
      ${mTablet &&
      `
          margin: ${theme?.[mTablet] ?? mTablet};
      `}
      ${mxTablet &&
      `
          margin-left: ${theme?.[mxTablet] ?? mxTablet};
          margin-right: ${theme?.[mxTablet] ?? mxTablet};
      `}
      ${myTablet &&
      `
          margin-top: ${theme?.[myTablet] ?? myTablet};
          margin-bottom: ${theme?.[myTablet] ?? myTablet};
      `}
      ${mlTablet && `margin-left: ${theme?.[mlTablet] ?? mlTablet};`}
      ${mrTablet && `margin-right: ${theme?.[mrTablet] ?? mrTablet};`}
      ${mtTablet && `margin-top: ${theme?.[mtTablet] ?? mtTablet};`}
      ${mbTablet && `margin-bottom: ${theme?.[mbTablet] ?? mbTablet};`}
      
      ${pTablet &&
      `
          padding: ${theme?.[pTablet] ?? pTablet};
      `}
      ${pxTablet &&
      `
          padding-left: ${theme?.[pxTablet] ?? pxTablet};
          padding-right: ${theme?.[pxTablet] ?? pxTablet};
      `}
      ${pyTablet &&
      `
          padding-top: ${theme?.[pyTablet] ?? pyTablet};
          padding-bottom: ${theme?.[pyTablet] ?? pyTablet};
      `}
      ${plTablet && `padding-left: ${theme?.[plTablet] ?? plTablet};`}
      ${prTablet && `padding-right: ${theme?.[prTablet] ?? prTablet};`}
      ${ptTablet && `padding-top: ${theme?.[ptTablet] ?? ptTablet};`}
      ${pbTablet && `padding-bottom: ${theme?.[pbTablet] ?? pbTablet};`}

      ${gapTablet && `gap: ${theme?.[gapTablet] ?? gapTablet};`}
    }

    @media (max-width: ${theme.GridMobileBreakpoint}px) {
      ${mMobile &&
      `
          margin: ${theme?.[mMobile] ?? mMobile};
      `}
      ${mxMobile &&
      `
          margin-left: ${theme?.[mxMobile] ?? mxMobile};
          margin-right: ${theme?.[mxMobile] ?? mxMobile};
      `}
      ${myMobile &&
      `
          margin-top: ${theme?.[myMobile] ?? myMobile};
          margin-bottom: ${theme?.[myMobile] ?? myMobile};
      `}
      ${mlMobile && `margin-left: ${theme?.[mlMobile] ?? mlMobile};`}
      ${mrMobile && `margin-right: ${theme?.[mrMobile] ?? mrMobile};`}
      ${mtMobile && `margin-top: ${theme?.[mtMobile] ?? mtMobile};`}
      ${mbMobile && `margin-bottom: ${theme?.[mbMobile] ?? mbMobile};`}
      
      ${pMobile &&
      `
          padding: ${theme?.[pMobile] ?? pMobile};
      `}
      ${pxMobile &&
      `
          padding-left: ${theme?.[pxMobile] ?? pxMobile};
          padding-right: ${theme?.[pxMobile] ?? pxMobile};
      `}
      ${pyMobile &&
      `
          padding-top: ${theme?.[pyMobile] ?? pyMobile};
          padding-bottom: ${theme?.[pyMobile] ?? pyMobile};
      `}
      ${plMobile && `padding-left: ${theme?.[plMobile] ?? plMobile};`}
      ${prMobile && `padding-right: ${theme?.[prMobile] ?? prMobile};`}
      ${ptMobile && `padding-top: ${theme?.[ptMobile] ?? ptMobile};`}
      ${pbMobile && `padding-bottom: ${theme?.[pbMobile] ?? pbMobile};`}
      ${gapMobile && `gap: ${theme?.[gapMobile] ?? gapMobile};`}
    }
  `}
`;
