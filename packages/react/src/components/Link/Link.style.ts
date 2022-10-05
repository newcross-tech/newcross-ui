import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
import { ExtendedTheme } from '../../types/Theme';
import { LinkSizes, StyledFontType } from './Link.types';

export type LinkProps = {
  theme: ThemeDesignTokens;
  size: LinkSizes;
};

export const getTextSizeValues = (theme: ThemeDesignTokens) => ({
  [LinkSizes.small]: css`
    font-size: ${theme.TypographyFontSize14};
    line-height: ${theme.TypographyLineHeight20};
  `,
  [LinkSizes.medium]: css`
    font-size: ${theme.TypographyFontSize16};
    line-height: ${theme.TypographyLineHeight24};
  `,
});

export const Font = styled(FontAwesomeIcon)<ExtendedTheme<StyledFontType>>`
  height: ${({ theme, $size = LinkSizes.small }) => getIconSizeValues(theme)[$size]};
`;

export const getIconSizeValues = (theme: ThemeDesignTokens): Record<LinkSizes, string> => {
  return {
    [LinkSizes.small]: theme.LinkIconSmallSize,
    [LinkSizes.medium]: theme.LinkIconMediumSize,
  };
};

const getSizeStyles = (theme: ThemeDesignTokens) => ({
  [LinkSizes.small]: css`
    font-size: ${theme.TypographyFontSize14};
    line-height: ${theme.TypographyLineHeight20};
    padding: ${theme.LinkPadding};
  `,
  [LinkSizes.medium]: css`
    font-size: ${theme.TypographyFontSize16};
    line-height: ${theme.TypographyLineHeight24};
    padding: ${theme.LinkPadding};
  `,
});

export const LinkContent = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.LinkPadding};
    padding-bottom: ${theme.LinkPadding};
    &:active {
      opacity: ${theme.LinkPressedOpacity};
    }
  `};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkText = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.LinkMargin};
    text-decoration-line: underline;
  `};
`;

export const Link = styled.a<ExtendedTheme<LinkProps>>`
  cursor: pointer;

  ${({ theme, size }) => css`
    ${size && getSizeStyles(theme)[size]};
    ${size && getIconSizeValues(theme)[size]};
    color: ${theme.LinkColor};
  `};
`;
