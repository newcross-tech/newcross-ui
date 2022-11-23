import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons/faChevronDown';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { useSpring } from '@react-spring/web';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { onSpacePressTrigger } from '../../../utils/onSpacePressTrigger';
import { useOutsideDetector } from '../../hooks/useOutsideDetector';
import useTheme from '../../hooks/useTheme';
import * as TextStyled from '../TextInput/TextInput.style';
import { TypographyVariant } from '../Typography';
import * as Styled from './Dropdown.style';
import { Icon } from './Dropdown.style';
import { DropdownValue } from './Dropdown.types';

export type DropdownProps = {
  /**
   * Used to set the placeholder text in the dropdown.
   */
  placeholder?: string;
  /**
   * The value of the dropdown.
   */
  selectedValue?: string;
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
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
};

const baseTestId = 'dropdown';

const Dropdown = ({
  options,
  placeholder,
  selectedValue,
  disabled,
  errorText,
  label,
  testID,
}: DropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<DropdownValue>(selectedValue);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideDetector(containerRef, () => setIsFocused(false));

  const theme = useTheme();
  const hasError = !!errorText;

  useEffect(() => {
    onSetValue(selectedValue);
  }, [selectedValue]);

  const onClear = (event: SyntheticEvent) => {
    event.stopPropagation();
    setValue(undefined);
    setIsFocused(false);
  };

  const onSetValue = (value?: string) => {
    if (!value) {
      setValue('');
      return;
    }

    setValue(value);
  };

  const onSelect = (value: string) => {
    onSetValue(value);
    setIsFocused(false);
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
              data-testid={
                value
                  ? `${baseTestId}-value-${testID}`
                  : `${baseTestId}-placeholder-${testID}`
              }
              variant={TypographyVariant.paragraph1}
              numberOfLines={1}
              hasChosen={!!value}
            >
              {value || placeholder}
            </Styled.HeaderValue>
          </Styled.HeaderLabel>
          <Styled.IconContainer>
            {!disabled && value && (
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
          </Styled.IconContainer>
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
          {options.map((i, index) => (
            <Styled.Option
              key={`${baseTestId}-option-${index}`}
              variant={TypographyVariant.paragraph1}
              onClick={() => onSelect(i)}
              onKeyPress={(event: React.KeyboardEvent<HTMLElement>) =>
                onSpacePressTrigger(event, () => onSelect(i))
              }
              tabIndex={0}
            >
              {i}
            </Styled.Option>
          ))}
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
