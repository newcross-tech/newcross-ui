import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react';
import Typography, { TypographyVariant } from '../Typography';
import * as Styled from './TextInput.style';
import { SearchIcon } from './TextInput.style';
import { faSearch } from '@fortawesome/pro-light-svg-icons/faSearch';
import { faCheck } from '@fortawesome/pro-solid-svg-icons/faCheck';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { faEye } from '@fortawesome/pro-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/pro-solid-svg-icons/faEyeSlash';

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
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
};

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
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  const triggerFocusState = (isFocus: boolean) => {
    setIsFocused(isFocus);
  };

  const hasError = !!errorText;

  const isPasswordType = type === 'password';

  return (
    <>
      {label && (
        <Typography
          variant={TypographyVariant.heading5}
          testID={`${baseTestId}-label`}
        >
          {label}
        </Typography>
      )}
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
          ref={ref}
          type={passwordVisibility && isPasswordType ? 'password' : 'text'}
          value={value}
          onClick={() => triggerFocusState(true)}
          onFocus={() => triggerFocusState(true)}
          onBlur={() => triggerFocusState(false)}
          onChange={onChangeHandler}
          disabled={disabled}
          data-testid={`${baseTestId}-component-${testID}`}
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
      {(helperText || errorText) && (
        <Styled.MessageText
          variant={TypographyVariant.paragraph3}
          testID={`${baseTestId}-message-text`}
          hasError={hasError}
        >
          {errorText || helperText}
        </Styled.MessageText>
      )}
    </>
  );
};

export default forwardRef(TextInput);
