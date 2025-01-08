import styled, { css } from 'styled-components';
import { Theme } from '../../types';
import { getElipsisStyles, getSortedBreakpoints } from '../../utils';
import { breakpoint } from '../../utils/css';
import { typographyMap } from './Typography.constants';
import { type TypographyPropsStrict } from './Typography.types';

function getTypographyStyles(props: Pick<TypographyPropsStrict, 'variant'>) {
  const { fontFamily, fontSize, lineHeight, fontWeight, responsiveness, capitaliseText } = typographyMap[props.variant];

  const hasResponsiveValues = responsiveness && Object.keys(responsiveness).length > 0;

  return css(({ theme }) => [
    {
      fontFamily: theme[fontFamily],
      fontSize: theme[fontSize],
      lineHeight: theme[lineHeight],
      fontWeight: theme[fontWeight],
      textTransform: capitaliseText ? 'capitalize' : undefined,
    },
    hasResponsiveValues &&
      getSortedBreakpoints(responsiveness).map(([breakpointKey, responsiveStyles]) =>
        breakpoint[breakpointKey](() =>
          css({
            fontSize: theme[responsiveStyles.fontSize],
            lineHeight: theme[responsiveStyles.lineHeight],
          })
        )
      ),
  ]);
}

export const getTypographyColorStyle = ({
  theme,
  mode,
  color,
}: Theme & Pick<TypographyPropsStrict, 'mode' | 'color'>) => {
  if (!color) {
    return 'inherit';
  }

  return {
    dark: {
      primary: theme.ThemesNeutral0,
      secondary: theme.ThemesNeutral100,
      white: theme.ThemesNeutral0,
      black: theme.ThemesPrimary800,
      error: theme.ThemesDanger500,
      defaultDark: theme.ElementsTextDefaultDark,
      defaultLight: theme.ElementsTextDefaultLight,
      defaultDarkSecondary: theme.ElementsTextDefaultDarkSecondary,
      actionPrimaryDark: theme.ElementsTextActionPrimaryDark,
      actionSecondaryLight: theme.ElementsTextActionSecondaryLight,
      actionDanger: theme.ElementsTextActionDanger,
      disabled: theme.ElementsTextDisabled,
      success: theme.ElementsTextSuccess,
      successStandalone: theme.ElementsTextSuccessStandalone,
      info: theme.ElementsTextInfo,
      warning: theme.ElementsTextWarning,
      danger: theme.ElementsTextDanger,
      dangerError: theme.ElementsTextDangerError,
    },
    light: {
      primary: theme.ThemesPrimary500,
      secondary: theme.ThemesNeutral700,
      white: theme.ThemesNeutral0,
      black: theme.ThemesSecondary950,
      error: theme.ThemesDanger500,
      defaultDark: theme.ElementsTextDefaultDark,
      defaultLight: theme.ElementsTextDefaultLight,
      defaultDarkSecondary: theme.ElementsTextDefaultDarkSecondary,
      actionPrimaryDark: theme.ElementsTextActionPrimaryDark,
      actionSecondaryLight: theme.ElementsTextActionSecondaryLight,
      actionDanger: theme.ElementsTextActionDanger,
      disabled: theme.ElementsTextDisabled,
      success: theme.ElementsTextSuccess,
      successStandalone: theme.ElementsTextSuccessStandalone,
      info: theme.ElementsTextInfo,
      warning: theme.ElementsTextWarning,
      danger: theme.ElementsTextDanger,
      dangerError: theme.ElementsTextDangerError,
    },
  }[mode][color];
};

export function getTypographyCoreStyles(props: Omit<TypographyPropsStrict, 'children' | 'display'>) {
  return css(({ theme }) => {
    const colorStyle = getTypographyColorStyle({ ...props, theme });

    return [
      getTypographyStyles(props),
      props.numberOfLines && getElipsisStyles(props.numberOfLines),
      {
        color: colorStyle,
        textDecoration: props.textDecoration ? `${props.textDecoration} ${colorStyle}` : 'inherit',
        marginBottom: props.gutterBottom ? theme.SpacingBase8 : theme.SpacingBase0,
        textAlign: 'inherit',
        'b, strong, em': {
          fontFamily: theme.TypographyFontFamilyPoppinsSemiBold,
        },
      },
    ];
  });
}

export const Typography = styled.div((props: TypographyPropsStrict) => [
  {
    display: props.display,
    margin: 0,
    padding: 0,
  },
  getTypographyCoreStyles(props),
]);
