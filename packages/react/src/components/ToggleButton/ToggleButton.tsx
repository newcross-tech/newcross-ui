import { ReactElement, ReactNode, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { TestProp } from '../../types';
import * as Styled from './ToggleButton.style';
import { ContentProps } from './ToggleButton.types';

export type ToggleButtonProps = {
  /**
   * Called when a single tap gesture is detected.
   */
  onClick?: (value: string) => void;
  /**
   * Either children or a render prop that receives a boolean
   * reflecting whether the component is currently pressed.
   */
  children?: ReactNode;
  /**
   * Specifies whether the toggle button is selected
   */
  selected?: boolean;
  /**
   * To toggle between auto and full width button
   */
  fullWidth?: boolean;
  /**
   * The currently selected value within the group or an array of
   * selected values
   */
  value?: string;
  /**
   * Set the left icon element.
   */
  leftIcon?: ReactElement;
  /**
   * Set the right icon element.
   */
  rightIcon?: ReactElement;
} & TestProp;

export const ToggleIcon = ({
  testID,
  rightIcon,
  children,
  hasLeftContent,
  hasRightContent,
}: ContentProps) => (
  <Styled.IconWrapper
    hasLeftContent={hasLeftContent}
    hasRightContent={hasRightContent}
    rightIcon={rightIcon}
    data-testid={testID}
  >
    {children}
  </Styled.IconWrapper>
);

const baseTestId = 'toggle-button';

const ToggleButton = ({
  leftIcon,
  rightIcon,
  children,
  selected = false,
  onClick,
  fullWidth,
  value = '',
  testID = '',
  ...rest
}: ToggleButtonProps) => {
  const [isSelected, setSelected] = useState(selected);

  useToggle(selected, () => setSelected(selected));

  const handleOnClick = () => {
    onClick && onClick(value);
    setSelected(!isSelected);
  };

  return (
    <Styled.Container
      onClick={handleOnClick}
      selected={isSelected}
      fullWidth={fullWidth}
      data-testid={
        selected ? `${baseTestId}-selected${testID}` : `${baseTestId}${testID}`
      }
      {...rest}
    >
      {leftIcon && (
        <ToggleIcon
          hasLeftContent={leftIcon && !!children}
          testID={`${baseTestId}-left-icon`}
        >
          {leftIcon}
        </ToggleIcon>
      )}
      <Styled.Text variant={'paragraph2'}>{children}</Styled.Text>
      {rightIcon && (
        <ToggleIcon
          hasRightContent={rightIcon && !!children}
          testID={`${baseTestId}-right-icon`}
        >
          {rightIcon}
        </ToggleIcon>
      )}
    </Styled.Container>
  );
};

export default ToggleButton;
