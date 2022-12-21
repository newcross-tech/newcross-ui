import { Theme } from '../../types/Theme';
import styled, { css } from 'styled-components';
import Typography from '../../components/Typography';

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 350px;
`;

export const Title = styled(Typography)`
  ${({ theme }: Theme) => css`
    color: ${theme.TextInputLabelColor};
  `};
`;

export const SubTitle = styled(Typography)`
  ${({ theme }: Theme) => css`
    color: ${theme.ColorBaseGrey100};
    margin-bottom: 10px;
  `};
`;

export const Time = styled(Typography)`
  ${({ theme }: Theme) =>
    css`
      color: ${theme.TextInputLabelColor};
      align-self: flex-start;
      margin-bottom: ${theme.SpacingBase24};
    `};
`;

export const Price = styled(Typography)`
  ${({ theme }: Theme) => css`
    color: ${theme.TextInputLabelColor};
  `};
`;

export const Info = styled(Typography)`
  ${({ theme }: Theme) => css`
    color: ${theme.ColorBaseGrey100};
    align-items: flex-end;
  `};
`;

export const Divider = styled.div`
  ${({ theme }: Theme) => css`
    border: 1px solid ${theme.ColorBaseGrey200};
    height: ${theme.SpacingBase16};
  `};
`;
