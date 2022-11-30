import { AlertProps } from './Alert';
import Typography from '../Typography';
import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types/Theme';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { getAccentColor, IconProps } from './Alert.types';
import { getTabbedStateStyles } from '../../../utils/getTabbedStateStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlertVariant } from '../../types/AlertVariant';

const getBackgroundColor = (theme: ThemeDesignTokens) => ({
  [AlertVariant.success]: css`
    background-color: ${theme.AlertColorSuccessSecondary};
  `,
  [AlertVariant.warning]: css`
    background-color: ${theme.AlertColorWarningSecondary};
  `,
  [AlertVariant.error]: css`
    background-color: ${theme.AlertColorErrorSecondary};
  `,
  [AlertVariant.info]: css`
    background-color: ${theme.AlertColorInfoSecondary};
  `,
});

export const Alert = styled.div<AlertProps>`
  ${({ theme, hasBorder, variant }: ExtendedTheme<AlertProps>) => css`
    display: flex;
    width: 100%;
    gap: ${theme.SpacingBase12};
    padding: ${theme.SpacingBase16};
    border-radius: ${theme.AlertBorderRadius};
    ${variant && getBackgroundColor(theme)[variant as AlertVariant]};

    ${hasBorder &&
    css`
      border: ${theme.AlertBorderWidth} solid ${getAccentColor(theme)[variant as AlertVariant]};
    `}
  `};
`;

export const Text = styled(Typography)`
  ${({ theme }: Theme) => css`
    color: ${theme.ColorBaseBlack100};
  `};
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  ${({ theme }: Theme) => css`
    gap: ${theme.SpacingBase4};
  `};
`;

export const Icon = styled(FontAwesomeIcon)``;

export const IconStyle = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  height: fit-content;
  ${({ theme, position, variant }: ExtendedTheme<IconProps>) => css`
    ${getTabbedStateStyles()};

    > ${Icon} {
      ${position === 'right' &&
      css`
        cursor: pointer;
        height: ${theme.AlertIconSizeRight};
        width: ${theme.AlertIconSizeRight};
        color: ${theme.BrandColorPrimary};
      `}

      ${position === 'left' &&
      css`
        height: ${theme.AlertIconSizeLeft};
        width: ${theme.AlertIconSizeLeft};
        color: ${getAccentColor(theme)[variant as AlertVariant]};
      `}
    }
  `}
`;
