import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types';
import { TypographyVariant } from '../Typography';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { LinkProps } from './Link';

export const getIconSize = (theme: ThemeDesignTokens): Record<TypographyVariant, FlattenSimpleInterpolation> => ({
  heading1: css`
    height: ${theme.TypographyWebHeading1FontSize};
    width: ${theme.TypographyWebHeading1FontSize};
  `,
  heading2: css`
    height: ${theme.TypographyWebHeading2FontSize};
    width: ${theme.TypographyWebHeading2FontSize};
  `,
  heading3: css`
    height: ${theme.TypographyWebHeading3FontSize};
    width: ${theme.TypographyWebHeading3FontSize};
  `,
  heading4: css`
    height: ${theme.TypographyWebHeading4FontSize};
    width: ${theme.TypographyWebHeading4FontSize};
  `,
  heading5: css`
    height: ${theme.TypographyWebHeading5FontSize};
    width: ${theme.TypographyWebHeading5FontSize};
  `,
  heading6: css`
    height: ${theme.TypographyWebHeading6FontSize};
    width: ${theme.TypographyWebHeading6FontSize};
  `,
  subtitle1: css`
    height: ${theme.TypographyWebSubtitle1FontSize};
    width: ${theme.TypographyWebSubtitle1FontSize};
  `,
  subtitle2: css`
    height: ${theme.TypographyWebSubtitle2FontSize};
    width: ${theme.TypographyWebSubtitle2FontSize};
  `,
  paragraph1: css`
    height: ${theme.TypographyParagraph1FontSize};
    width: ${theme.TypographyParagraph1FontSize};
  `,
  paragraph2: css`
    height: ${theme.TypographyParagraph2FontSize};
    width: ${theme.TypographyParagraph2FontSize};
  `,
  paragraph3: css`
    height: ${theme.TypographyParagraph3FontSize};
    width: ${theme.TypographyParagraph3FontSize};
  `,
  paragraph4: css`
    height: ${theme.TypographyParagraph4FontSize};
    width: ${theme.TypographyParagraph4FontSize};
  `,
});

export const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;

  ${({ theme }: Theme) => css`
    color: ${theme.LinkColor};

    &:active {
      opacity: ${theme.LinkPressedOpacity};
    }
  `};
`;

export const Icon = styled(FontAwesomeIcon)<Pick<LinkProps, 'leftIcon' | 'rightIcon' | 'variant'>>`
  ${({
    theme,
    leftIcon,
    rightIcon,
    variant,
  }: ExtendedTheme<Pick<LinkProps, 'leftIcon' | 'rightIcon' | 'variant'>>) => css`
    ${getIconSize(theme)[variant]};
    ${leftIcon && `margin-right: ${theme.SpacingBase8}`};
    ${rightIcon && `margin-left: ${theme.SpacingBase8}`};
  `};
`;
