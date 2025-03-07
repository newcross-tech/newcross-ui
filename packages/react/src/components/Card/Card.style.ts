import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Theme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import { CardPropsStrict } from './Card.types';
import Container from '../Container';
import { getBackgroundColor } from '../../utils/css';

export const getColor = ({ theme, variant }: Theme & Pick<CardPropsStrict, 'variant'>): string =>
  ({
    primary: theme.CardBorderColorPrimary,
    secondary: theme.CardBorderColorSecondary,
    tertiary: theme.CardBorderColorTertiary,
  }[variant]);

export const Card = styled(Container)<
  Pick<CardPropsStrict, 'disabled' | 'hasShadow' | 'hasRoundedCorners' | 'onClick' | 'variant'>
>(({ theme, disabled, hasShadow, hasRoundedCorners, onClick }) => [
  {
    tabIndex: !disabled ? 0 : -1,
    cursor: !!onClick && !disabled ? 'pointer' : 'default',
    ...(hasRoundedCorners && { borderRadius: theme.BorderBaseRadiusMd }),
    ...(hasShadow && {
      boxShadow: `${theme.ShadowBaseOffsetSm}px ${theme.ShadowBaseOffsetMd}px ${theme.ShadowBaseElevationSm}px  rgba(0, 0, 0, 0.25)`,
    }),
  },
  getTabbedStateStyles(),
]);

export const MainContent = styled(Container)<
  Pick<CardPropsStrict, 'hasBorder' | 'variant' | 'hasRoundedCorners' | 'thumbnailContent' | 'backgroundColor'>
>((props) => [
  {
    flex: 1,
    ...(props.hasBorder && { border: `${props.theme.BorderBaseWidthSm} solid ${getColor(props)}` }),
    ...(props.hasRoundedCorners &&
      (props.thumbnailContent
        ? {
            borderTopRightRadius: props.theme.BorderBaseRadiusMd,
            borderBottomRightRadius: props.theme.BorderBaseRadiusMd,
          }
        : {
            borderRadius: props.theme.BorderBaseRadiusMd,
          })),
  },
  getBackgroundColor(props),
]);

export const LeftContent = styled.div<Pick<CardPropsStrict, 'hasBorder' | 'variant' | 'hasRoundedCorners'>>((props) => [
  {
    overflow: 'hidden',
    ...(props.hasBorder && {
      border: `${props.theme.BorderBaseWidthSm} solid ${getColor(props)}`,
    }),
    ...(props.hasRoundedCorners && {
      borderTopLeftRadius: props.theme.BorderBaseRadiusMd,
      borderBottomLeftRadius: props.theme.BorderBaseRadiusMd,
    }),
  },
]);

export const FontIcon = styled(FontAwesomeIcon)(({ theme }) => [
  {
    height: theme.BaselineSpacesSpace24,
  },
]);
