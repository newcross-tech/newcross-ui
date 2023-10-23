import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { FunctionComponent } from 'react';
import {
  components,
  default as ReactSelect,
  GroupBase,
  createFilter,
} from 'react-select';
import { useTheme } from '@newcross-ui/react';
import * as Styled from './Select.style';
import { SelectContext, useSelectContext } from './SelectContext';
import { SelectProps } from './Select.types';

const CrossIcon: FunctionComponent = () => (
  <Styled.RightIconContainer>
    <Styled.ChevronIcon icon={faXmark} />
  </Styled.RightIconContainer>
);

const DownChevron: FunctionComponent = () => (
  <Styled.RightIconContainer>
    <Styled.ChevronIcon icon={faChevronDown} />
  </Styled.RightIconContainer>
);

const baseTestId = 'select';

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
  ...rest
}: SelectProps<Option, IsMulti, Group>) => {
  const theme = useTheme();

  return (
    <div data-testid="select-component">
      {label && (
        <Styled.Label variant="subtitle1" testID={`${baseTestId}-label`}>
          {label}
        </Styled.Label>
      )}
      <SelectContext.Provider value={{ id: rest?.id }}>
        <ReactSelect
          menuIsOpen
          isDisabled={disabled}
          closeMenuOnSelect={!isMulti}
          components={{
            ClearIndicator: (props) => {
              const {
                children = <CrossIcon />,
                innerProps: { ref, ...restInnerProps },
              } = props;
              return (
                <div {...restInnerProps} ref={ref} data-testid="crossicon">
                  {children}
                </div>
              );
            },
            DropdownIndicator: (props) => (
              <components.DropdownIndicator {...props}>
                <DownChevron />
              </components.DropdownIndicator>
            ),
            MenuList: (props) => {
              const { children, ...rest } = props;
              const { id } = useSelectContext();
              const menuListId = `react-select-menu-list${id ? `-${id}` : ''}`;

              return (
                <components.MenuList {...rest}>
                  <span id={menuListId}>{children}</span>
                </components.MenuList>
              );
            },
          }}
          styles={Styled.getCustomStyles<Option, IsMulti, Group>({
            theme,
            hasError: !!errorText,
          })}
          placeholder={placeholder}
          isMulti={isMulti}
          options={options}
          filterOption={createFilter({ ignoreAccents: false })} // required for performance reasons!
          {...rest}
        />
      </SelectContext.Provider>

      {(helperText || errorText) && (
        <Styled.MessageText
          variant={'paragraph3'}
          testID={
            hasError ? `${baseTestId}-error-text` : `${baseTestId}-message-text`
          }
          hasError={!!hasError}
        >
          {errorText || helperText}
        </Styled.MessageText>
      )}
    </div>
  );
};

export default Select;
