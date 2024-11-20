import styled, { css } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, responsiveSpacingMap, SemanticSpacing } from '../../types';
import { getSortedBreakpoints } from '../../utils';
import { breakpoint } from '../../utils/css';
import { ContainerProps } from './Container';

const applyResponsiveStyles = (
  theme: ThemeDesignTokens,
  property: string,
  propValue?: SemanticSpacing | 'auto' | 'inherit'
) => {
  if (!propValue) {
    return '';
  }
  // Special case handling for 'auto' and 'inherit'
  if (propValue === 'auto' || propValue === 'inherit') {
    return css`
      ${property}: ${propValue};
    `;
  }
  const sortedBreakpoints = getSortedBreakpoints(responsiveSpacingMap[propValue]);

  // Generate default CSS for the largest breakpoint
  const defaultCSS = css`
    ${property}: ${theme[sortedBreakpoints[0][1]]};
  `;
  // Generate media queries for smaller breakpoints
  const responsiveCSS = sortedBreakpoints.map(([key, value]) => {
    return breakpoint[key]`{
              ${property}: ${theme[value]};
            }
          `;
  });

  return css`
    ${defaultCSS}
    ${responsiveCSS}
  `;
};

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
    ${applyResponsiveStyles(theme, 'margin', m)}
    ${applyResponsiveStyles(theme, 'margin-left', mx)}
    ${applyResponsiveStyles(theme, 'margin-right', mx)}
    ${applyResponsiveStyles(theme, 'margin-top', my)}
    ${applyResponsiveStyles(theme, 'margin-bottom', my)}
    ${applyResponsiveStyles(theme, 'margin-left', ml)}
    ${applyResponsiveStyles(theme, 'margin-right', mr)}
    ${applyResponsiveStyles(theme, 'margin-top', mt)}
    ${applyResponsiveStyles(theme, 'margin-bottom', mb)}
    ${applyResponsiveStyles(theme, 'padding', p)}
    ${applyResponsiveStyles(theme, 'padding-left', px)}
    ${applyResponsiveStyles(theme, 'padding-right', px)}
    ${applyResponsiveStyles(theme, 'padding-top', py)}
    ${applyResponsiveStyles(theme, 'padding-bottom', py)}
    ${applyResponsiveStyles(theme, 'padding-left', pl)}
    ${applyResponsiveStyles(theme, 'padding-right', pr)}
    ${applyResponsiveStyles(theme, 'padding-top', pt)}
    ${applyResponsiveStyles(theme, 'padding-bottom', pb)}
    ${applyResponsiveStyles(theme, 'gap', gap)}
    ${display && `display: ${display};`}
    ${flexWrap && `flex-wrap: ${flexWrap};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${flexDirection && `flex-direction: ${flexDirection};`}
    ${fullWidth && `width: 100%;`}
  `}
`;
