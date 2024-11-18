import styled, { css } from 'styled-components';
import { ExtendedTheme, responsiveSpacingMap } from '../../types';
import { NewContainerProps } from './NewContainer';
import { breakpoint } from '../../utils/css';
import { NewContainerGapSpacing, NewContainerSpacing } from './NewContainer.types';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { getSortedSpacingBreakpoints, SemanticBreakpoints } from '../../utils/getSortedSpacingBreakpoints';

const applyResponsiveStyles = (
  property: string,
  propValue: NewContainerSpacing | NewContainerGapSpacing,
  theme: ThemeDesignTokens
) => {
  // Special case handling for 'auto' and 'inherit'
  if (propValue === 'auto' || propValue === 'inherit') {
    return css`
      ${property}: ${propValue};
    `;
  }
  const sortedBreakpoints = getSortedSpacingBreakpoints(responsiveSpacingMap[propValue]);

  // Generate default CSS for the largest breakpoint
  const defaultCSS = css`
    ${property}: ${theme[Object.values(sortedBreakpoints)[0]]};
  `;

  // Generate media queries for smaller breakpoints
  const responsiveCSS = Object.entries(sortedBreakpoints)
    .slice(1) // Exclude the largest breakpoint
    .map(([key, value]) => {
      return breakpoint[key as SemanticBreakpoints]`{
          ${property}: ${theme[value]};
        }
      `;
    });

  return css`
    ${defaultCSS}
    ${responsiveCSS}
  `;
};

export const NewContainer = styled.div<ExtendedTheme<NewContainerProps>>`
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
    ${m && applyResponsiveStyles('margin', m, theme)}
    ${mx && applyResponsiveStyles('margin-left', mx, theme)}
    ${mx && applyResponsiveStyles('margin-right', mx, theme)}
    ${my && applyResponsiveStyles('margin-top', my, theme)}
    ${my && applyResponsiveStyles('margin-bottom', my, theme)}
    ${ml && applyResponsiveStyles('margin-left', ml, theme)}
    ${mr && applyResponsiveStyles('margin-right', mr, theme)}
    ${mt && applyResponsiveStyles('margin-top', mt, theme)}
    ${mb && applyResponsiveStyles('margin-bottom', mb, theme)}
    ${p && applyResponsiveStyles('padding', p, theme)}
    ${px && applyResponsiveStyles('padding-left', px, theme)}
    ${px && applyResponsiveStyles('padding-right', px, theme)}
    ${py && applyResponsiveStyles('padding-top', py, theme)}
    ${py && applyResponsiveStyles('padding-bottom', py, theme)}
    ${pl && applyResponsiveStyles('padding-left', pl, theme)}
    ${pr && applyResponsiveStyles('padding-right', pr, theme)}
    ${pt && applyResponsiveStyles('padding-top', pt, theme)}
    ${pb && applyResponsiveStyles('padding-bottom', pb, theme)}
    ${gap && applyResponsiveStyles('gap', gap, theme)}

    ${display && `display: ${display};`}
    ${flexWrap && `flex-wrap: ${flexWrap};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${flexDirection && `flex-direction: ${flexDirection};`}
    ${fullWidth && `width: 100%;`}
  `}
`;
