import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import {
  faCircleXmark,
  faEyeSlash,
  faEye,
  faXmark,
  faSearch,
  faCircleCheck,
  faCircleExclamation,
} from '@fortawesome/pro-light-svg-icons';
import { OptionalProps } from '../../../types';
import Container from '../../Container';
import Icon from '../../Icon';
import HelperText from '../HelperText';
import Label from '../Label';
import { getTextColor, preventEventPropagation } from '../utils';
import TextArea from '../TextArea';
import * as Styled from './TextInput.style';
import { TextInputPropsStrict } from './TextInput.types';

export type TextInputProps = OptionalProps<
  TextInputPropsStrict,
  | 'labelVariant'
  | 'subtitleVariant'
  | 'type'
  | 'disabled'
  | 'fullWidth'
  | 'search'
>;

const normalizeTextInputProps = (
  props: TextInputProps,
  setIsFocused: (value: boolean) => void
): TextInputPropsStrict => ({
  ...props,
  labelVariant: props.labelVariant ?? 'h3',
  subtitleVariant: props.subtitleVariant ?? 'p2',
  type: props.type ?? 'text',
  disabled: props.disabled ?? false,
  fullWidth: props.fullWidth ?? false,
  search: props.search ?? false,
  onClick: (event: React.MouseEvent<HTMLInputElement>) => {
    props.onClick?.(event);
    setIsFocused(true);
  },
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur?.(event);
    setIsFocused(false);
  },
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
    props.onFocus?.(event);
    setIsFocused(true);
  },
});

const baseTestId = 'text-input';

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  _props,
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    label,
    subtitle,
    placeholder,
    value,
    onChange,
    type,
    disabled,
    fullWidth,
    search,
    maxLength,
    helperText,
    errorText,
    labelVariant,
    subtitleVariant,
    isValid,
    onClose,
    testID,
    required,
    onClick,
    onBlur,
    onFocus,
    ...inputProps
  } = normalizeTextInputProps(_props, setIsFocused);

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange?.(event.target.value, event);
  };

  const hasError = !!errorText;
  const isPasswordType = type === 'password';
  const isTextArea = type === 'textarea';
  const inputId = `${baseTestId}-component-${testID}`;

  return (
    <Container flexDirection="column" gap="xs" fullWidth={fullWidth}>
      {label && (
        <Label
          htmlFor={inputId}
          variant={labelVariant}
          color={getTextColor.primaryText({ disabled, hasError })}
          testID={`${inputId}-label`}
          required={required}
          disabled={disabled}
        >
          {label}
        </Label>
      )}

      {subtitle && (
        <Label
          variant={subtitleVariant}
          color={hasError ? 'dangerError' : 'defaultDark'}
        >
          {subtitle}
        </Label>
      )}

      {isTextArea ? (
        <TextArea
          isValid={isValid}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          length={typeof value === 'string' ? value.length : 0}
          onChangeHandler={onChangeHandler}
          testID={testID}
          helperText={helperText}
          errorText={errorText}
        />
      ) : (
        <Styled.TextInputContainer
          alignItems="center"
          justifyContent="space-between"
          px="md"
          isFocused={isFocused}
          isValid={isValid}
          hasError={hasError}
          search={search}
          disabled={disabled}
          testID={
            isFocused ? `${inputId}-container-focused` : `${inputId}-container`
          }
        >
          <Container display="flex" fullWidth alignItems="center">
            {search && (
              <Container
                testID={`${inputId}-search-icon`}
                justifyContent="center"
                pl="md"
              >
                <Icon icon={faSearch} variant="p1" />
              </Container>
            )}
            <input
              id={inputId}
              ref={ref}
              type={isPasswordType && !passwordVisibility ? 'text' : type}
              value={value}
              onClick={onClick}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={onChangeHandler}
              disabled={disabled}
              data-testid={inputId}
              placeholder={placeholder}
              {...inputProps}
            />
          </Container>
          {isPasswordType && (
            <Styled.RightIconContainer
              testID={`${inputId}-eye-icon`}
              p="xs"
              justifyContent="center"
              onMouseDown={(event) => preventEventPropagation(event)}
              onClick={() =>
                !disabled && setPasswordVisibility(!passwordVisibility)
              }
            >
              <Icon
                data-testid={
                  !passwordVisibility
                    ? `${inputId}-eye-slash`
                    : `${inputId}-eye`
                }
                icon={!passwordVisibility ? faEyeSlash : faEye}
                variant="p1"
                color={!disabled ? 'defaultDark' : 'disabled'}
              />
            </Styled.RightIconContainer>
          )}
          {isFocused && (
            <Styled.RightIconContainer
              testID={`${inputId}-clear-icon`}
              justifyContent="center"
              ml="xs"
              onMouseDown={(event) => preventEventPropagation(event)}
              onClick={() => onChange?.('')}
            >
              <Icon
                icon={faCircleXmark}
                variant="p1"
                color="actionPrimaryDark"
              />
            </Styled.RightIconContainer>
          )}
          {isValid && !disabled && !isFocused && !hasError && (
            <Container
              testID={`${inputId}-validation-check`}
              ml="xs"
              justifyContent="center"
            >
              <Icon
                icon={faCircleCheck}
                variant="p1"
                color="successStandalone"
              />
            </Container>
          )}
          {hasError && !disabled && !isValid && !isFocused && (
            <Container
              testID={`${inputId}-error-check`}
              ml="xs"
              justifyContent="center"
            >
              <Icon
                icon={faCircleExclamation}
                variant="p1"
                color="dangerError"
              />
            </Container>
          )}
          {search && !!value && onClose && (
            <Styled.RightIconContainer
              p="md"
              justifyContent="center"
              onClick={onClose}
              testID={`${inputId}-search-close-icon`}
            >
              <Icon icon={faXmark} variant="p1" />
            </Styled.RightIconContainer>
          )}
        </Styled.TextInputContainer>
      )}
      {!isTextArea && (
        <HelperText
          disabled={disabled}
          errorText={errorText}
          helperText={helperText}
          testID={inputId}
        />
      )}
    </Container>
  );
};

export default forwardRef(TextInput);
