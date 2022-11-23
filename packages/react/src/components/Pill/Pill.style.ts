import { PillProps } from './Pill';
import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types/Theme';
import Typography from '../Typography';
import { BackGroundProps, IconProps, RemoveIconProps, SelectedProps } from './Pill.types';
import { getTabbedStateStyles } from '../../../utils/getTabbedStateStyles';

const getBackgroundColor = ({ theme, disabled, isSelected }: ExtendedTheme<BackGroundProps>) => {
  if (disabled)
    return css`
      ${theme.PillDisabledBackgroundColor}
    `;
  if (isSelected)
    return css`
      ${theme.ColorBaseMint400}
    `;
  return css`
    ${theme.PillBackgroundColor}
  `;
};

export const Pill = styled.div<SelectedProps>`
  ${({ theme, disabled, isRemovable, isSelected }: ExtendedTheme<SelectedProps>) => css`
    width: fit-content;
    height: fit-content;
    cursor: ${!disabled && !isRemovable && 'pointer'};
    border: solid ${theme.PillBorderWidth};
    margin: ${theme.PillMargin};
    border-radius: ${theme.PillBorderRadius};
    border-color: ${disabled ? theme.PillDisabledBorderColor : theme.PillBorderColor};
    background-color: ${getBackgroundColor({ theme, disabled, isSelected })};

    ${getTabbedStateStyles()}
  `};
`;

export const Content = styled.div<PillProps>`
  ${({ theme }: ExtendedTheme<PillProps>) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.PillPaddingVertical} ${theme.PillPaddingHorizontal};
  `}
`;

export const Text = styled(Typography)<PillProps>`
  ${({ theme, disabled }: ExtendedTheme<PillProps>) => css`
    color: ${disabled ? theme.PillTextDisabledColor : theme.PillTextColor};
  `}
`;
export const Icon = styled.div<IconProps>`
  ${({ theme, hasIcon, disabled }: ExtendedTheme<IconProps>) => css`
    margin-right: ${hasIcon && theme.PillIconMarginLeft};
    color: ${disabled ? theme.PillIconDisabledColor : theme.PillIconColor};
  `}
`;

export const RemoveIcon = styled.div<RemoveIconProps>`
  ${({ theme, hasIcon, hasLabel, disabled }: ExtendedTheme<RemoveIconProps>) => css`
    margin-left: ${(hasLabel || hasIcon) && theme.PillIconMarginRight};
    color: ${theme.PillIconDisabledColor};
    cursor: ${!disabled && 'pointer'};

    ${getTabbedStateStyles()}
  `};
`;
