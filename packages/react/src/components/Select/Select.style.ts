import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExtendedTheme, Theme, Typography } from '@newcross-ui/react';
import {
  ControlProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  OptionProps,
  StylesConfig,
} from 'react-select';
import styled, { css } from 'styled-components';
import { ErrorType } from './Select.types';

const defaultAnimationSpeed = 0.2;

const getTypographyStyles = ({ theme }: Theme) => ({
  fontFamily: theme.TypographyFontFamilyPoppinsRegular,
  fontSize: theme.TypographyFontSize16,
  lineHeight: theme.TypographyLineHeight24,
});

const getPaddingStyles = ({ theme }: Theme) => {
  return {
    padding: `${theme.SpacingBase12} ${theme.SpacingBase16}`,
  };
};

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
      border: `1px solid ${theme.ColorBaseRed100}`,
    };
  } else if (state.isFocused) {
    return {
      border: `1px solid ${theme.ColorBaseMint100}`,
    };
  }

  return {
    border: `1px solid ${theme.ColorBaseGrey200}`,
  };
};

const getOptionStyles = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  { theme }: Theme,
  { isDisabled, isSelected, isFocused }: OptionProps<Option, IsMulti, Group>
) => {
  if (isDisabled) {
    return {
      color: theme.ColorBaseGrey100,
      backgroundColor: theme.ColorBaseGrey500,
    };
  } else if (isSelected) {
    return {
      color: theme.ColorPrimaryGravitas,
      backgroundColor: theme.ColorBaseMint100,
    };
  } else if (isFocused) {
    return {
      color: theme.ColorPrimaryGravitas,
      backgroundColor: theme.ColorBaseMint400,
    };
  }

  return {
    color: theme.ColorPrimaryGravitas,
  };
};

export const getCustomStyles = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  theme,
  hasError,
}: ExtendedTheme<{ hasError: boolean }>) => {
  const customStyles: StylesConfig<Option, IsMulti, Group> & {
    listBox: (styles: CSSObjectWithLabel) => CSSObjectWithLabel;
    dropdownIndicator: (
      base: CSSObjectWithLabel,
      props: DropdownIndicatorProps<Option, IsMulti, Group>
    ) => CSSObjectWithLabel;
  } = {
    menu: (styles) => ({
      ...styles,
      zIndex: '2', // 2 z-index on top of modal
      boxShadow: 'none',
      borderRadius: theme.BorderBaseRadiusMd,
    }),
    menuList: (styles) => ({
      ...styles,
      border: `1px solid ${theme.ColorBaseMint100}`,
      borderRadius: theme.BorderBaseRadiusMd,
    }),
    listBox: (styles) => ({
      ...styles,
      marginTop: 0,
      marginBottom: 0,
    }),
    option: (styles, { isDisabled, isFocused, isSelected, ...rest }) => ({
      ...styles,
      ...getTypographyStyles({ theme }),
      ...getPaddingStyles({ theme }),
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      ...getOptionStyles({ theme }, { isDisabled, isSelected, isFocused, ...rest }),

      ':hover': {
        ...styles[':hover'],
        color: theme.ColorPrimaryGravitas,
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: theme.ColorBaseGrey100,
    }),
    input: (styles) => ({
      ...styles,
      margin: 0,
      paddingBottom: 0,
      paddingTop: 0,
      color: theme.ColorPrimaryGravitas,
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      padding: `${theme.SpacingBase12} ${theme.SpacingBase16} ${theme.SpacingBase12} 0`,
      display: 'flex',
      gap: theme.SpacingBase16,
    }),
    valueContainer: (styles, { isMulti }) => ({
      ...styles,
      ...getPaddingStyles({ theme }),
      gap: isMulti ? theme.SpacingBase8 : undefined,
    }),
    control: (_, state) => ({
      ...getTypographyStyles({ theme }),
      ...getBorderStyles({ state, theme, hasError }),
      backgroundColor: state.isDisabled ? theme.ColorBaseGrey500 : theme.ColorBaseWhite100,
      cursor: 'pointer',
      display: 'flex',
      boxShadow: 'none',
      borderRadius: '6px',
      marginBottom: 0,
    }),
    singleValue: (styles, state) => ({
      ...styles,
      color: state.isDisabled ? theme.ColorBaseGrey100 : theme.ColorPrimaryGravitas,
    }),
    multiValue: (styles) => ({
      ...styles,
      textTransform: 'capitalize',
      backgroundColor: 'transparent',
      border: `1px solid ${theme.ColorBaseMint100}`,

      fontWeight: theme.TypographyFontWeightRegular,
      lineHeight: theme.TypographyLineHeight24,
      borderRadius: theme.BorderBaseRadiusLg,
      paddingLeft: '3px',
      paddingRight: '6px',
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      cursor: 'pointer',
      ':hover': {
        color: theme.ColorBaseRed100,
      },
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      fontSize: theme.TypographyFontSize16,
      color: theme.ColorPrimaryGravitas,
    }),
    noOptionsMessage: (styles) => ({
      ...styles,
      textAlign: 'center',
      ...getTypographyStyles({ theme }),
      ...getPaddingStyles({ theme }),
    }),
    clearIndicator: (styles) => ({
      ...styles,
      padding: 0,
      color: theme.ColorBaseGrey100,
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      marginTop: 0,
      marginBottom: 0,
      backgroundColor: theme.ColorBaseGrey100,
    }),
    dropdownIndicator: (styles, state) => ({
      ...styles,
      padding: 0,
      transition: `all ${defaultAnimationSpeed}s ease-in-out`,
      transform: state.isFocused ? 'rotate(180deg)' : undefined,
      color: theme.ColorPrimaryGravitas,
    }),
  };
  return customStyles;
};

export const Label = styled(Typography)`
  ${({ theme }: Theme) => css`
    display: inline-block;
    color: ${theme.ColorPrimaryGravitas};
    margin-bottom: ${theme.SpacingBase4};
  `};
`;

export const MessageText = styled(Typography)<ErrorType>`
  ${({ theme, hasError }: ExtendedTheme<ErrorType>) => css`
    color: ${theme.TextInputHelperTextColor};
    margin-top: ${theme.TextInputMarginBottom};
    padding-right: ${theme.TextInputHelperTextPaddingHorizontal};
    padding-left: ${theme.TextInputHelperTextPaddingHorizontal};

    ${hasError &&
    css`
      color: ${theme.TextInputErrorColor};
    `}
  `}
`;

export const ChevronIcon = styled(FontAwesomeIcon)`
  ${({ theme }) => css`
    transition: ${`all ${defaultAnimationSpeed}s ease-in-out`};
    color: ${theme.ColorBaseGrey100};
  `};
`;

export const RightIconContainer = styled.div`
  justify-content: center;
`;
