import styled from 'styled-components';
import { Theme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import { getTypographyCoreStyles } from '../Typography';
import { LabelProps } from './Label';

export const Label = styled.label<LabelProps>(
  ({ theme, variant, gutterBottom, numberOfLines, disabled }: Theme & LabelProps) => [
    getTypographyCoreStyles({
      variant,
      gutterBottom,
      numberOfLines,
      mode: 'light',
    }),
    {
      color: theme.RadioColor,
      'b,strong,em': {
        fontFamily: theme.BrandFontFamilySemiBold,
      },
    },
    !disabled && getTabbedStateStyles(),
  ]
);
