import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../../types';
import { LegacyContainerProps } from './LegacyContainer';
import { breakpoint } from '../../../utils/css';
import { ThemeDesignTokens } from '../../../theme/ThemeProvider';
import { LegacyContainerGapSpacing, LegacyContainerSpacing } from './LegacyContainer.types';

const generateStyle = (
  property: string,
  propValue: LegacyContainerSpacing | LegacyContainerGapSpacing,
  theme: ThemeDesignTokens
) => {
  if (propValue === 'auto' || propValue === 'inherit') {
    return css`
      ${property}: ${propValue};
    `;
  }
  return css`
    ${property}: ${theme?.[propValue]};
  `;
};

export const LegacyContainer = styled.div<ExtendedTheme<LegacyContainerProps>>`
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
    ${display && `display: ${display};`}
    ${flexWrap && `flex-wrap: ${flexWrap};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${flexDirection && `flex-direction: ${flexDirection};`}
    ${fullWidth && `width: 100%;`}
    ${m && generateStyle('margin', m, theme)}
    ${mx && generateStyle('margin-left', mx, theme)}
    ${mx && generateStyle('margin-right', mx, theme)}
    ${my && generateStyle('margin-top', my, theme)}
    ${my && generateStyle('margin-bottom', my, theme)}
    ${ml && generateStyle('margin-left', ml, theme)}
    ${mr && generateStyle('margin-right', mr, theme)}
    ${mt && generateStyle('margin-top', mt, theme)}
    ${mb && generateStyle('margin-bottom', mb, theme)}
    ${p && generateStyle('padding', p, theme)}
    ${px && generateStyle('padding-left', px, theme)}
    ${px && generateStyle('padding-right', px, theme)}
    ${py && generateStyle('padding-top', py, theme)}
    ${py && generateStyle('padding-bottom', py, theme)}
    ${pl && generateStyle('padding-left', pl, theme)}
    ${pr && generateStyle('padding-right', pr, theme)}
    ${pt && generateStyle('padding-top', pt, theme)}
    ${pb && generateStyle('padding-bottom', pb, theme)}
    ${gap && generateStyle('gap', gap, theme)}

  ${breakpoint.md`
      ${mTablet && generateStyle('margin', mTablet, theme)}
      ${mxTablet && generateStyle('margin-left', mxTablet, theme)} 
      ${mxTablet && generateStyle('margin-right', mxTablet, theme)}
      ${myTablet && generateStyle('margin-top', myTablet, theme)}
      ${myTablet && generateStyle('margin-bottom', myTablet, theme)}
      ${mlTablet && generateStyle('margin-left', mlTablet, theme)}
      ${mrTablet && generateStyle('margin-right', mrTablet, theme)}
      ${mtTablet && generateStyle('margin-top', mtTablet, theme)}
      ${mbTablet && generateStyle('margin-bottom', mbTablet, theme)}
      ${pTablet && generateStyle('padding', pTablet, theme)}
      ${pxTablet && generateStyle('padding-left', pxTablet, theme)}
      ${pxTablet && generateStyle('padding-right', pxTablet, theme)}
      ${pyTablet && generateStyle('padding-top', pyTablet, theme)}
      ${pyTablet && generateStyle('padding-bottom', pyTablet, theme)}
      ${plTablet && generateStyle('padding-left', plTablet, theme)}
      ${prTablet && generateStyle('padding-right', prTablet, theme)}
      ${ptTablet && generateStyle('padding-top', ptTablet, theme)}
      ${pbTablet && generateStyle('padding-bottom', pbTablet, theme)}
      ${gapTablet && generateStyle('gap', gapTablet, theme)}
  `}

  ${breakpoint.sm`
      ${mMobile && generateStyle('margin', mMobile, theme)}
      ${mxMobile && generateStyle('margin-left', mxMobile, theme)} 
      ${mxMobile && generateStyle('margin-right', mxMobile, theme)}
      ${myMobile && generateStyle('margin-top', myMobile, theme)}
      ${myMobile && generateStyle('margin-bottom', myMobile, theme)}
      ${mlMobile && generateStyle('margin-left', mlMobile, theme)}
      ${mrMobile && generateStyle('margin-right', mrMobile, theme)}
      ${mtMobile && generateStyle('margin-top', mtMobile, theme)}
      ${mbMobile && generateStyle('margin-bottom', mbMobile, theme)}
      ${pMobile && generateStyle('padding', pMobile, theme)}
      ${pxMobile && generateStyle('padding-left', pxMobile, theme)}
      ${pxMobile && generateStyle('padding-right', pxMobile, theme)}
      ${pyMobile && generateStyle('padding-top', pyMobile, theme)}
      ${pyMobile && generateStyle('padding-bottom', pyMobile, theme)}
      ${plMobile && generateStyle('padding-left', plMobile, theme)}
      ${prMobile && generateStyle('padding-right', prMobile, theme)}
      ${ptMobile && generateStyle('padding-top', ptMobile, theme)}
      ${pbMobile && generateStyle('padding-bottom', pbMobile, theme)}
      ${gapMobile && generateStyle('gap', gapMobile, theme)}
    `}
  `}
`;
