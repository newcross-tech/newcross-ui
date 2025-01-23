import styled from 'styled-components';
import { Theme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import { getTypographyColorStyle, getTypographyCoreStyles } from '../Typography';
import { LabelProps } from './Label';

export const Label = styled.label<LabelProps>(
  ({ theme, variant, gutterBottom, numberOfLines, disabled, color = 'defaultDark' }: Theme & LabelProps) => [
    getTypographyCoreStyles({
      variant,
      gutterBottom,
      numberOfLines,
      mode: 'light',
    }),
    {
      color: getTypographyColorStyle({ theme, mode: 'light', color }),
      'b,strong,em': {
        fontFamily: theme.BrandFontFamilySemiBold,
      },
    },
    !disabled && getTabbedStateStyles(),
  ]
);
