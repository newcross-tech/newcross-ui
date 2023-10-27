import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { Theme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import Typography, { TypographyVariant } from '../Typography';
import { LinkCoreVariant, LinkTextProp } from './Link.types';
import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons/faCircleChevronRight';
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/pro-regular-svg-icons/faPhone';
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { LinkProps } from './Link';

export const getIcon = (): Record<LinkCoreVariant, IconDefinition> => ({
  email: faEnvelope,
  internal: faCircleChevronRight,
  external: faExternalLink,
  phone: faPhone,
});

export const getTypographySizes = (): Record<string, TypographyVariant> => ({
  small: 'paragraph2',
  medium: 'paragraph1',
});

export const LinkIcon = styled(FontAwesomeIcon)`
  ${({ theme }: Theme) => css`
    width: ${theme.LinkIconMediumSize};
    height: ${theme.LinkIconMediumSize};
  `};
`;

export const LinkContent = styled.div`
  ${({ theme }: Theme) => css`
    display: inline;
    align-items: center;

    &:active {
      opacity: ${theme.LinkPressedOpacity};
    }
  `};
`;

export const LinkText = styled.div<LinkTextProp>`
  ${({ theme, leftIcon, rightIcon }: LinkTextProp) => css`
    display: inline;
    text-decoration-line: underline;
    margin-left: ${leftIcon && (theme.LinkMargin ?? '0')};
    margin-right: ${rightIcon && (theme.LinkMargin ?? '0')};
  `};
`;
export const LinkTextTypography = styled(Typography)`
  display: inline;
`;

const getLinkStyles = () => css`
  display: inline;
  cursor: pointer;
  ${({ theme }: Theme) => css`
    color: ${theme.LinkColor};
    width: fit-content;
    ${getTabbedStateStyles()}
  `};
`;
export const LinkContainer = styled.div<LinkProps>`
  display: inline;
  ${({ align }) => css`
    text-align: ${align ?? 'inherit'};
  `}
`;

export const NonLinkText = styled(Typography)`
  display: inline;
  ${({ theme }: Theme) => css`
    color: ${theme.TypographyColorPrimary};
  `}
`;

export const LinkDiv = styled.div`
  ${getLinkStyles()};
`;

export const LinkAnchor = styled.a`
  ${getLinkStyles()};
`;
