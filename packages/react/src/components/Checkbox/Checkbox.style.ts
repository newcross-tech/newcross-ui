import styled, { css } from 'styled-components';
import { Theme } from '../../types';
import { CheckboxPropsStrict } from './Checkbox.types';
import Container from '../Container';

const getBackgroundColorHoverStyles = ({
  theme,
  disabled,
  hasError,
}: Theme & Pick<CheckboxPropsStrict, 'disabled' | 'hasError'>) => {
  if (disabled) return;

  return !hasError ? theme.ElementsSurfaceActionHover : theme.ElementsSurfaceDanger;
};

const getColorHoverStyles = ({
  theme,
  disabled,
  hasError,
}: Theme & Pick<CheckboxPropsStrict, 'disabled' | 'hasError'>) => {
  if (disabled) return;

  return !hasError ? theme.ElementsIconActionDefault : theme.ElementsIconDangerError;
};

export const Checkbox = styled(Container)<CheckboxPropsStrict>((props) => [
  {
    cursor: !props.disabled ? 'pointer' : 'inherit',
    ':hover': {
      [`${Box}`]: {
        backgroundColor: getBackgroundColorHoverStyles(props),
        color: getColorHoverStyles(props),
      },
    },
  },
]);

const getHasErrorStyles = ({ theme, checked, type }: Theme & Pick<CheckboxPropsStrict, 'checked' | 'type'>) =>
  css({
    color: theme.ElementsIconActionDanger,
    borderColor: theme.ElementsBorderDangerError,
    backgroundColor: checked ? theme.ElementsSurfaceActionDanger : undefined,

    ...(type === 'indeterminate' && {
      color: theme.ElementsIconActionDanger,
      backgroundColor: theme.ElementsSurfaceActionDanger,
    }),
  });

const getDisabledStyles = ({ theme }: Theme) =>
  css({
    color: theme.ElementsIconDisabled,
    backgroundColor: theme.ElementsSurfaceDisabled,
    borderColor: theme.ElementsBorderDisabled,
  });

const getSelectedStyled = ({ theme }: Theme & Pick<CheckboxPropsStrict, 'type'>) =>
  css({
    backgroundColor: theme.ElementsSurfaceActionDefault,
  });

export const Box = styled(Container)<Pick<CheckboxPropsStrict, 'hasError' | 'disabled' | 'checked' | 'type'>>(
  (props) => [
    {
      height: props.theme.BaselineSpacesSpace24,
      minWidth: props.theme.BaselineSpacesSpace24,
      border: `solid ${props.theme.BorderBaseWidthSm}`,
      borderRadius: props.theme.BorderBaseRadiusSm,
      color: props.theme.ElementsIconDefaultDark,
      backgroundColor: props.theme.ElementsSurfaceDefault,
      transition: '0.2s ease-in-out',
    },
    !props.hasError && props.checked && getSelectedStyled(props),
    props.hasError && getHasErrorStyles(props),
    props.disabled && getDisabledStyles(props),
  ]
);
