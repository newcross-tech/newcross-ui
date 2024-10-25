import styled, { css } from 'styled-components';
import { ExtendedTheme, NewThemeSpacing, responsiveSpacingMap } from '../../types';
import { NewContainerProps } from './NewContainer';
import { breakpoint } from '../../utils/css';
import { NewContainerGapSpacing, NewContainerSpacing } from './NewContainer.types';

const applyResponsiveStyles = (
  property: string,
  propValue: NewContainerSpacing | NewContainerGapSpacing | undefined,
  theme: any
) => {
  if (!propValue) return '';

  // Special case handling for 'auto' and 'inherit'
  if (propValue === 'auto' || propValue === 'inherit') {
    return css`
      ${property}: ${propValue};
    `;
  }

  // Get the keys of the responsiveSpacingMap for this spacing value
  const breakpointsKeys = Object.keys(responsiveSpacingMap[propValue as NewThemeSpacing]);

  // Set the largest breakpoint as the default CSS without a media query
  const largestBreakpointKey = breakpointsKeys[breakpointsKeys.length - 1] as keyof typeof breakpoint;

  // Create CSS for the default largest breakpoint (desktop-first)
  const defaultCSS = css`
    ${property}: ${theme[responsiveSpacingMap[propValue as NewThemeSpacing][largestBreakpointKey]]};
  `;

  // Apply media queries for smaller breakpoints
  const responsiveCSS = breakpointsKeys
    .slice(0, -1) // Exclude the largest breakpoint
    .reverse() // Ensure cascading with max-width
    .map((key) => {
      const spacingValue = theme[responsiveSpacingMap[propValue as NewThemeSpacing][key as keyof typeof breakpoint]];
      return css`
        ${breakpoint[key as keyof typeof breakpoint]`{
          ${property}: ${spacingValue};
        }`}
      `;
    })
    .join('');

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
