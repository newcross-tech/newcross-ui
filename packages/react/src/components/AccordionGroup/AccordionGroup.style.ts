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
  `}
`;
