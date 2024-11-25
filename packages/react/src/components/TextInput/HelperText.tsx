import * as Styled from './TextInput.style';

export const HelperText = ({
  errorText,
  helperText,
  hasError,
  testID,
}: {
  errorText?: string;
  helperText?: string;
  hasError?: boolean;
  testID: string;
}) => {
  return (
    <Styled.MessageText
      variant={'paragraph2'}
      testID={`${testID}-message-text`}
      hasError={hasError}
    >
      {errorText ?? helperText}
    </Styled.MessageText>
  );
};
