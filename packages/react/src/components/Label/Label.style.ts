import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import { TypographyProps } from '../Typography';
import * as TypographyStyled from '../Typography/Typography.style';
import { LabelProps } from './Label';

export const Label = styled.label<LabelProps>`
  ${({ theme, variant, gutterBottom, numberOfLines, disabled }: ExtendedTheme<LabelProps>) => css`
    ${TypographyStyled.getCoreStyles({
      theme,
      variant,
      gutterBottom,
      numberOfLines,
    } as ExtendedTheme<TypographyProps>)};
    color: ${theme.RadioColor};
    ${!disabled && getTabbedStateStyles()}

    b,strong,em {
      font-family: ${theme.BrandFontFamilySemiBold};
    } ;
  `}
`;
