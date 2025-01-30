import {
  components,
  default as ReactSelect,
  GroupBase,
  createFilter,
  DropdownIndicatorProps,
  ClearIndicatorProps,
  MultiValueRemoveProps,
} from 'react-select';
import {
  faChevronDown,
  faXmark,
  faCircleXmark,
} from '@fortawesome/pro-light-svg-icons';
import useTheme from '../../hooks/useTheme';
import * as Styled from './Select.style';
import { SelectContext, useSelectContext } from './SelectContext';
import { AnySelectPropsStrict, SelectPropsStrict } from './Select.types';
import { OptionalProps } from '../../types';
import Container from '../Container';
import HelperText from '../TextInput/HelperText';
import Label from '../Label';
import Typography from '../Typography';
import Icon from '../Icon';

const getIconColor = ({
  isDisabled,
  hasError,
}: Pick<AnySelectPropsStrict, 'hasError' | 'isDisabled'>) => {
  if (isDisabled) {
    return 'disabled';
  }

  if (hasError) {
    return 'dangerError';
  }

  return 'defaultDark';
};

const MultiValueRemove = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: MultiValueRemoveProps<Option, IsMulti, Group>
) => (
  <components.MultiValueRemove {...props}>
    <Icon
      icon={faXmark}
      variant="p2"
      color={props.selectProps.isDisabled ? 'disabled' : 'defaultDark'}
    />
  </components.MultiValueRemove>
);

const ClearIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>
) => {
  const { hasError } = useSelectContext();
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;

  const iconColor = getIconColor({
    isDisabled: props.selectProps.isDisabled,
    hasError,
  });

  return (
    <Container {...restInnerProps} ref={ref} testID="crossicon">
      <Icon icon={faCircleXmark} variant="p1" color={iconColor} />
    </Container>
  );
};

const DropdownIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>
) => {
  const { hasError } = useSelectContext();

  const iconColor = getIconColor({
    isDisabled: props.isDisabled,
    hasError,
  });

  return (
    <components.DropdownIndicator {...props}>
      <Icon icon={faChevronDown} variant="p1" color={iconColor} />
    </components.DropdownIndicator>
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
> = OptionalProps<
  SelectPropsStrict<Option, IsMulti, Group>,
  'labelVariant' | 'subtitleVariant' | '$zIndex' | 'disabled' | 'hasError'
>;

const normalizeSelectProps = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: SelectProps<Option, IsMulti, Group>
): SelectPropsStrict<Option, IsMulti, Group> => ({
  ...props,
  labelVariant: props.labelVariant ?? 'h3',
  subtitleVariant: props.subtitleVariant ?? 'p2',
  hasError: props.hasError ?? false,
  disabled: props.disabled ?? false,
  $zIndex: props.$zIndex ?? 2,
});

const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  _props: SelectProps<Option, IsMulti, Group>
) => {
  const props = normalizeSelectProps(_props);
  const {
    options,
    placeholder,
    disabled,
    errorText,
    label,
    helperText,
    hasError,
    isMulti,
    labelVariant,
    subtitle,
    subtitleVariant,
    testID,
    $zIndex,
    required,
    ...rest
  } = props;

  const theme = useTheme();

  const getTextColor = (disabled: boolean, hasError: boolean) => {
    if (disabled) return 'disabled';
    if (hasError) return 'dangerError';

    return 'defaultDark';
  };

  return (
    <Container
      testID={
        testID ? `${baseTestId}-component-${testID}` : `${baseTestId}-component`
      }
      flexDirection="column"
      gap="xs"
    >
      {label && (
        <Container gap="xs">
          <Label
            htmlFor={`${baseTestId}-label`}
            variant={labelVariant}
            color={getTextColor(disabled, hasError)}
            testID={`${baseTestId}-label`}
          >
            {label}
          </Label>
          {required && !disabled && (
            <Typography
              testID={`${baseTestId}-label-required-indicator`}
              variant={labelVariant}
              color="dangerError"
            >
              *
            </Typography>
          )}
        </Container>
      )}
      {subtitle && (
        <Label
          variant={subtitleVariant}
          color={getTextColor(disabled, hasError)}
        >
          {subtitle}
        </Label>
      )}
      <SelectContext.Provider value={props}>
        <ReactSelect
          isDisabled={disabled}
          closeMenuOnSelect={!isMulti}
          components={{
            MultiValueRemove,
            ClearIndicator,
            DropdownIndicator,
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
          isClearable
          {...rest}
        />
      </SelectContext.Provider>

      <HelperText
        testID={`${baseTestId}-helper-text`}
        errorText={errorText}
        helperText={helperText}
        disabled={disabled}
      />
    </Container>
  );
};

export default Select;
