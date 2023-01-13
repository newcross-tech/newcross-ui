import { ThemeDesignTokens } from '../theme/ThemeProvider';
import styled, { css } from 'styled-components';

export type SpacingPositions = 'Bottom' | 'Horizontal';

export type SpacingSizes = 'Small' | 'Medium' | 'Large';

type SpacingProps = {
  position?: SpacingPositions;
  hasBorder?: boolean;
  size?: SpacingSizes;
};

const getPositionValues = (theme: ThemeDesignTokens) => ({
  Bottom: css`
    margin-bottom: ${theme.SpacingBase12};
  `,
  Horizontal: css`
    margin-right: ${theme.SpacingBase12};
    margin-left: ${theme.SpacingBase12};
  `,
});

const getSizeValues = (theme: ThemeDesignTokens) => ({
  Small: {
    Bottom: css`
      margin-bottom: ${theme.SpacingBase12};
    `,
    Horizontal: css`
      margin-right: ${theme.SpacingBase12};
      margin-left: ${theme.SpacingBase12};
    `,
  },
  Medium: {
    Bottom: css`
      margin-bottom: ${theme.SpacingBase24};
    `,
    Horizontal: css`
      margin-right: ${theme.SpacingBase24};
      margin-left: ${theme.SpacingBase24};
    `,
  },
  Large: {
    Bottom: css`
      margin-bottom: ${theme.SpacingBase32};
    `,
    Horizontal: css`
      margin-right: ${theme.SpacingBase32};
      margin-left: ${theme.SpacingBase32};
    `,
  },
});

const getBorderValues = (theme: ThemeDesignTokens) => css`
  border: ${theme.BorderBaseWidthSm} solid ${theme.ColorNeutralGrey200};
`;

const SpacingStyle = styled.div<SpacingProps>`
  ${({ theme, position = 'Bottom', hasBorder, size = 'Small' }) => css`
    ${hasBorder && getBorderValues(theme)};
    ${position && getPositionValues(theme)[position]};
    ${position && size && getSizeValues(theme)[size][position]};
  `}
`;

const Spacing = (props: SpacingProps) => {
  return <SpacingStyle {...props} />;
};

export default Spacing;
