import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { IconProps } from './Alert.types';
import { AlertVariant, ExtendedTheme, Theme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import Typography from '../Typography';
import { AlertProps } from './Alert';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { faCircleExclamation } from '@fortawesome/pro-regular-svg-icons/faCircleExclamation';
import { faCircleInfo } from '@fortawesome/pro-regular-svg-icons/faCircleInfo';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export const getTitle = (): Record<AlertVariant, string> => ({
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
  info: 'Info',
});

export const getIcon = (): Record<AlertVariant, IconDefinition> => ({
  success: faCheck,
  warning: faCircleExclamation,
  error: faCircleExclamation,
  info: faCircleInfo,
});

export const getAccentColor = (theme: ThemeDesignTokens): Record<AlertVariant, string> => ({
  success: theme.AlertColorSuccessPrimary,
  warning: theme.AlertColorWarningPrimary,
  error: theme.AlertColorErrorPrimary,
  info: theme.AlertColorInfoPrimary,
});

const getBackgroundColor = (theme: ThemeDesignTokens): Record<AlertVariant, FlattenSimpleInterpolation> => ({
  success: css`
    background-color: ${theme.AlertColorSuccessSecondary};
  `,
  warning: css`
    background-color: ${theme.AlertColorWarningSecondary};
  `,
  error: css`
    background-color: ${theme.AlertColorErrorSecondary};
  `,
  info: css`
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
