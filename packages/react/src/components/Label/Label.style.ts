import styled, { css } from 'styled-components';
import { ExtendedTheme } from '../../types/Theme';
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
    color: ${disabled ? theme.CheckboxLabelDisabledColor : theme.CheckboxLabelColor};
    margin-left: ${theme.CheckboxLabelMarginHorizontal};
    margin-right: ${theme.CheckboxLabelMarginHorizontal};
    ${!disabled && getTabbedStateStyles()}
  `}
`;
