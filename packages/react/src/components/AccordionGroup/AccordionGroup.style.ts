import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { AccordionGroupContainerProps, AccordionGroupSpacing } from './AccordionGroup.types';
import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types/Theme';

export const getSpacingValues = (theme: ThemeDesignTokens) => ({
  [AccordionGroupSpacing.default]: css`
    margin-bottom: ${theme.AccordionGroupMarginBottomDefault};
  `,
  [AccordionGroupSpacing.small]: css`
    margin-bottom: ${theme.AccordionGroupMarginBottomSmall};
  `,
  [AccordionGroupSpacing.medium]: css`
    margin-bottom: ${theme.AccordionGroupMarginBottomMedium};
  `,
  [AccordionGroupSpacing.large]: css`
    margin-bottom: ${theme.AccordionGroupMarginBottomLarge};
  `,
});

export const Container = styled.div`
  ${({ theme, spacing }: ExtendedTheme<AccordionGroupContainerProps>) => css`
    > div:not(:last-child) {
      ${spacing && getSpacingValues(theme)[spacing]}
    }
  }
  `}
`;
