import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types/Theme';
import { getHaloValue } from '../../utils/getHaloValue';
import { getRgba } from '../../utils/getRgba';
import * as CardStyled from '../Card/Card.style';
import { CardGroupProps } from './CardGroup';

export const Container = styled.div<CardGroupProps>`
  ${({ theme, fullWidth, hasShadow }: ExtendedTheme<CardGroupProps>) => css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: ${fullWidth ? '100%' : 'fit-content'};
    border-radius: ${theme.CardBorderRadius};

    ${hasShadow &&
    css`
      box-shadow: ${theme.TabsActiveTabShadowOffsetWidth}px ${theme.TabsActiveTabShadowOffsetHeight}px
        ${theme.CardShadowRadius} ${getRgba(theme.CardShadowColor, theme.CardShadowOpacity)};
    `};
    > div:not(:last-child) {
      border-bottom: 0.5px solid ${theme.ColorBaseGrey200};
    }
    > ${CardStyled.Card} {
      flex: 1;

      &:focus-visible {
        outline: ${theme.ColorBaseBlue400} auto ${theme.LabelOutline};
        outline-offset: -${+getHaloValue(theme.SpacingBase4) / 2}rem;
      }
    }
  `};
`;
