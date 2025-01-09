import { ReactNode, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { TestProp } from '../../types';
import {
  MultiSelect,
  SingleSelect,
} from '../ToggleButtonGroup/ToggleButtonGroup.types';
import * as Styled from './ToggleButton.style';
import Typography from '../Typography';
import Icon from '../Icon';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

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
  leftIcon?: IconDefinition;
  /**
   * Set the right icon element.
   */
  rightIcon?: IconDefinition;
  /**
   * Set the disabled state of the button.
   */
  disabled?: boolean;
  variant?: (SingleSelect | MultiSelect)['variant'];
} & TestProp;

// TODO - To be removed
// export const ToggleIcon = ({
//   testID,
//   rightIcon,
//   children,
//   hasLeftContent,
//   hasRightContent,
// }: ContentProps) => (
//   <Styled.IconWrapper
//     hasLeftContent={hasLeftContent}
//     hasRightContent={hasRightContent}
//     rightIcon={rightIcon}
//     data-testid={testID}
//   >
//     {children}
//   </Styled.IconWrapper>
// );

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
  variant,
  disabled = false, // New prop
  ...rest
}: ToggleButtonProps) => {
  const [isSelected, setIsSelected] = useState(selected);
  const isMulti = variant === 'multi';

  useToggle(selected, () => setIsSelected(selected));

  const handleOnClick = () => {
    if (disabled) return;

    onClick && onClick(value);
    setIsSelected(!isSelected);
  };

  return (
    <Styled.Container
      onClick={handleOnClick}
      selected={isMulti ? isSelected : selected}
      fullWidth={fullWidth}
      disabled={disabled}
      data-testid={
        selected ? `${baseTestId}-selected${testID}` : `${baseTestId}${testID}`
      }
      {...rest}
    >
      {leftIcon && (
        <Icon
          testID={`${baseTestId}-left-icon`}
          variant="p2"
          icon={leftIcon}
          color={disabled ? 'disabled' : 'primary'}
          mr="sm"
        />
      )}
      {typeof children === 'string' ? (
        <Typography
          testID={`${baseTestId}-text`}
          variant="p2"
          color={disabled ? 'disabled' : 'primary'}
        >
          {children}
        </Typography>
      ) : (
        children
      )}
      {rightIcon && (
        <Icon
          testID={`${baseTestId}-right-icon`}
          variant="p2"
          icon={rightIcon}
          color={disabled ? 'disabled' : 'primary'}
          ml="sm"
        />
      )}
    </Styled.Container>
  );
};

export default ToggleButton;
