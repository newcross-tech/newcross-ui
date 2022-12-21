import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme, Theme } from '../../types/Theme';
import { getRgba, getTabbedStateStyles } from '../../utils';
import { CardProps } from '../Card';
import { CardVariants } from './Card.types';

export const getColorValues = (theme: ThemeDesignTokens) => ({
  [CardVariants.primary]: css`
    ${theme.CardBorderColorPrimary}
  `,
  [CardVariants.secondary]: css`
    ${theme.CardBorderColorSecondary}
  `,
});

export const Card = styled.div<CardProps>`
  ${({ theme, disabled, hasShadow, hasRoundedCorners, fullWidth, thumbnailContent }: ExtendedTheme<CardProps>) => css`
    display: flex;
    width: ${fullWidth && '100%'};

    border-radius: ${hasRoundedCorners && theme.CardBorderRadius};
    ${getTabbedStateStyles()}

    ${!disabled &&
    css`
      cursor: pointer;
    `};

    ${hasShadow &&
    css`
      box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px ${theme.TabsActiveTabShadowOffsetHeight}px
        ${theme.CardShadowRadius} ${getRgba(theme.CardShadowColor, theme.CardShadowOpacity)};
    `};

    > ${MainContent} {
      ${hasRoundedCorners &&
      (thumbnailContent
        ? css`
            border-top-right-radius: ${theme.CardBorderRadius};
            border-bottom-right-radius: ${theme.CardBorderRadius};
          `
        : css`
            border-radius: ${theme.CardBorderRadius};
          `)}
    }

    > ${LeftContent} {
      ${hasRoundedCorners &&
      css`
        border-top-left-radius: ${theme.CardBorderRadius};
        border-bottom-left-radius: ${theme.CardBorderRadius};
      `};
    }
  `};
`;

export const MainContent = styled.div<CardProps>`
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

export const LeftContent = styled.div<CardProps>`
  ${({ theme, hasBorder, variant }: ExtendedTheme<CardProps>) => css`
    overflow: hidden;
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
