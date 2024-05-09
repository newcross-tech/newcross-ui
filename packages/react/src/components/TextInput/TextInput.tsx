import { faSearch } from '@fortawesome/pro-light-svg-icons/faSearch';
import { faCheck } from '@fortawesome/pro-solid-svg-icons/faCheck';
import { faEye } from '@fortawesome/pro-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/pro-solid-svg-icons/faEyeSlash';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react';
import { TestProp } from '../../types';
import Label from '../Label/Label';
import { TextArea } from './TextArea';
import * as Styled from './TextInput.style';
import { SearchIcon } from './TextInput.style';
import Container from '../Container';
import { TypographyVariant } from '../Typography';

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
  onChange?: (
    newState: string,
    event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  /**
   * Shows check mark when validation is met
   */
  isValid?: boolean;
  /**
   * if true, the text input will take up the full width of its container
   */
  fullWidth?: boolean;
  /**
   * If true alters text input to search bar styles
   */
  search?: boolean;
  /**
   * triggers the on press of the close icon
   */
  onClose?: VoidFunction;
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
    fullWidth,
    testID,
    labelVariant = 'subtitle1',
    subtitle,
    subtitleVariant = 'subtitle2',
    ...otherProps
  },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange?.(event.target.value, event);
  };

  const triggerFocusState = (isFocus: boolean) => {
    setIsFocused(isFocus);
  };

  const hasError = !!errorText;

  const isPasswordType = type === 'password';
  const isTextArea = type === 'textarea';
  const inputId = `${baseTestId}-component-${testID}`;
  const {
    onBlur: _onBlur,
    onFocus: _onFocus,
    onClick: _onClick,
    ...other
  } = otherProps;

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    otherProps.onClick?.(e);
    triggerFocusState(true);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    otherProps.onBlur?.(e);
    triggerFocusState(false);
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    otherProps.onFocus?.(e);
    triggerFocusState(true);
  };

  return (
    <Styled.Wrapper fullWidth={fullWidth}>
      {label && (
        <Label
          htmlFor={inputId}
          variant={labelVariant}
          testID={`${inputId}-label`}
        >
          {label}
        </Label>
      )}
      {subtitle && (
        <Label variant={subtitleVariant} color="secondary">
          {subtitle}
        </Label>
      )}

      {isTextArea ? (
        <TextArea
          placeholder={placeholder}
          disabled={disabled}
          hasError={hasError}
          maxLength={maxLength}
          value={value}
          fullWidth={fullWidth}
          length={typeof value === 'string' ? value.length : 0}
          onChangeHandler={onChangeHandler}
          testID={testID}
        />
      ) : (
        <Styled.Container
          isFocused={isFocused}
          hasError={hasError}
          search={search}
          disabled={disabled}
          fullWidth={fullWidth}
          data-testid={
            isFocused ? `${inputId}-container-focused` : `${inputId}-container`
          }
        >
          <Container display="flex" fullWidth alignItems="center">
            {search && (
              <Styled.LeftIconContainer data-testid={`${inputId}-search-icon`}>
                <SearchIcon icon={faSearch} />
              </Styled.LeftIconContainer>
            )}
            <input
              id={inputId}
              ref={ref}
              type={passwordVisibility && isPasswordType ? 'password' : 'text'}
              value={value}
              onClick={onClick}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={onChangeHandler}
              disabled={disabled}
              data-testid={inputId}
              placeholder={placeholder}
              {...other}
            />
          </Container>
          {isPasswordType && (
            <Styled.RightIconContainer
              data-testid={`${inputId}-eye-icon`}
              onClick={() =>
                !disabled && setPasswordVisibility(!passwordVisibility)
              }
            >
              <Styled.PasswordIcon
                data-testid={
                  !passwordVisibility
                    ? `${inputId}-eye-slash`
                    : `${inputId}-eye`
                }
                icon={!passwordVisibility ? faEyeSlash : faEye}
              />
            </Styled.RightIconContainer>
          )}
          {isValid && (
            <Styled.RightIconContainer
              data-testid={`${inputId}-validation-check`}
            >
              <Styled.ValidIcon icon={faCheck} />
            </Styled.RightIconContainer>
          )}
          {!!search && !!value && onClose && (
            <Styled.RightIconContainer
              onClick={onClose}
              data-testid={`${inputId}-search-close-icon`}
            >
              <Styled.CloseIcon icon={faXmark} />
            </Styled.RightIconContainer>
          )}
        </Styled.Container>
      )}

      {(helperText || errorText) && (
        <Styled.MessageText
          variant={'paragraph2'}
          testID={`${inputId}-message-text`}
          hasError={hasError}
        >
          {errorText || helperText}
        </Styled.MessageText>
      )}
    </Styled.Wrapper>
  );
};

export default forwardRef(TextInput);
