import { faSearch } from '@fortawesome/pro-light-svg-icons/faSearch';
import { faCheck } from '@fortawesome/pro-solid-svg-icons/faCheck';
import { faEye } from '@fortawesome/pro-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/pro-solid-svg-icons/faEyeSlash';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react';
import { TestProp } from '../../types/TestProp';
import Label from '../Label/Label';
import { TextArea } from './TextArea';
import * as Styled from './TextInput.style';
import { SearchIcon } from './TextInput.style';

export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /**
   * Gives text input a label
   */
  label?: string;
  /**
   * Adds helper text
   */
  helperText?: string;
  /**
   * Adds error text
   */
  errorText?: string;
  /**
   * Updates text in input box
   */
  onChange: (newState: string) => void;
  /**
   * Shows check mark when validation is met
   */
  isValid?: boolean;
  /**
   * If true alters text input to search bar styles
   */
  search?: boolean;
  /**
   * triggers the on press of the close icon
   */
  onClose?: VoidFunction;
} & TestProp;

const baseTestId = 'text-input';

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  {
    value,
    type,
    label,
    onChange,
    disabled,
    helperText,
    errorText,
    maxLength,
    placeholder,
    isValid,
    search,
    onClose,
    testID,
    ...otherProps
  },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange && onChange(event.target.value);
  };

  const triggerFocusState = (isFocus: boolean) => {
    setIsFocused(isFocus);
  };

  const hasError = !!errorText;

  const isPasswordType = type === 'password';
  const isTextArea = type === 'textarea';
  const inputId = `${baseTestId}-component-${testID}`;

  return (
    <Styled.Wrapper>
      {label && (
        <Label
          htmlFor={inputId}
          variant={'heading5'}
          testID={`${baseTestId}-label`}
        >
          {label}
        </Label>
      )}

      {isTextArea ? (
        <TextArea
          placeholder={placeholder}
          disabled={disabled}
          hasError={hasError}
          maxLength={maxLength}
          value={value}
          length={typeof value === 'string' ? value.length : 0}
          onChangeHandler={onChangeHandler}
        />
      ) : (
        <Styled.Container
          isFocused={isFocused}
          hasError={hasError}
          search={search}
          disabled={disabled}
          data-testid={
            isFocused
              ? `${baseTestId}-container-focused`
              : `${baseTestId}-container`
          }
        >
          {search && (
            <Styled.LeftIconContainer data-testid={`${baseTestId}-search-icon`}>
              <SearchIcon icon={faSearch} />
            </Styled.LeftIconContainer>
          )}
          <input
            id={inputId}
            ref={ref}
            type={passwordVisibility && isPasswordType ? 'password' : 'text'}
            value={value}
            onClick={() => triggerFocusState(true)}
            onFocus={() => triggerFocusState(true)}
            onBlur={() => triggerFocusState(false)}
            onChange={onChangeHandler}
            disabled={disabled}
            data-testid={inputId}
            placeholder={placeholder}
            {...otherProps}
          />
          {isPasswordType && (
            <Styled.RightIconContainer
              data-testid={`${baseTestId}-eye-icon`}
              onClick={() =>
                !disabled && setPasswordVisibility(!passwordVisibility)
              }
            >
              <Styled.PasswordIcon
                data-testid={
                  !passwordVisibility
                    ? `${baseTestId}-eye-slash`
                    : `${baseTestId}-eye`
                }
                icon={!passwordVisibility ? faEyeSlash : faEye}
              />
            </Styled.RightIconContainer>
          )}
          {isValid && (
            <Styled.RightIconContainer
              data-testid={`${baseTestId}-validation-check`}
            >
              <Styled.ValidIcon icon={faCheck} />
            </Styled.RightIconContainer>
          )}
          {!!search && !!value && onClose && (
            <Styled.RightIconContainer
              onClick={onClose}
              data-testid={`${baseTestId}-search-close-icon`}
            >
              <Styled.CloseIcon icon={faXmark} />
            </Styled.RightIconContainer>
          )}
        </Styled.Container>
      )}

      {(helperText || errorText) && (
        <Styled.MessageText
          variant={'paragraph3'}
          testID={`${baseTestId}-message-text`}
          hasError={hasError}
        >
          {errorText || helperText}
        </Styled.MessageText>
      )}
    </Styled.Wrapper>
  );
};

export default forwardRef(TextInput);
