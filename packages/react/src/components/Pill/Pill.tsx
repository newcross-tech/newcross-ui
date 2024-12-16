import { faXmark } from '@fortawesome/pro-light-svg-icons/faXmark';
import { ReactNode, SyntheticEvent, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { TestProp } from '../../types';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import * as Styled from './Pill.style';
import {
  CustomStyle,
  PillSize,
  PillPaddingXSize,
  PillTypographySize,
  PillVariant,
  PillTypographyColor,
} from './Pill.types';
import Container from '../Container';
import Icon from '../Icon';
import Typography from '../Typography';

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
   * Size of the pill
   */
  size?: PillSize;
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
   * Whether the pill has border
   */
  hasBorder?: boolean;
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
  size = 'large',
  icon,
  onClick,
  hasBorder = true,
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

  const getPillTestId = (
    disabled: boolean,
    isSelected: boolean,
    basetestId: string
  ) => {
    if (isSelected) {
      return `${basetestId}-component${testID}-selected`;
    }
    if (disabled) {
      return `${basetestId}-component${testID}-disabled
`;
    }
    return `${basetestId}-component${testID}`;
  };

  return (
    <Styled.Pill
      hasBorder={hasBorder}
      isSelected={isSelected}
      data-testid={getPillTestId(disabled, isSelected, baseTestId)}
      disabled={disabled}
      onClick={handleSelect}
      isRemovable={removable}
      tabIndex={!disabled && !removable ? 0 : -1}
      onKeyDown={(event) => onKeyPressHandler(event, true)}
      hasPadding={hasPadding}
      statusVariant={statusVariant}
      style={coreStyles}
    >
      <Container
        alignItems="center"
        justifyContent="center"
        py="sm"
        px={PillPaddingXSize[size]}
        gap="sm"
      >
        {icon && (
          <Styled.Icon
            data-testid={`${baseTestId}-icon`}
            disabled={disabled}
            style={iconStyles}
            statusVariant={statusVariant}
          >
            {icon}
          </Styled.Icon>
        )}
        <Typography
          color={
            disabled
              ? PillTypographyColor.disabled
              : PillTypographyColor[statusVariant]
          }
          variant={PillTypographySize[size]}
          numberOfLines={2}
          style={textStyles}
        >
          {label}
        </Typography>
        {removable && (
          <Styled.RemoveIcon
            data-testid={`${baseTestId}-clickable${testID}`}
            onClick={onRemoveHandler}
            tabIndex={!disabled ? 0 : -1}
            onKeyDown={(event) => onKeyPressHandler(event, false)}
            disabled={disabled}
          >
            <Icon
              variant={PillTypographySize[size]}
              icon={faXmark}
              color={
                disabled
                  ? PillTypographyColor.disabled
                  : PillTypographyColor[statusVariant]
              }
            />
          </Styled.RemoveIcon>
        )}
      </Container>
    </Styled.Pill>
  );
};

export default Pill;
