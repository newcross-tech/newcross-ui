import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types/Theme';
import { getTabbedStateStyles } from '../../utils';
import { TypographyVariant } from '../Typography';
import { LinkProps } from './Link';
import { LinkCoreVariant, LinkTextProp } from './Link.types';
import { faCircleChevronRight } from '@fortawesome/pro-solid-svg-icons/faCircleChevronRight';
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/pro-regular-svg-icons/faPhone';
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export const getIcon = (): Record<LinkCoreVariant, IconDefinition> => ({
  email: faEnvelope,
  internal: faCircleChevronRight,
  external: faExternalLink,
  phone: faPhone,
});

export const getTypographySizes = (): Record<string, TypographyVariant> => ({
  small: TypographyVariant.paragraph2,
  medium: TypographyVariant.paragraph1,
});

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

export const LinkText = styled.div<LinkTextProp>`
  ${({ theme, leftIcon }: LinkTextProp) => css`
    text-decoration-line: underline;
    ${leftIcon
      ? css`
          margin-left: ${theme.LinkMargin};
        `
      : css`
          margin-right: ${theme.LinkMargin};
        `}
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
