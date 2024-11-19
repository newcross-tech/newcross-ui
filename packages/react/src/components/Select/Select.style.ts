import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ControlProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  OptionProps,
  StylesConfig,
} from 'react-select';
import styled, { css } from 'styled-components';
import { ExtendedTheme, Theme } from '../../types';
import Typography from '../Typography';
import { ErrorType } from './Select.types';

const defaultAnimationSpeed = 0.2;

const getTypographyStyles = ({ theme }: Theme) => ({
  fontFamily: theme.TextInputFontFamily,
  fontSize: theme.TextInputFontSize,
  lineHeight: theme.TextInputLineHeight,
});

const getPaddingStyles = ({ theme }: Theme) => {
  return {
    padding: `${theme.TextInputPaddingVertical} ${theme.TextInputPaddingHorizontal}`,
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
  $zIndex,
}: ExtendedTheme<{ hasError: boolean; $zIndex: number }>) => {
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
      border: `1px solid ${theme.ColorBaseMint100}`,
      borderRadius: theme.BorderBaseRadiusMd,

      '::-webkit-scrollbar': {
        width: theme.SpacingBase4,
      },
      '::-webkit-scrollbar-track': {
        borderRadius: theme.BorderBaseRadiusMd,
      },
      '::-webkit-scrollbar-thumb': {
        background: theme.ColorNeutralGrey300,
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
      padding: `${theme.SpacingBase8} ${theme.SpacingBase16}`,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      ...getOptionStyles({ theme }, { isDisabled, isSelected, isFocused, ...rest }),

      ':active': {
        ...styles[':active'],
        backgroundColor: theme.ColorBaseMint400,
      },
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
      paddingTop: 0,
      paddingBottom: 0,
      gap: isMulti ? theme.SpacingBase8 : undefined,
    }),
    control: (_, state) => ({
      ...getTypographyStyles({ theme }),
      ...getBorderStyles({ state, theme, hasError }),
      backgroundColor: state.isDisabled ? theme.ColorBaseGrey500 : theme.ColorBaseWhite100,
      cursor: 'pointer',
      display: 'flex',
      boxShadow: 'none',
      borderRadius: theme.BorderBaseRadiusMd,
      marginBottom: 0,
    }),
    singleValue: (styles, state) => ({
      ...styles,
      ...getPaddingStyles({ theme }),
      color: state.isDisabled ? theme.ColorBaseGrey100 : theme.ColorPrimaryGravitas,
    }),
    groupHeading: (styles) => ({
      ...styles,
      textTransform: 'unset',
      ...getTypographyStyles({ theme }),
    }),
    multiValue: (styles, state) => ({
      ...styles,
      backgroundColor: 'transparent',
      border: `1px solid ${theme.ColorBaseMint100}`,
      borderColor: state.isDisabled ? theme.ColorBaseGrey200 : theme.ColorBaseMint100,
      color: state.isDisabled ? theme.ColorBaseGrey100 : theme.ColorPrimaryGravitas,
      borderRadius: theme.BorderBaseRadiusLg,
      margin: '0',
      padding: `${theme.SpacingBase4} 0 ${theme.SpacingBase4} ${theme.SpacingBase16}`,

      /* multi value generic text */
      '> div': {
        fontSize: theme.TypographyFontSize16,
        lineHeight: theme.TypographyLineHeight24,
        color: !state.isDisabled ? theme.ColorPrimaryGravitas : theme.ColorBaseGrey100,
        padding: '0',
      },
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      cursor: 'pointer',
      marginLeft: theme.SpacingBase8,
      marginRight: theme.SpacingBase16,
      ':hover': {
        background: 'transparent',
      },

      ' > svg': {
        color: theme.ColorBaseGrey100,
      },
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      fontSize: theme.TypographyFontSize14,
      color: theme.ColorBaseGrey100,
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
      backgroundColor: theme.ColorBaseGrey100,
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      marginTop: 0,
      marginBottom: 0,
      backgroundColor: theme.ColorBaseGrey200,
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

export const PillCloseIcon = styled(FontAwesomeIcon)`
  ${({ theme }) => css`
    color: ${theme.ColorBaseGrey100};
    width: ${theme.SpacingBase16};
    height: ${theme.SpacingBase16};
  `};
`;

export const XMarkIcon = styled(FontAwesomeIcon)`
  ${({ theme }) => css`
    color: ${theme.ColorBaseGrey100};
    width: ${theme.SpacingBase16};
    height: ${theme.SpacingBase16};
  `};
`;

export const ChevronIcon = styled(FontAwesomeIcon)`
  ${({ theme, isDisabled }: ExtendedTheme<{ isDisabled: boolean }>) => css`
    transition: ${`all ${defaultAnimationSpeed}s ease-in-out`};
    width: ${theme.SpacingBase16};
    height: ${theme.SpacingBase16};
    color: ${!isDisabled ? theme.ColorPrimaryGravitas : theme.ColorBaseGrey100};
  `};
`;

export const RightIconContainer = styled.div`
  justify-content: center;
`;
