import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import { ToggleButtonProps } from './ToggleButton';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';

const getBackgroundColor = ({
  theme,
  disabled,
  selected,
}: {
  theme: ThemeDesignTokens;
  disabled?: boolean;
  selected?: boolean;
}) => {
  if (disabled) {
    return selected ? theme.ElementsSurfaceDisabled : theme.ElementsSurfaceDefault;
  }
  return selected ? theme.ElementsSurfaceActionDefault : theme.ElementsSurfaceDefault;
};

export const Container = styled.button<ToggleButtonProps>`
  ${({ theme, selected, fullWidth, disabled }: ExtendedTheme<ToggleButtonProps>) => css`
    padding: ${theme.ToggleButtonPaddingVertical} ${theme.ToggleButtonPaddingHorizontal};
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid ${theme.ToggleButtonBorderWidth}
      ${selected ? theme.ToggleButtonSelectedBorderColor : theme.ToggleButtonBorderColor};
    border-radius: ${theme.ToggleButtonBorderRadius};
    cursor: ${disabled ? 'auto' : 'pointer'};
    background-color: ${getBackgroundColor({ theme, disabled, selected })};
    width: ${fullWidth && '100%'};
    min-width: fit-content;
    ${getTabbedStateStyles()}
  `};
`;

// TODO - To be removed
// export const IconWrapper = styled.div<ExtendedTheme<ContentProps>>`
//   ${({ theme, hasLeftContent, hasRightContent }: ExtendedTheme<ContentProps>) => css`
//     margin-right: ${hasLeftContent && theme.ToggleButtonMargin};
//     margin-left: ${hasRightContent && theme.ToggleButtonMargin};
//     color: ${theme.ToggleButtonColor};
//   `};
// `;
