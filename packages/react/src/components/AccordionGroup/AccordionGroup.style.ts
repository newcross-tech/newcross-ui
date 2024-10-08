import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { AccordionGroupContainerProps, AccordionGroupSpacing } from './AccordionGroup.types';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ExtendedTheme } from '../../types';

export const getSpacingValues = (
  theme: ThemeDesignTokens
): Record<AccordionGroupSpacing, FlattenSimpleInterpolation> => ({
  default: css`
    margin-bottom: ${theme.AccordionGroupMarginBottomDefault};
  `,
  small: css`
    margin-bottom: ${theme.AccordionGroupMarginBottomSmall};
  `,
  medium: css`
    margin-bottom: ${theme.AccordionGroupMarginBottomMedium};
  `,
  large: css`
    margin-bottom: ${theme.AccordionGroupMarginBottomLarge};
  `,
});

export const Container = styled.div`
  ${({ theme, spacing }: ExtendedTheme<AccordionGroupContainerProps>) => css`
    > div:not(:last-child) {
      ${spacing && getSpacingValues(theme)[spacing]}
    }
    > div:first-child {
      border-top-right-radius: ${theme.CardBorderRadius};
      border-top-left-radius: ${theme.CardBorderRadius};
    }
    > div {
      border-radius: 0;
      border-bottom: 1px solid ${theme.ColorNeutralGrey200};
    }
    > div:last-child {
      border-bottom-right-radius: ${theme.CardBorderRadius};
      border-bottom-left-radius: ${theme.CardBorderRadius};
    }
  `}
`;
