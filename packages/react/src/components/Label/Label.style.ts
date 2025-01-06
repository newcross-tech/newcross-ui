import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import { TypographyProps, getTypographyCoreStyles } from '../Typography';
import { LabelProps } from './Label';

export const Label = styled.label<LabelProps>`
  ${({ theme, variant, gutterBottom, numberOfLines, disabled }: ExtendedTheme<LabelProps>) => css`
    ${getTypographyCoreStyles({
      theme,
      variant,
      gutterBottom,
      numberOfLines,
    } as ExtendedTheme<TypographyProps>)};
    color: ${theme.RadioColor};
    ${!disabled && getTabbedStateStyles()}

    b,strong,em {
      font-family: ${theme.BrandFontFamilySemiBold};
    }
  `}
`;
