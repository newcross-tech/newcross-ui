import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { ReactNode } from 'react';
import { AlertVariant, TestProp } from '../../types';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import Card from '../Card';
import * as Styled from './Alert.style';

export type AlertProps = {
  /**
   * Whether the alert has a close button.
   */
  hasButton?: boolean;
  /**
   * Whether the alert has a border.
   */
  hasBorder?: boolean;
  /**
   * The action to trigger when the close button is pressed.
   */
  onClose?: VoidFunction;
  /**
   * Accepts a variant of the Alert.
   */
  variant?: AlertVariant;
  /**
   * Overwrites a custom icon for the Alert.
   */
  icon?: ReactNode;
  /**
   * Whether the alert has a title.
   */
  hasTitle?: boolean;
  /**
   * Accepts a custom title.
   */
  title?: string;
  /**
   * Accepts children as the alert's message.
   */
  children?: ReactNode;
  /**
   * Whether the card is full width.
   */
  fullWidth?: boolean;
  /**
   * The action to be displayed in the alert.
   */
  action?: ReactNode;
} & TestProp;

const Alert = ({
  icon,
  title,
  action,
  onClose,
  children,
  hasButton,
  hasTitle = true,
  hasBorder = true,
  fullWidth = true,
  variant = 'success',
  testID = 'alert',
}: AlertProps) => (
  <Card
    disabled
    hasRoundedCorners
    hasShadow={false}
    hasPadding={false}
    fullWidth={fullWidth}
  >
    <Styled.Alert
      variant={variant}
      hasBorder={hasBorder}
      data-testid={`${testID}-component`}
    >
      {icon || (
        <Styled.IconStyle position={'left'} variant={variant}>
          <Styled.Icon icon={Styled.getIcon()[variant]} />
        </Styled.IconStyle>
      )}
      <Styled.TextContainer>
        {hasTitle && (
          <Styled.Text variant={'heading6'}>
            {title || Styled.getTitle()[variant]}
          </Styled.Text>
        )}
        {children && (
          <Styled.Text variant={'paragraph1'}>{children}</Styled.Text>
        )}
        {action}
      </Styled.TextContainer>
      {hasButton && (
        <Styled.IconStyle
          tabIndex={1}
          onClick={onClose}
          data-testid={`${testID}-close-icon`}
          onKeyPress={(event) => onClose && onSpacePressTrigger(event, onClose)}
          position={'right'}
        >
          <Styled.Icon icon={faXmark} />
        </Styled.IconStyle>
      )}
    </Styled.Alert>
  </Card>
);

export default Alert;
