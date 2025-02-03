import styled from 'styled-components';
import Container from '../../Container';
import { getCommonStateStyles, getFocusedStyles } from '../utils';
import { ContainerProps } from './TextInput.types';

export const TextInputContainer = styled(Container)<Omit<ContainerProps, 'fullWidth'>>((props) => ({
  borderRadius: props.theme.BorderBaseRadiusMd,
  backgroundColor: props.theme.ElementsSurfaceDefault,
  ...getCommonStateStyles(props),
  ...(props.isFocused && getFocusedStyles(props)),
  ...(props.search && {
    borderRadius: props.theme.BorderBaseRadiusRounded,
  }),
  '& input': {
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    outlineWidth: 0,
    fontFamily: props.theme.BaselineFontFontFamilyPoppinsRegular,
    fontSize: props.theme.TypographyFontSize14,
    lineHeight: props.theme.TypographyLineHeight20,
    padding: `${props.theme.BaselineSpacesSpace12} 0`,
    ...(props.search && {
      paddingRight: props.theme.BaselineSpacesSpace12,
      paddingLeft: props.theme.BaselineSpacesSpace12,
    }),
    [`+ ${RightIconContainer}`]: {
      ...(props.disabled ? {} : { cursor: 'pointer' }),
    },
    '&:focus-visible': {
      outline: 'none',
    },
  },
}));

export const RightIconContainer = styled(Container)(() => ({
  cursor: 'pointer',
}));
