import { Theme } from '../../types/Theme';
import { TypographyProps } from '../Typography';
import { DropdownProps } from './Dropdown';

export type DropdownValueType = undefined | string | string[];

type ErrorProps = {
  hasError: boolean;
};

export type HeaderContainerProps = {
  disabled: boolean;
  isContentShown: boolean;
} & ErrorProps;

export type HeaderValueProps = TypographyProps & {
  hasChosen: boolean;
};

export type OptionProps = TypographyProps & {
  isMulti: boolean;
};

export type DropdownAnimatedStyleArgs = {
  isFocused: boolean;
} & ErrorProps &
  Theme;

export type DropdownValueProps = {
  value: DropdownValueType;
  onMultiSelect: (isChecked: boolean, optionValue: string) => void;
} & Pick<DropdownProps, 'placeholder'>;
