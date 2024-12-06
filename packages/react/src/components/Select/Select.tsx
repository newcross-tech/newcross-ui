import { faChevronDown } from '@fortawesome/pro-light-svg-icons/faChevronDown';
import { faXmark } from '@fortawesome/pro-light-svg-icons/faXmark';
import { FunctionComponent, ReactElement, useMemo } from 'react';
import {
  components,
  default as ReactSelect,
  GroupBase,
  createFilter,
  Props,
  DropdownIndicatorProps,
  ClearIndicatorProps,
  MenuListProps,
  MultiValueRemoveProps,
} from 'react-select';
import useTheme from '../../hooks/useTheme';
import * as Styled from './Select.style';
import { SelectContext, useSelectContext } from './SelectContext';
import { TypographyVariant } from '../Typography';
import { TestProp } from '../../types';

const MultiValueRemove = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: MultiValueRemoveProps<Option, IsMulti, Group>
) => {
  return (
    <components.MultiValueRemove {...props}>
      <Styled.PillCloseIcon icon={faXmark} />
    </components.MultiValueRemove>
  );
};

const CrossIcon: FunctionComponent = () => (
  <Styled.RightIconContainer>
    <Styled.XMarkIcon icon={faXmark} />
  </Styled.RightIconContainer>
);

const DownChevron = ({ isDisabled }: { isDisabled: boolean }) => (
  <Styled.RightIconContainer>
    <Styled.ChevronIcon icon={faChevronDown} isDisabled={isDisabled} />
  </Styled.RightIconContainer>
);

const ClearIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>
) => {
  const {
    children = <CrossIcon />,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref} data-testid="crossicon">
      {children}
    </div>
  );
};

const DropdownIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>
) => (
  <components.DropdownIndicator {...props}>
    <DownChevron isDisabled={props.isDisabled} />
  </components.DropdownIndicator>
);

const MenuList = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: React.PropsWithChildren<MenuListProps<Option, IsMulti, Group>>
) => {
  const { children, ...rest } = props;
  const { id } = useSelectContext();
  const menuListId = `react-select-menu-list${id ? `-${id}` : ''}`;

  return (
    <components.MenuList {...rest}>
      <span id={menuListId}>{children}</span>
    </components.MenuList>
  );
};

const baseTestId = 'select';

/**
 * Select component with Newcross branding built upon [react-select library v5.7.7](https://react-select.com/home)
 */
export type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & {
  /**
   * Gives select a label
   */
  label?: string;
  /**
   * Adds helper text
   */
  helperText?: string | ReactElement;
  /**
   * Adds error text
   */
  errorText?: string;
  /**
   * Controls error styles
   */
  hasError?: boolean;
  /**
   * Adds id to select menu-list which is the parent div of the options
   */
  id: string;
  /**
   * Adds placeholder text
   */
  placeholder?: string;
  /**
   * Show disabled state
   */
  disabled?: boolean;
  /**
   * Applies the theme typography styles to the label
   */
  labelVariant?: TypographyVariant;
  /**
   * Adds subtitle text
   */
  subtitle?: string;
  /**
   * Applies the theme typography styles to the subtitle
   */
  subtitleVariant?: TypographyVariant;
  /**
   * Set custom z-index for the menu
   */
  $zIndex?: number;
} & TestProp;

const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  options,
  placeholder,
  disabled,
  errorText,
  label,
  helperText,
  hasError,
  isMulti,
  labelVariant = 'subtitle1',
  subtitle,
  subtitleVariant = 'subtitle2',
  testID,
  $zIndex = 2,
  ...rest
}: SelectProps<Option, IsMulti, Group>) => {
  const theme = useTheme();

  const message = useMemo(() => {
    if (errorText) {
      return (
        <Styled.MessageText
          variant="paragraph2"
          testID={`${baseTestId}-error-text`}
          hasError={!!hasError}
        >
          {errorText}
        </Styled.MessageText>
      );
    }
    if (typeof helperText === 'string') {
      return (
        <Styled.MessageText
          variant="paragraph2"
          testID={`${baseTestId}-message-text`}
          hasError={!!hasError}
        >
          {helperText}
        </Styled.MessageText>
      );
    }
    return helperText;
  }, [errorText, helperText, hasError]);

  return (
    <div
      data-testid={
        testID ? `${baseTestId}-component-${testID}` : `${baseTestId}-component`
      }
    >
      {label && (
        <Styled.Label variant={labelVariant} testID={`${baseTestId}-label`}>
          {label}
        </Styled.Label>
      )}
      {subtitle && (
        <Styled.Label variant={subtitleVariant} color="secondary">
          {subtitle}
        </Styled.Label>
      )}
      <SelectContext.Provider value={{ id: rest?.id }}>
        <ReactSelect
          isDisabled={disabled}
          closeMenuOnSelect={!isMulti}
          components={{
            MultiValueRemove,
            ClearIndicator,
            DropdownIndicator,
            MenuList,
          }}
          styles={Styled.getCustomStyles<Option, IsMulti, Group>({
            theme,
            hasError: !!errorText,
            $zIndex,
          })}
          placeholder={placeholder}
          isMulti={isMulti}
          options={options}
          filterOption={createFilter({ ignoreAccents: false })} // required for performance reasons!
          {...rest}
        />
      </SelectContext.Provider>

      {(errorText || helperText) && message}
    </div>
  );
};

export default Select;
