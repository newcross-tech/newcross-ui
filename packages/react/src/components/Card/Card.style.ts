import { CardProps } from '../Card';
import { CardVariants } from './Card.types';
import styled, { css } from 'styled-components';
import { getRgba } from '../../../utils/getRgba';
import { ExtendedTheme, Theme } from '../../types/Theme';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTabbedStateStyles } from '../../../utils/getTabbedStateStyles';

export const getColorValues = (theme: ThemeDesignTokens) => ({
  [CardVariants.primary]: css`
    ${theme.CardBorderColorPrimary}
  `,
  [CardVariants.secondary]: css`
    ${theme.CardBorderColorSecondary}
  `,
});

export const Card = styled.div<CardProps>`
  ${({ theme, disabled, hasShadow, hasRoundedCorners, fullWidth }: ExtendedTheme<CardProps>) => css`
    display: flex;
    width: fit-content;
    border-radius: ${hasRoundedCorners && theme.CardBorderRadius};
    ${getTabbedStateStyles()}

    ${!disabled &&
    css`
      cursor: pointer;
    `};

    ${fullWidth &&
    css`
      width: 100%;
    `};

    ${hasShadow &&
    css`
      box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px ${theme.TabsActiveTabShadowOffsetHeight}px
        ${theme.CardShadowRadius} ${getRgba(theme.CardShadowColor, theme.CardShadowOpacity)};
    `};

    > ${Content} {
      border-radius: ${hasRoundedCorners && theme.CardBorderRadius};
    }
  `};
`;

export const Content = styled.div<CardProps>`
  ${({ theme, hasBorder, hasPadding, hasRightIcon, variant }: ExtendedTheme<CardProps>) => css`
    display: flex;
    flex: 1;
    align-items: center;
    padding: ${hasPadding && theme.CardPadding};
    background-color: ${theme.ColorNeutralWhite};
    justify-content: ${hasRightIcon ? 'space-between' : 'flex-start'};

    ${hasBorder &&
    css`
      border: ${theme.CardBorderWidth} solid ${getColorValues(theme)[variant as CardVariants]};
    `};
  `};
`;

export const FontIcon = styled(FontAwesomeIcon)`
  ${({ theme }: Theme) => css`
    height: ${theme.SpacingBase24};
  `};
`;
