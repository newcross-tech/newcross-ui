import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import Typography from '../Typography';
import { PillProps } from './Pill';
import { BackGroundProps, IconProps, RemoveIconProps, SelectedProps } from './Pill.types';

const getBackgroundColor = ({ theme, disabled, isSelected }: ExtendedTheme<BackGroundProps>) => {
  if (disabled)
    return css`
      ${theme.PillDisabledBackgroundColor}
    `;
  if (isSelected)
    return css`
      ${theme.BrandColorSecondary400}
    `;
  return css`
    ${theme.PillVariantDefaultBackgroundColor}
  `;
};

export const Pill = styled.div<SelectedProps>`
  ${({ theme, disabled, isRemovable, isSelected, hasPadding }: ExtendedTheme<SelectedProps>) => css`
    width: fit-content;
    height: fit-content;
    cursor: ${!disabled && !isRemovable && 'pointer'};
    border: solid ${theme.PillBorderWidth};
    margin: ${hasPadding && theme.PillMargin};
    border-radius: ${theme.PillBorderRadius};
    border-color: ${disabled ? theme.PillDisabledBorderColor : theme.PillVariantDefaultBorderColor};
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
    color: ${disabled ? theme.PillDisabledColor : theme.PillVariantDefaultTextColor};
  `}
`;
export const Icon = styled.div<IconProps>`
  ${({ theme, hasIcon, disabled }: ExtendedTheme<IconProps>) => css`
    margin-right: ${hasIcon && theme.PillIconMarginLeft};
    color: ${disabled ? theme.PillDisabledColor : theme.PillVariantDefaultIconColor};
  `}
`;

export const RemoveIcon = styled.div<RemoveIconProps>`
  ${({ theme, hasIcon, hasLabel, disabled }: ExtendedTheme<RemoveIconProps>) => css`
    margin-left: ${(hasLabel || hasIcon) && theme.PillIconMarginRight};
    color: ${theme.PillDisabledColor};
    cursor: ${!disabled && 'pointer'};

    ${getTabbedStateStyles()}
  `};
`;
