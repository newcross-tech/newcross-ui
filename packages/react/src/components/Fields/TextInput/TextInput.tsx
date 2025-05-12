import React, { ForwardedRef, forwardRef, useId, useState } from 'react';
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
  faEye,
  faEyeSlash,
  faSearch,
  faXmark,
} from '@fortawesome/pro-light-svg-icons';
import { OptionalProps } from '../../../types';
import { Container } from '../../Container';
import Icon from '../../Icon';
import { HelperText } from '../HelperText';
import { Label } from '../Label';
import { TextArea } from './TextArea';
import * as Styled from './TextInput.style';
import { TextInputPropsStrict } from './TextInput.types';
import { destroyEvent } from '../../../utils';

export type TextInputProps = OptionalProps<
  Omit<TextInputPropsStrict, 'isFocused' | 'hasError'>,
  | 'labelVariant'
  | 'subtitleVariant'
  | 'type'
  | 'disabled'
  | 'fullWidth'
  | 'search'
  | 'id'
  | 'hasBorder'
>;

const useNormalizeTextInputProps = (
  props: TextInputProps
): TextInputPropsStrict => {
  const uniqueId = useId();
  const [isFocused, setIsFocused] = useState(false);

  return {
    ...props,
    labelVariant: props.labelVariant ?? 'h3',
    subtitleVariant: props.subtitleVariant ?? 'p2',
    type: props.type ?? 'text',
    disabled: props.disabled ?? false,
    fullWidth: props.fullWidth ?? false,
    search: props.search ?? false,
    isFocused,
    hasError: !!props.errorText,
    id: props.id ?? uniqueId,
    hasBorder: props.hasBorder ?? true,
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
  };
};

export const TextInput = forwardRef(
  (_props: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const props = useNormalizeTextInputProps(_props);
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
      mode,
      subtitleVariant,
      isValid,
      onClose,
      isFocused,
      hasError,
      testID: _testID,
      'data-testid': _datatestid,
      required,
      onClick,
      onBlur,
      onFocus,
      hasBorder,
      ...inputProps
    } = props;

    const [passwordHidden, setPasswordHidden] = useState(true);

    const testIds = textInputTestIds(props);

    return (
      <Container
        flexDirection="column"
        gap="xs"
        fullWidth={fullWidth}
        {...testIds.root}
      >
        {label && (
          <Label
            htmlFor={inputProps.id}
            variant={labelVariant}
            mode={mode}
            {...testIds.label}
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
            mode={mode}
          >
            {subtitle}
          </Label>
        )}

        {type === 'textarea' ? (
          <TextArea
            id={inputProps.id}
            isValid={isValid}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            {...testIds.wrapper}
            helperText={helperText}
            errorText={errorText}
          />
        ) : (
          <>
            <Styled.TextInputContainer
              alignItems="center"
              justifyContent="space-between"
              px="md"
              isFocused={isFocused}
              isValid={isValid}
              hasError={hasError}
              search={search}
              disabled={disabled}
              hasBorder={hasBorder}
              {...testIds.wrapper}
            >
              <Container display="flex" fullWidth alignItems="center">
                {search && (
                  <Container
                    {...testIds.search}
                    justifyContent="center"
                    pl="xs"
                  >
                    <Icon icon={faSearch} variant="p1" />
                  </Container>
                )}
                <input
                  ref={ref}
                  type={type === 'password' && !passwordHidden ? 'text' : type}
                  value={value}
                  onClick={onClick}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onChange={(event) => onChange?.(event.target.value, event)}
                  disabled={disabled}
                  {...testIds.input}
                  placeholder={placeholder}
                  {...inputProps}
                />
              </Container>
              {type === 'password' && (
                <Styled.RightIconContainer
                  {...testIds.passwordVisibility}
                  p="xs"
                  justifyContent="center"
                  onMouseDown={destroyEvent}
                  onClick={() =>
                    !disabled && setPasswordHidden((prev) => !prev)
                  }
                >
                  <Icon
                    {...(passwordHidden
                      ? testIds.passwordHiddenIcon
                      : testIds.passwordVisibleIcon)}
                    icon={passwordHidden ? faEye : faEyeSlash}
                    variant="p1"
                    color={!disabled ? 'defaultDark' : 'disabled'}
                  />
                </Styled.RightIconContainer>
              )}
              {isFocused && (
                <Styled.RightIconContainer
                  {...testIds.clear}
                  justifyContent="center"
                  ml="xs"
                  onMouseDown={destroyEvent}
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
                <Container {...testIds.valid} ml="xs" justifyContent="center">
                  <Icon
                    icon={faCircleCheck}
                    variant="p1"
                    color="successStandalone"
                  />
                </Container>
              )}
              {hasError && !disabled && !isValid && !isFocused && (
                <Container {...testIds.error} ml="xs" justifyContent="center">
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
                  {...testIds.searchClose}
                >
                  <Icon icon={faXmark} variant="p1" />
                </Styled.RightIconContainer>
              )}
            </Styled.TextInputContainer>
            <HelperText
              disabled={disabled}
              errorText={errorText}
              helperText={helperText}
              {...testIds.helperText}
            />
          </>
        )}
      </Container>
    );
  }
);

/**
 * Normalizes the differences between the legacy `testID` prop and the new `data-testid` prop and provides backwards compatibility.
 * In normal conditions you should not need such function
 */
function textInputTestIds({
  'data-testid': testId,
  testID: legacyTestId,
}: Pick<TextInputPropsStrict, 'testID' | 'data-testid' | 'isFocused'>) {
  if (testId) {
    const baseTestId = [testId, 'text-input'].filter(Boolean).join('-');
    return {
      root: { 'data-testid': testId },
      wrapper: { 'data-testid': baseTestId },
      label: { 'data-testid': `${baseTestId}-label` },
      search: { 'data-testid': `${baseTestId}-search` },
      searchClose: { 'data-testid': `${baseTestId}-search-close` },
      passwordVisibility: {
        'data-testid': `${baseTestId}-password-visibility`,
      },
      passwordVisibleIcon: {
        'data-testid': `${baseTestId}-password-visible-icon`,
      },
      passwordHiddenIcon: {
        'data-testid': `${baseTestId}-password-hidden-icon`,
      },
      clear: { 'data-testid': `${baseTestId}-clear` },
      input: { 'data-testid': `${baseTestId}-input` },
      valid: { 'data-testid': `${baseTestId}-valid` },
      error: { 'data-testid': `${baseTestId}-error` },
      helperText: { 'data-testid': `${baseTestId}-helper-text` },
    };
  }

  const legacyBaseTestId = `text-input-component-${legacyTestId}`;
  return {
    root: undefined,
    wrapper: { testID: legacyTestId },
    label: { testID: `${legacyBaseTestId}-label` },
    search: { 'data-testid': `${legacyBaseTestId}-search-icon` },
    searchClose: { 'data-testid': `${legacyBaseTestId}-search-close-icon` },
    passwordVisibility: { 'data-testid': `${legacyBaseTestId}-eye-icon` },
    passwordVisibleIcon: { 'data-testid': `${legacyBaseTestId}-eye-slash` },
    passwordHiddenIcon: { 'data-testid': `${legacyBaseTestId}-eye` },
    clear: { 'data-testid': `${legacyBaseTestId}-clear-icon` },
    input: { 'data-testid': legacyBaseTestId },
    valid: { 'data-testid': `${legacyBaseTestId}-validation-check` },
    error: { 'data-testid': `${legacyBaseTestId}-error-check` },
    helperText: { testID: legacyBaseTestId },
  };
}

export default TextInput;
