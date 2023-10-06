import { faXmark } from '@fortawesome/pro-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  cloneElement,
  isValidElement,
  ReactNode,
  SyntheticEvent,
  useState,
} from 'react';
import { useToggle } from '../../hooks/useToggle';
import { TestProp } from '../../types/TestProp';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import * as Styled from './Pill.style';
import { CustomStyle, PillVariant } from './Pill.types';

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
  onClick?: (event: SyntheticEvent) => void;
  /**
   * Used to apply padding
   */
  hasPadding?: boolean;
  /**
   * Checks if the Component is selected
   */
  selected?: boolean;
  /**
   * Used to define color palette of the Pills.
   */
  statusVariant?: PillVariant;
  /**
   * Used to add custom style to the pill container.
   */
  style?: CustomStyle;
} & TestProp;

const baseTestId = 'pill';

const Pill = ({
  disabled = false,
  removable = false,
  icon,
  onClick,
  selected = false,
  label,
  style = {
    iconStyles: {},
    textStyles: {},
    coreStyles: {},
  },
  hasPadding = true,
  statusVariant = 'default',
  testID = '',
}: PillProps) => {
  const [isSelected, setSelected] = useState(selected);
  const [isDeleted, setIsDeleted] = useState(false);

  useToggle(selected, () => setSelected(selected));
  const { iconStyles, textStyles, coreStyles } = style;

  const onRemoveHandler = (event: SyntheticEvent) => {
    if (disabled) return;
    setIsDeleted(true);
    onClick && onClick(event);
  };

  const handleSelect = () => {
    if (disabled || removable || statusVariant !== 'default') return;
    setSelected(!isSelected);
  };

  const onKeyPressHandler = (
    event: React.KeyboardEvent<HTMLElement>,
    isSelectable: boolean
  ) => {
    onSpacePressTrigger(event, () =>
      isSelectable ? handleSelect() : onRemoveHandler(event)
    );
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
      tabIndex={!disabled && !removable ? 0 : -1}
      onKeyPress={(event) => onKeyPressHandler(event, true)}
      hasPadding={hasPadding}
      statusVariant={statusVariant}
      style={coreStyles}
    >
      <Styled.Content>
        <Styled.Icon
          data-testid={`${baseTestId}-icon`}
          disabled={disabled}
          hasIcon={!!icon}
          style={iconStyles}
          statusVariant={statusVariant}
        >
          {isValidElement(icon) && cloneElement(icon)}
        </Styled.Icon>
        <Styled.Text
          disabled={disabled}
          variant={'paragraph1'}
          numberOfLines={2}
          statusVariant={statusVariant}
          style={textStyles}
        >
          {label}
        </Styled.Text>
        {removable && (
          <Styled.RemoveIcon
            data-testid={`${baseTestId}-clickable${testID}`}
            onClick={onRemoveHandler}
            tabIndex={!disabled ? 0 : -1}
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
