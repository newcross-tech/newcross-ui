import styled from 'styled-components';
import { Container } from '../../Container';
import { getCommonStateStyles, getFocusedStyles } from '../Fields.style';
import { TextInputPropsStrict } from './TextInput.types';

export const TextInputContainer = styled(Container)<
  Pick<TextInputPropsStrict, 'search' | 'disabled' | 'isValid' | 'isFocused' | 'hasError' | 'hasBorder'>
>((props) => ({
  backgroundColor: props.theme.ElementsSurfaceDefault,
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
      cursor: props.disabled ? 'default' : 'pointer',
    },
    '&:focus-visible': {
      outline: 'none',
    },
    ...(props.hasBorder && {
      borderRadius: props.search ? props.theme.BorderBaseRadiusRounded : props.theme.BorderBaseRadiusMd,
      ...getCommonStateStyles(props),
      ...(props.isFocused && getFocusedStyles(props)),
    }),
  },
}));

export const RightIconContainer = styled(Container)(() => ({
  cursor: 'pointer',
}));
