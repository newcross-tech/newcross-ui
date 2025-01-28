import { getHaloValue } from '../../../utils';
import { getScrollbarStyles } from '../../../utils/css/getScrollbarStyles';
import styled from 'styled-components';
import { getCommonStateStyles, getFocusedStyles } from '../TextInput.style';
import { TextAreaPropsStrict } from './TextArea.types';
import Container from '../../Container';

export const Wrapper = styled(Container)<{ fullWidth: boolean }>(({ theme, fullWidth }) => ({
  width: fullWidth ? '100%' : `${+getHaloValue(theme.BaselineSpacesSpace8) * 32.25}rem`,
}));

export const TextArea = styled.textarea<Omit<TextAreaPropsStrict, 'onChangeHandler'> & { hasError: boolean }>(
  (props) => ({
    resize: 'none',
    outline: 'none',
    cursor: 'auto',
    overflowY: 'auto',
    borderRadius: props.theme.BorderBaseRadiusMd,
    paddingTop: props.theme.BaselineSpacesSpace8,
    paddingBottom: props.theme.BaselineSpacesSpace8,
    paddingLeft: props.theme.BaselineSpacesSpace16,
    paddingRight: props.theme.BaselineSpacesSpace16,
    height: `${+getHaloValue(props.theme.BaselineSpacesSpace64) * 2}rem`,
    fontFamily: props.theme.BaselineFontFontFamilyPoppinsRegular,
    border: `${props.theme.BorderBaseWidthSm} solid ${props.theme.ElementsBorderDefault}`,
    ...getScrollbarStyles(props),
    ...getCommonStateStyles(props),
    ...(!props.disabled && {
      '&:focus, &:focus-visible': {
        ...getFocusedStyles(props),
      },
    }),
  })
);
