import styled from 'styled-components';
import { getHaloValue } from '../../../utils';
import { getScrollbarStyles } from '../../../utils/css/getScrollbarStyles';
import { Container } from '../../Container';
import { getCommonStateStyles, getFocusedStyles } from '../Fields.style';
import { TextAreaPropsStrict } from './TextArea.types';

export const Wrapper = styled(Container)<{ fullWidth: boolean }>(({ theme }) => ({
  // Calculate minWidth: BaselineSpacesSpace64 (4rem) * 4 = 16rem
  minWidth: `${+getHaloValue(theme.BaselineSpacesSpace64) * 4}rem`,
}));

export const TextArea = styled.textarea<Pick<TextAreaPropsStrict, 'disabled' | 'isValid' | 'hasError' | 'length'>>(
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
