import { faXmark } from '@fortawesome/pro-light-svg-icons/faXmark';
import { SyntheticEvent, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import * as Styled from './Pill.style';
import {
  PillPaddingXSize,
  PillTypographySize,
  PillTypographyColor,
  PillPropsStrict,
} from './Pill.types';
import Container from '../Container';
import Icon from '../Icon';
import Typography from '../Typography';
import { OptionalProps } from '../../types/utility-types';

export type PillProps = OptionalProps<
  PillPropsStrict,
  | 'disabled'
  | 'hasBorder'
  | 'hasPadding'
  | 'removable'
  | 'selected'
  | 'size'
  | 'statusVariant'
  | 'label'
  | 'style'
  | 'testID'
>;

const normalizePillProps = (props: PillProps): PillPropsStrict => ({
  ...props,
  disabled: props.disabled ?? false,
  hasBorder: props.hasBorder ?? true,
  hasPadding: props.hasPadding ?? true,
  removable: props.removable ?? false,
  selected: props.selected ?? false,
  size: props.size ?? 'large',
  statusVariant: props.statusVariant ?? 'default',
  label: props.label ?? '',
  style: props.style ?? {
    iconStyles: {},
    textStyles: {},
    coreStyles: {},
  },
  testID: props.testID ?? '',
});

const baseTestId = 'pill';

const Pill = (_props: PillProps) => {
  const {
    disabled,
    hasBorder,
    hasPadding,
    icon,
    label,
    onClick,
    removable,
    selected,
    size,
    statusVariant,
    style,
    testID,
  } = normalizePillProps(_props);

  const { iconStyles, textStyles, coreStyles } = style;

  const [isSelected, setSelected] = useState(selected);
  const [isDeleted, setIsDeleted] = useState(false);

  const contentColor = disabled
    ? PillTypographyColor.disabled
    : PillTypographyColor[statusVariant];

  useToggle(selected, () => setSelected(selected));

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
          color={contentColor}
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
            statusVariant={statusVariant}
          >
            <Icon
              variant={PillTypographySize[size]}
              icon={faXmark}
              color={contentColor}
            />
          </Styled.RemoveIcon>
        )}
      </Container>
    </Styled.Pill>
  );
};

export default Pill;
