import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Theme, Container as BaseContainer } from '@newcross-ui/react';
import styled, { css } from 'styled-components';

export const Container = styled(BaseContainer)<Theme>`
  ${({ theme }) => css`
    background-color: ${theme.ColorBaseBlue100};
    height: ${theme.SpacingBase32};
  `};
`;

export const Icon = styled(FontAwesomeIcon)<Theme>`
  ${({ theme }: Theme) => css`
    cursor: pointer;
    color: ${theme.ColorBaseWhite100};
    width: ${theme.SpacingBase32};
    height: ${theme.SpacingBase32};
  `};
`;
