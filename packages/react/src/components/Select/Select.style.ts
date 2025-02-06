import {
  ControlProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  OptionProps,
  StylesConfig,
} from 'react-select';
import { ExtendedTheme, Theme } from '../../types';
import { AnySelectPropsStrict } from './Select.types';

const defaultAnimationSpeed = 0.2;

const getTypographyStyles = ({ theme }: Theme) => ({
  fontFamily: theme.BaselineFontFontFamilyPoppinsRegular,
  fontSize: theme.BaselineFontFontSize16,
  lineHeight: theme.BaselineFontFontSize24,
});

const getBorderStyles = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  state,
  theme,
  hasError,
}: ExtendedTheme<{
  hasError: boolean;
  state: ControlProps<Option, IsMulti, Group>;
}>) => {
  if (hasError) {
    return {
      border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDangerError}`,
    };
  } else if (state.isFocused) {
    return {
      border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault}`,
    };
  }

  return {
    border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderDefault}`,
  };
};

const getOptionStyles = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  { theme }: Theme,
  { isDisabled, isSelected, isFocused }: OptionProps<Option, IsMulti, Group>
) => {
  if (isDisabled) {
    return {
      color: theme.ElementsTextDisabled,
      backgroundColor: theme.ElementsSurfaceDisabled,
    };
  } else if (isSelected) {
    return {
      color: theme.ElementsTextDefaultDark,
      backgroundColor: theme.ElementsSurfaceActionDefault,
    };
  } else if (isFocused) {
    return {
      color: theme.ElementsTextDefaultDark,
      backgroundColor: theme.ElementsSurfaceActionHover,
    };
  }

  return {
    color: theme.ElementsTextDefaultDark,
  };
};

export const getCustomStyles = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  theme,
  hasError,
  $zIndex,
}: Theme & Pick<AnySelectPropsStrict, 'hasError' | '$zIndex'>) => {
  const customStyles: StylesConfig<Option, IsMulti, Group> & {
    listBox: (styles: CSSObjectWithLabel) => CSSObjectWithLabel;
    dropdownIndicator: (
      base: CSSObjectWithLabel,
      props: DropdownIndicatorProps<Option, IsMulti, Group>
    ) => CSSObjectWithLabel;
  } = {
    menu: (styles) => ({
      ...styles,
      zIndex: $zIndex,
      boxShadow: 'none',
      borderRadius: theme.BorderBaseRadiusMd,
    }),
    menuList: (styles) => ({
      ...styles,
      border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault}`,
      borderRadius: theme.BorderBaseRadiusMd,

      '::-webkit-scrollbar': {
        width: theme.BaselineSpacesSpace4,
      },
      '::-webkit-scrollbar-track': {
        borderRadius: theme.BorderBaseRadiusMd,
      },
      '::-webkit-scrollbar-thumb': {
        background: theme.ElementsSurfaceDefaultSecondary,
        borderRadius: theme.BorderBaseRadiusMd,
      },
    }),
    listBox: (styles) => ({
      ...styles,
      marginTop: 0,
      marginBottom: 0,
    }),
    option: (styles, { isDisabled, isFocused, isSelected, ...rest }) => ({
      ...styles,
      ...getTypographyStyles({ theme }),
      padding: `${theme.BaselineSpacesSpace8} ${theme.BaselineSpacesSpace16}`,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      ...getOptionStyles({ theme }, { isDisabled, isSelected, isFocused, ...rest }),

      ':active': {
        ...styles[':active'],
        backgroundColor: theme.ElementsSurfaceActionHover,
      },
      ':hover': {
        ...styles[':hover'],
        color: theme.ElementsTextDefaultDark,
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: theme.ElementsTextDisabled,
    }),
    input: (styles) => ({
      ...styles,
      margin: 0,
      color: theme.ElementsTextDefaultDark,
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      padding: `${theme.BaselineSpacesSpace12} ${theme.BaselineSpacesSpace16} ${theme.BaselineSpacesSpace12} 0`,
      display: 'flex',
      gap: theme.BaselineSpacesSpace16,
    }),
    valueContainer: (styles, { isMulti }) => ({
      ...styles,
      padding: `${theme.BaselineSpacesSpace8} ${theme.BaselineSpacesSpace16}`,
      gap: isMulti ? theme.BaselineSpacesSpace8 : undefined,
    }),
    control: (_, state) => ({
      ...getTypographyStyles({ theme }),
      ...getBorderStyles({ state, theme, hasError }),
      backgroundColor: state.isDisabled ? theme.ElementsSurfaceDisabled : theme.ElementsSurfaceDefault,
      cursor: 'pointer',
      display: 'flex',
      boxShadow: 'none',
      borderRadius: theme.BorderBaseRadiusMd,
      marginBottom: 0,
    }),
    singleValue: (styles, state) => ({
      ...styles,
      color: state.isDisabled ? theme.ElementsTextDisabled : theme.ElementsTextDefaultDark,
    }),
    groupHeading: (styles) => ({
      ...styles,
      textTransform: 'unset',
      ...getTypographyStyles({ theme }),
    }),
    multiValue: (styles, state) => ({
      ...styles,
      backgroundColor: 'transparent',
      border: `${theme.BorderBaseWidthSm} solid ${theme.ElementsBorderActionDefault}`,
      borderColor: state.isDisabled ? theme.ElementsBorderDisabled : theme.ElementsBorderHighlightStrong,
      background: state.isDisabled ? theme.ElementsSurfaceDisabled : theme.ElementsSurfacePage,
      borderRadius: theme.BorderBaseRadiusLg,
      margin: '0',
      padding: `${theme.BaselineSpacesSpace4} 0 ${theme.BaselineSpacesSpace4} ${theme.BaselineSpacesSpace16}`,

      /* multi value generic text */
      '> div': {
        fontSize: theme.BaselineFontFontSize16,
        lineHeight: theme.BaselineFontFontSize24,
        color: !state.isDisabled ? theme.ElementsTextDefaultDark : theme.ElementsTextDisabled,
        padding: '0',
      },
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      cursor: 'pointer',
      marginLeft: theme.BaselineSpacesSpace8,
      marginRight: theme.BaselineSpacesSpace16,
      ':hover': {
        background: 'transparent',
      },
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      fontSize: theme.BaselineFontFontSize14,
      color: theme.ColorBaseGrey100,
    }),
    noOptionsMessage: (styles) => ({
      ...styles,
      textAlign: 'center',
      ...getTypographyStyles({ theme }),
    }),
    clearIndicator: (styles) => ({
      ...styles,
      padding: 0,
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      marginTop: 0,
      marginBottom: 0,
      backgroundColor: theme.ElementsBorderDefault,
    }),
    dropdownIndicator: (styles, state) => ({
      ...styles,
      padding: 0,
      transition: `all ${defaultAnimationSpeed}s ease-in-out`,
      transform: state.isFocused ? 'rotate(180deg)' : undefined,
    }),
  };
  return customStyles;
};
