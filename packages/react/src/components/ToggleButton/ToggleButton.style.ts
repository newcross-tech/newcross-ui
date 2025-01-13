import styled from 'styled-components';
import { getTabbedStateStyles } from '../../utils';
import { ToggleButtonProps } from './ToggleButton';
import { ThemeDesignTokens } from '../../theme/ThemeProvider';
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
}: {
  theme: ThemeDesignTokens;
  disabled?: boolean;
  selected?: boolean;
}) => {
  if (disabled) {
    return selected ? theme.ElementsSurfaceDisabled : theme.ElementsSurfaceDefault;
  }
  return selected ? theme.ElementsSurfaceActionDefault : theme.ElementsSurfaceDefault;
};

export const Wrapper = styled(Container)<ToggleButtonProps>(({ theme, selected, disabled, size, styleAs }) => ({
  minHeight: getToggleButtonSize({ theme, size }),
  minWidth: getToggleButtonSize({ theme, size }),
  cursor: disabled ? 'auto' : 'pointer',
  ...(styleAs === 'default' && {
    borderStyle: 'solid',
    borderWidth: theme.BorderBaseWidthSm,
    borderColor: selected ? theme.ElementsBorderActionDefault : theme.ElementsBorderDefault,
    borderRadius: theme.BorderBaseRadiusMd,
    backgroundColor: getBackgroundColor({ theme, disabled, selected }),
    ':hover': {
      backgroundColor: theme.ElementsSurfaceActionHover,
      borderColor: theme.ElementsBorderActionDefault,
    },
  }),
  ...getTabbedStateStyles(),
}));
