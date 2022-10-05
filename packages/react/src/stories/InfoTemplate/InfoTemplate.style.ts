import styled, { css } from 'styled-components';
import Typography from '../../components/Typography';

export const StyledUsagesText = styled(Typography)`
  ${({ theme }) => css`
    line-height: ${theme.TypographyLineHeight24};
  `}
`;

const StyledGuide = styled(Typography)`
  display: inline;
`;

export const StyledDo = styled(StyledGuide)`
  ${({ theme }) => css`
    color: ${theme.ColorSemanticsSuccess100};
  `}
`;

export const StyledDont = styled(StyledGuide)`
  ${({ theme }) => css`
    color: ${theme.ColorSemanticsError100};
  `}
`;

export const StyledStorybookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.SpacingBase32};
    width: 60%;
  `}
`;

export const StyledExampleContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    border: ${theme.BorderBaseWidthSm} solid ${theme.ColorNeutralGrey200};
    border-radius: ${theme.BorderBaseWidthLg};
    padding: ${theme.SpacingBase12};
  `}
`;

export const StyledChildrenContainer = styled.div`
  max-width: 80%;
`;
