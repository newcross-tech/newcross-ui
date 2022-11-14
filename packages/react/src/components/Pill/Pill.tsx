import {
  cloneElement,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { TypographyVariant } from '../Typography';
import * as Styled from './Pill.style';
import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export type PillProps = {
  /**
   * Text element to describe the pill.
   */
  label?: string;
  /**
   * Disables pill from being pressed
   */
  disabled?: boolean;
  /**
   * Each pill can opt to include an icon which will be displayed before the label.
   */
  icon?: ReactNode;
  /**
   * If true displays a delete icon next to the label
   */
  removable?: boolean;
  /**
   * Called when a single tap gesture is detected.
   */
  onClick?: VoidFunction;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  /**
   * Checks if the Component is selected
   */
  selected?: boolean;
};

const baseTestId = 'pill';

const Pill = ({
  disabled = false,
  removable = false,
  icon,
  onClick,
  selected = false,
  label,
  testID = '',
}: PillProps) => {
  const [isSelected, setSelected] = useState(selected);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    setSelected(selected);
  }, [selected]);
  const onRemoveHandler = () => {
    if (disabled) return;
    setIsDeleted(true);
    onClick && onClick();
  };

  const handleSelect = () => {
    if (disabled || removable) return;
    setSelected(!isSelected);
  };

  const onKeyPressHandler = (
    event: React.KeyboardEvent<HTMLElement>,
    isSelectable: boolean
  ) => {
    event.preventDefault();
    if (event.code === 'Space') {
      isSelectable ? handleSelect() : onRemoveHandler();
    }
  };

  if (isDeleted) return null;

  return (
    <Styled.Pill
      isSelected={isSelected}
      data-testid={
        isSelected
          ? `${baseTestId}-component${testID}-selected`
          : `${baseTestId}-component${testID}`
      }
      disabled={disabled}
      onClick={handleSelect}
      isRemovable={removable}
      tabIndex={!disabled && !removable ? 0 : undefined}
      onKeyPress={(event) => onKeyPressHandler(event, true)}
    >
      <Styled.Content>
        <Styled.Icon
          data-testid={`${baseTestId}-icon`}
          disabled={disabled}
          hasIcon={!!icon}
        >
          {isValidElement(icon) && cloneElement(icon)}
        </Styled.Icon>
        <Styled.Text disabled={disabled} variant={TypographyVariant.paragraph1}>
          {label}
        </Styled.Text>
        {removable && (
          <Styled.RemoveIcon
            data-testid={`${baseTestId}-clickable${testID}`}
            onClick={onRemoveHandler}
            tabIndex={!disabled ? 0 : undefined}
            onKeyPress={(event) => onKeyPressHandler(event, false)}
            disabled={disabled}
            hasIcon={!!icon}
            hasLabel={!!label}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Styled.RemoveIcon>
        )}
      </Styled.Content>
    </Styled.Pill>
  );
};

export default Pill;
