import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { useSpring } from '@react-spring/web';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { onSpacePressTrigger } from '../../../utils/onSpacePressTrigger';
import { useKeypressListener } from '../../hooks/useKeypressListener';
import { useOutsideDetector } from '../../hooks/useOutsideDetector';
import useTheme from '../../hooks/useTheme';
import Checkbox from '../Checkbox';
import * as TextStyled from '../TextInput/TextInput.style';
import { TypographyVariant } from '../Typography';
import * as Styled from './Dropdown.style';
import { Icon } from './Dropdown.style';
import { DropdownValueType } from './Dropdown.types';
import DropdownValue from './DropdownValue';
import { getHeaderValueId } from './utils/getHeaderValueId';

export type DropdownProps = {
  /**
   * Used to set the placeholder text in the dropdown.
   */
  placeholder?: string;
  /**
   * The value of the dropdown.
   */
  selectedValue?: DropdownValueType;
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
   * Detremines whether text input is disabled.
   */
  disabled?: boolean;
  /**
   * Detremines whether Multi or Single select dropdown
   */
  isMulti?: boolean;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (value: DropdownValueType) => void;
};

export const baseTestId = 'dropdown';

const Dropdown = ({
  options,
  placeholder,
  selectedValue,
  disabled,
  errorText,
  label,
  testID,
  isMulti = false,
  onChange,
}: DropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<DropdownValueType>(selectedValue);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useKeypressListener('Escape', () => setIsFocused(false));
  useOutsideDetector(containerRef, () => setIsFocused(false));

  const theme = useTheme();
  const hasError = !!errorText;

  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  const onClear = (event: SyntheticEvent) => {
    event.stopPropagation();
    setValue(undefined);
    setIsFocused(false);
  };

  const onSingleSelect = (value?: string) => {
    setValue(value);
    setIsFocused(false);
  };

  const onMultiSelect = (isChecked: boolean, optionValue: string) => {
    let updatedList: string[] = [];

    if (!value) {
      setValue([optionValue]);
      return;
    }

    if (isChecked) {
      updatedList = (value as string[]).filter((i) => i !== optionValue);
      setValue(updatedList);
    } else {
      setValue([...value, optionValue]);
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
      hasError,
    }),
  });

  const showClearIcon = !disabled && value;

  return (
    <Styled.Container ref={containerRef}>
      {label && (
        <Styled.Label
          variant={TypographyVariant.paragraph2}
          testID={`${baseTestId}-label`}
        >
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
        hasError={hasError}
      >
        <Styled.HeaderContent>
          <Styled.HeaderLabel>
            <Styled.HeaderValue
              data-testid={`${getHeaderValueId(value)}-${testID}`}
              variant={TypographyVariant.paragraph1}
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
            <Icon
              icon={faChevronDown}
              rotation={(isFocused ? 180 : 0) as RotateProp}
            />
          </Styled.IndicatorsContainer>
        </Styled.HeaderContent>
      </Styled.HeaderContainer>
      <Styled.BodyContainer>
        <Styled.BodyContent
          ref={ref}
          style={springProps}
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
                  isMulti={!!isMulti}
                  variant={TypographyVariant.paragraph1}
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
          variant={TypographyVariant.paragraph2}
          testID={`${baseTestId}-error-text-${testID}`}
          hasError={true}
        >
          {errorText}
        </TextStyled.MessageText>
      )}
    </Styled.Container>
  );
};

export default Dropdown;
