import * as Styled from './TextInput.style';
import { HelperTextProps } from './TextInput.types';

export const HelperText = ({
  errorText,
  helperText,
  testID,
}: HelperTextProps) => {
  return (
    <Styled.MessageText
      variant={'paragraph2'}
      testID={`${testID}-message-text`}
      hasError={!!errorText}
    >
      {errorText || helperText}
    </Styled.MessageText>
  );
};
