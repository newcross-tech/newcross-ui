import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import Typography from '../Typography';
import { ToggleButtonProps } from './ToggleButton';
import { ContentProps } from './ToggleButton.types';

export const Container = styled.button<ToggleButtonProps>`
  ${({ theme, selected, fullWidth }: ExtendedTheme<ToggleButtonProps>) => css`
    padding: ${theme.ToggleButtonPaddingVertical} ${theme.ToggleButtonPaddingHorizontal};
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid ${theme.ToggleButtonBorderWidth}
      ${selected ? theme.ToggleButtonSelectedBorderColor : theme.ToggleButtonBorderColor};
    border-radius: ${theme.ToggleButtonBorderRadius};
    cursor: pointer;
    background-color: ${selected ? theme.ToggleButtonSelectedBackgroundColor : theme.ToggleButtonBackgroundColor};

    width: ${fullWidth && '100%'};
    min-width: fit-content;
    ${getTabbedStateStyles()}
  `};
`;

export const IconWrapper = styled.div<ExtendedTheme<ContentProps>>`
  ${({ theme, hasLeftContent, hasRightContent }: ExtendedTheme<ContentProps>) => css`
    margin-right: ${hasLeftContent && theme.ToggleButtonMargin};
    margin-left: ${hasRightContent && theme.ToggleButtonMargin};
    color: ${theme.ToggleButtonColor};
  `};
`;
export const Text = styled(Typography)<ToggleButtonProps>`
  ${({ theme }: ExtendedTheme<ToggleButtonProps>) => css`
    color: ${theme.ToggleButtonColor};
  `};
`;
