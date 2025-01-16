import styled from 'styled-components';
import { getTabbedStateStyles } from '../../utils';
import { ToggleButtonProps } from './ToggleButton';
import Container from '../Container';
import { Theme } from '../../types';

const getToggleButtonSize = ({ theme, size }: Theme & Pick<ToggleButtonProps, 'size'>) => {
  if (size === 'small') return theme.BaselineSpacesSpace32;
  return theme.BaselineSpacesSpace48;
};

const getBackgroundColor = ({
  theme,
  disabled,
  selected,
}: Theme & Pick<ToggleButtonProps, 'selected' | 'disabled'>) => {
  if (disabled) {
    return selected ? theme.ElementsSurfaceDisabled : theme.ElementsSurfaceDefault;
  }
  return selected ? theme.ElementsSurfaceActionDefault : theme.ElementsSurfaceDefault;
};

const getBorderColor = ({ theme, disabled, selected }: Theme & Pick<ToggleButtonProps, 'disabled' | 'selected'>) => {
  if (disabled) {
    return theme.ElementsBorderDisabled;
  }
  return selected ? theme.ElementsBorderActionDefault : theme.ElementsBorderDefault;
};

export const Wrapper = styled(Container)<ToggleButtonProps>(({ theme, selected, disabled, size, styleAs }) => ({
  minHeight: getToggleButtonSize({ theme, size }),
  minWidth: getToggleButtonSize({ theme, size }),
  cursor: disabled ? 'auto' : 'pointer',
  ...(styleAs === 'default' && {
    borderStyle: 'solid',
    borderWidth: theme.BorderBaseWidthSm,
    borderColor: getBorderColor({ theme, disabled, selected }),
    borderRadius: theme.BorderBaseRadiusMd,
    backgroundColor: getBackgroundColor({ theme, disabled, selected }),
    ...(!disabled && {
      '&:hover': {
        backgroundColor: theme.ElementsSurfaceActionHover,
        borderColor: theme.ElementsBorderActionDefault,
      },
    }),
  }),
  ...getTabbedStateStyles(),
}));
