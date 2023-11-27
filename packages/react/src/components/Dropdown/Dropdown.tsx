import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/pro-regular-svg-icons/faXmark';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { useSpring } from '@react-spring/web';
import { useRef, useState } from 'react';
import { useKeypressListener } from '../../hooks/useKeypressListener';
import { useOutsideDetector } from '../../hooks/useOutsideDetector';
import useTheme from '../../hooks/useTheme';
import { TestProp } from '../../types';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import Checkbox from '../Checkbox';
import * as TextStyled from '../TextInput/TextInput.style';
import * as Styled from './Dropdown.style';
import { MultiProps, SingleProps } from './Dropdown.types';
import DropdownValue from './DropdownValue';
import { getHeaderValueId } from './utils/getHeaderValueId';

type CommonProps = {
  /**
   * Used to set the placeholder text in the dropdown.
   */
  placeholder?: string;
  /**
   * The selectable values
   */
  options: string[];
  /**
   * Adds error text.
   */
  errorText?: string;
  /**
   * Gives dropdown a label.
   */
  label?: string;
  /**
   * Detremines whether text is clearable.
   */
  isClearable?: boolean;
  /**
   * Detremines whether text input is disabled.
   */
  disabled?: boolean;
} & TestProp;

export const baseTestId = 'dropdown';

export type DropdownProps = (SingleProps | MultiProps) & CommonProps;

/**
 * @deprecated since version 2.1.2
 */
const DropdownWrapper = (props: DropdownProps) => (
  <Dropdown
    {...props}
    key={`${props.selectedValue || 'dropdown-no-selectedValue'}`}
  />
);

const Dropdown = ({
  options,
  placeholder,
  selectedValue,
  disabled,
  variant = 'single',
  isClearable = true,
  errorText,
  label,
  testID,
  ...rest
}: DropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(selectedValue);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useKeypressListener('Escape', () => setIsFocused(false));
  useOutsideDetector(containerRef, () => setIsFocused(false));

  const theme = useTheme();
  const hasError = !!errorText;
  const isMulti = variant === 'multi';
  const showClearIcon = isClearable && !disabled && value;

  const onChangeHandler = (value?: string | string[]) => {
    if (isMulti) {
      const multiProps = rest as MultiProps;
      multiProps.onChange && multiProps.onChange(value as string[]);
    } else {
      const singleProps = rest as SingleProps;
      singleProps.onChange && singleProps.onChange(value as string);
    }
  };

  const onClear = () => {
    setValue(undefined);
    onChangeHandler(undefined);
    setIsFocused(false);
  };

  const onSingleSelect = (value: string) => {
    setValue(value);
    onChangeHandler(value);
    setIsFocused(false);
  };

  const onMultiSelect = (isChecked: boolean, optionValue: string) => {
    let updatedList: string[] = [];

    if (!value) {
      setValue([optionValue]);
      onChangeHandler([optionValue]);
      return;
    }

    if (isChecked) {
      updatedList = (value as string[]).filter((i) => i !== optionValue);
      setValue(updatedList);
      onChangeHandler(updatedList);
    } else {
      setValue([...value, optionValue]);
      onChangeHandler([...value, optionValue]);
    }
  };

  const toggleFocus = () => {
    if (disabled) return;
    setIsFocused((prevState) => !prevState);
  };

  const springProps = useSpring({
    ...Styled.getAnimatedStyles({
      theme,
      isFocused,
    }),
  });

  return (
    <Styled.Container ref={containerRef}>
      {label && (
        <Styled.Label variant={'subtitle1'} testID={`${baseTestId}-label`}>
          {label}
        </Styled.Label>
      )}
      <Styled.HeaderContainer
        tabIndex={!disabled ? 0 : -1}
        onKeyPress={(event: React.KeyboardEvent<HTMLElement>) =>
          onSpacePressTrigger(event, toggleFocus)
        }
        data-testid={`${baseTestId}-header-container-${testID}`}
        onClick={toggleFocus}
        isContentShown={isFocused}
        disabled={!!disabled}
        $hasError={hasError}
      >
        <Styled.HeaderContent>
          <Styled.HeaderLabel>
            <Styled.HeaderValue
              data-testid={`${getHeaderValueId(value)}-${testID}`}
              variant={'paragraph1'}
              numberOfLines={1}
              hasChosen={!!value}
            >
              <DropdownValue
                placeholder={placeholder}
                value={value}
                onMultiSelect={onMultiSelect}
              />
            </Styled.HeaderValue>
          </Styled.HeaderLabel>
          <Styled.IndicatorsContainer>
            {showClearIcon && (
              <>
                <div
                  data-testid={`${baseTestId}-clear-icon-container`}
                  onClick={onClear}
                >
                  <Styled.CloseIcon icon={faXmark} />
                </div>
                <Styled.Divider />
              </>
            )}
            <Styled.Icon
              icon={faChevronDown}
              rotation={(isFocused ? 180 : 0) as RotateProp}
            />
          </Styled.IndicatorsContainer>
        </Styled.HeaderContent>
      </Styled.HeaderContainer>
      <Styled.BodyContainer>
        <Styled.BodyContent
          style={springProps}
          ref={ref}
          $hasError={hasError}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          data-testid={
            isFocused
              ? `${baseTestId}-body-container-expanded-${testID}`
              : `${baseTestId}-body-container-${testID}`
          }
        >
          {options.map((i, index) => {
            const isChecked = isMulti ? !!value?.includes(i) : false;
            const onOptionSelect = () =>
              isMulti ? onMultiSelect(isChecked, i) : onSingleSelect(i);
            return (
              <div key={`${baseTestId}-option-${index}`}>
                <Styled.Option
                  isMulti={isMulti}
                  variant={'paragraph1'}
                  onClick={onOptionSelect}
                  onKeyPress={(event: React.KeyboardEvent<HTMLElement>) =>
                    onSpacePressTrigger(event, onOptionSelect)
                  }
                  tabIndex={0}
                >
                  {isMulti ? (
                    <Checkbox
                      testID={`${baseTestId}-checkbox-${i}`}
                      label={i}
                      checked={isChecked}
                      allowTab={false}
                    />
                  ) : (
                    i
                  )}
                </Styled.Option>
              </div>
            );
          })}
        </Styled.BodyContent>
      </Styled.BodyContainer>
      {errorText && (
        <TextStyled.MessageText
          variant={'paragraph2'}
          testID={`${baseTestId}-error-text-${testID}`}
          hasError={true}
        >
          {errorText}
        </TextStyled.MessageText>
      )}
    </Styled.Container>
  );
};

export default DropdownWrapper;
