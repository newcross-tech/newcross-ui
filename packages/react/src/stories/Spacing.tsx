import { ThemeDesignTokens } from '../theme/ThemeProvider';
import styled, { css } from 'styled-components';

export enum SpacingPositions {
  Bottom = 'Bottom',
  Horizontal = 'Horizontal',
}

export enum SpacingSizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

type SpacingProps = {
  position?: SpacingPositions;
  hasBorder?: boolean;
  size?: SpacingSizes;
};

const getPositionValues = (theme: ThemeDesignTokens) => ({
  [SpacingPositions.Bottom]: css`
    margin-bottom: ${theme.SpacingBase12};
  `,
  [SpacingPositions.Horizontal]: css`
    margin-right: ${theme.SpacingBase12};
    margin-left: ${theme.SpacingBase12};
  `,
});

const getSizeValues = (theme: ThemeDesignTokens) => ({
  [SpacingSizes.Small]: {
    [SpacingPositions.Bottom]: css`
      margin-bottom: ${theme.SpacingBase12};
    `,
    [SpacingPositions.Horizontal]: css`
      margin-right: ${theme.SpacingBase12};
      margin-left: ${theme.SpacingBase12};
    `,
  },
  [SpacingSizes.Medium]: {
    [SpacingPositions.Bottom]: css`
      margin-bottom: ${theme.SpacingBase24};
    `,
    [SpacingPositions.Horizontal]: css`
      margin-right: ${theme.SpacingBase24};
      margin-left: ${theme.SpacingBase24};
    `,
  },
  [SpacingSizes.Large]: {
    [SpacingPositions.Bottom]: css`
      margin-bottom: ${theme.SpacingBase32};
    `,
    [SpacingPositions.Horizontal]: css`
      margin-right: ${theme.SpacingBase32};
      margin-left: ${theme.SpacingBase32};
    `,
  },
});

const getBorderValues = (theme: ThemeDesignTokens) => css`
  border: ${theme.BorderBaseWidthSm} solid ${theme.ColorNeutralGrey200};
`;

const SpacingStyle = styled.div<SpacingProps>`
  ${({
    theme,
    position = SpacingPositions.Bottom,
    hasBorder,
    size = SpacingSizes.Small,
  }) => css`
    ${hasBorder && getBorderValues(theme)};
    ${position && getPositionValues(theme)[position]};
    ${position && size && getSizeValues(theme)[size][position]};
  `}
`;

const Spacing = (props: SpacingProps) => {
  return <SpacingStyle {...props} />;
};

export default Spacing;
