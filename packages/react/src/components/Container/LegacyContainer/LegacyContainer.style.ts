import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../../types';
import { LegacyContainerProps } from './LegacyContainer';
import { breakpoint } from '../../../utils/css';
import { ThemeDesignTokens } from '../../../theme/ThemeProvider';
import { LegacyContainerGapSpacing, LegacyContainerSpacing } from './LegacyContainer.types';

const generateStyle = (
  theme: ThemeDesignTokens,
  property: string,
  propValue?: LegacyContainerSpacing | LegacyContainerGapSpacing
) => {
  if (!propValue) {
    return '';
  }
  if (propValue === 'auto' || propValue === 'inherit') {
    return css`
      ${`${property}: ${propValue}`};
    `;
  }
  return css`
    ${`${property}: ${theme?.[propValue]}`};
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
    semanticTag,
  }) => css`
    ${semanticTag === 'button' &&
    css`
      border: none;
      background: transparent;
      padding-block: 0;
      padding-inline: 0;
      cursor: pointer;
    `}
    ${display && `display: ${display};`}
    ${flexWrap && `flex-wrap: ${flexWrap};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${flexDirection && `flex-direction: ${flexDirection};`}
    ${fullWidth && `width: 100%;`}
    ${generateStyle(theme, 'margin', m)}
    ${generateStyle(theme, 'margin-left', mx)}
    ${generateStyle(theme, 'margin-right', mx)}
    ${generateStyle(theme, 'margin-top', my)}
    ${generateStyle(theme, 'margin-bottom', my)}
    ${generateStyle(theme, 'margin-left', ml)}
    ${generateStyle(theme, 'margin-right', mr)}
    ${generateStyle(theme, 'margin-top', mt)}
    ${generateStyle(theme, 'margin-bottom', mb)}
    ${generateStyle(theme, 'padding', p)}
    ${generateStyle(theme, 'padding-left', px)}
    ${generateStyle(theme, 'padding-right', px)}
    ${generateStyle(theme, 'padding-top', py)}
    ${generateStyle(theme, 'padding-bottom', py)}
    ${generateStyle(theme, 'padding-left', pl)}
    ${generateStyle(theme, 'padding-right', pr)}
    ${generateStyle(theme, 'padding-top', pt)}
    ${generateStyle(theme, 'padding-bottom', pb)}
    ${generateStyle(theme, 'gap', gap)}

  ${breakpoint.md`
      ${generateStyle(theme, 'margin', mTablet)}
      ${generateStyle(theme, 'margin-left', mxTablet)} 
      ${generateStyle(theme, 'margin-right', mxTablet)}
      ${generateStyle(theme, 'margin-top', myTablet)}
      ${generateStyle(theme, 'margin-bottom', myTablet)}
      ${generateStyle(theme, 'margin-left', mlTablet)}
      ${generateStyle(theme, 'margin-right', mrTablet)}
      ${generateStyle(theme, 'margin-top', mtTablet)}
      ${generateStyle(theme, 'margin-bottom', mbTablet)}
      ${generateStyle(theme, 'padding', pTablet)}
      ${generateStyle(theme, 'padding-left', pxTablet)}
      ${generateStyle(theme, 'padding-right', pxTablet)}
      ${generateStyle(theme, 'padding-top', pyTablet)}
      ${generateStyle(theme, 'padding-bottom', pyTablet)}
      ${generateStyle(theme, 'padding-left', plTablet)}
      ${generateStyle(theme, 'padding-right', prTablet)}
      ${generateStyle(theme, 'padding-top', ptTablet)}
      ${generateStyle(theme, 'padding-bottom', pbTablet)}
      ${generateStyle(theme, 'gap', gapTablet)}
  `}

  ${breakpoint.sm`
      ${generateStyle(theme, 'margin', mMobile)}
      ${generateStyle(theme, 'margin-left', mxMobile)} 
      ${generateStyle(theme, 'margin-right', mxMobile)}
      ${generateStyle(theme, 'margin-top', myMobile)}
      ${generateStyle(theme, 'margin-bottom', myMobile)}
      ${generateStyle(theme, 'margin-left', mlMobile)}
      ${generateStyle(theme, 'margin-right', mrMobile)}
      ${generateStyle(theme, 'margin-top', mtMobile)}
      ${generateStyle(theme, 'margin-bottom', mbMobile)}
      ${generateStyle(theme, 'padding', pMobile)}
      ${generateStyle(theme, 'padding-left', pxMobile)}
      ${generateStyle(theme, 'padding-right', pxMobile)}
      ${generateStyle(theme, 'padding-top', pyMobile)}
      ${generateStyle(theme, 'padding-bottom', pyMobile)}
      ${generateStyle(theme, 'padding-left', plMobile)}
      ${generateStyle(theme, 'padding-right', prMobile)}
      ${generateStyle(theme, 'padding-top', ptMobile)}
      ${generateStyle(theme, 'padding-bottom', pbMobile)}
      ${generateStyle(theme, 'gap', gapMobile)}
    `}
  `}
`;
