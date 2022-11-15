import { Theme } from '../../types/Theme';
import { TypographyProps } from '../Typography';

export type DropdownValue = undefined | string;

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

export type DropdownAnimatedStyleArgs = {
  isFocused: boolean;
} & ErrorProps &
  Theme;
