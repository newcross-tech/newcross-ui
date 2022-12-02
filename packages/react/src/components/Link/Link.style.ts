import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { getTabbedStateStyles } from '../../../utils/getTabbedStateStyles';
import { ExtendedTheme, Theme } from '../../types/Theme';
import { LinkProps } from './Link';

export const LinkIcon = styled(FontAwesomeIcon)`
  ${({ theme }: Theme) => css`
    width: ${theme.LinkIconMediumSize};
    height: ${theme.LinkIconMediumSize};
  `};
`;

export const LinkContent = styled.div`
  ${({ theme }: Theme) => css`
    display: flex;
    align-items: center;
    &:active {
      opacity: ${theme.LinkPressedOpacity};
    }
  `};
`;

export const LinkText = styled.div`
  ${({ theme }: Theme) => css`
    margin-right: ${theme.LinkMargin};
    text-decoration-line: underline;
  `};
`;

export const Link = styled.a<LinkProps>`
  cursor: pointer;

  ${({ theme }: ExtendedTheme<LinkProps>) => css`
    color: ${theme.LinkColor};
    width: fit-content;
    ${getTabbedStateStyles()}
  `};
`;
