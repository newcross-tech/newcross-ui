import { SemanticSurfaceColors, Theme } from '../../types';

export const getBackgroundColor = ({
  theme,
  backgroundColor,
}: Theme & {
  backgroundColor: SemanticSurfaceColors;
}): Record<string, string> => {
  const backgroundColorsMap: Record<SemanticSurfaceColors, string> = {
    default: theme.ElementsSurfaceDefault,
    defaultSecondary: theme.ElementsSurfaceDefaultSecondary,
    highlightSubtle: theme.ElementsSurfaceHighlightSubtle,
    highlightStrong: theme.ElementsSurfaceHighlightStrong,
    page: theme.ElementsSurfacePage,
    actionDefault: theme.ElementsSurfaceActionDefault,
    actionHover: theme.ElementsSurfaceActionHover,
    actionHoverSecondary: theme.ElementsSurfaceActionHoverSecondary,
    actionDanger: theme.ElementsSurfaceActionDanger,
    actionDangerHover: theme.ElementsSurfaceActionDangerHover,
    disabled: theme.ElementsSurfaceDisabled,
    disabledHighlight: theme.ElementsSurfaceDisabledHighlight,
    success: theme.ElementsSurfaceSuccess,
    info: theme.ElementsSurfaceInfo,
    warning: theme.ElementsSurfaceWarning,
    danger: theme.ElementsSurfaceDanger,
  };

  return {
    backgroundColor: backgroundColorsMap[backgroundColor],
  };
};
