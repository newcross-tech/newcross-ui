import styled from 'styled-components';

import { AlertPropsStrict } from './Alert.types';
import { Theme } from '../../types';
import { getTabbedStateStyles } from '../../utils';
import Container from '../Container';
import Icon from '../Icon';
import { HTMLAttributes } from 'react';

export const getAccentColor = ({ theme, variant }: Theme & Pick<AlertPropsStrict, 'variant'>) =>
  ({
    success: theme.ElementsBorderSuccess,
    warning: theme.ElementsBorderWarning,
    error: theme.ElementsBorderDanger,
    info: theme.ElementsBorderInfo,
    notification: theme.ElementsBorderActionDefault,
  }[variant]);

const getBackgroundColor = ({ theme, variant }: Theme & Pick<AlertPropsStrict, 'variant'>) =>
  ({
    success: theme.ElementsSurfaceSuccess,
    warning: theme.ElementsSurfaceWarning,
    error: theme.ElementsSurfaceDanger,
    info: theme.ElementsSurfaceInfo,
    notification: theme.ElementsSurfaceDefault,
  }[variant]);

export const Alert = styled(Container)<Pick<AlertPropsStrict, 'hasBorder' | 'variant'>>((props) => [
  {
    borderRadius: props.theme.BorderBaseRadiusMd,
    backgroundColor: getBackgroundColor(props),
  },
  props.hasBorder && {
    border: `${props.theme.BorderBaseWidthSm} solid ${getAccentColor(props)}`,
  },
]);

export const CloseIcon = styled(Icon)<HTMLAttributes<HTMLDivElement>>(() => [
  getTabbedStateStyles(),
  {
    cursor: 'pointer',
  },
]);
