import { faXmark } from '@fortawesome/pro-light-svg-icons';
import { SyntheticEvent, useState } from 'react';
import { onSpacePressTrigger } from '../../utils/onSpacePressTrigger';
import * as Styled from './Pill.style';
import {
  PillPaddingXSize,
  PillTypographySize,
  PillTypographyColor,
  PillPropsStrict,
  PillGapSize,
  PillVariant,
} from './Pill.types';
import Container from '../Container';
import Icon from '../Icon';
import Typography from '../Typography';
import { OptionalProps } from '../../types/utility-types';
import { useUpstreamState } from '../../hooks/useUpstreamState';

export type PillProps = OptionalProps<
  PillPropsStrict,
  | 'disabled'
  | 'hasBorder'
  | 'hasPadding'
  | 'removable'
  | 'selected'
  | 'size'
  | 'variant'
  | 'label'
  | 'style'
  | 'testID'
> & {
  /**
   * @deprecated Use {@link variant} instead.
   */
  statusVariant?: PillVariant;
};

const normalizePillProps = (props: PillProps): PillPropsStrict => ({
  ...props,
  disabled: props.disabled ?? false,
  hasBorder: props.hasBorder ?? true,
  hasPadding: props.hasPadding ?? true,
  removable: props.removable ?? false,
  selected: props.selected ?? false,
  size: props.size ?? 'large',
  variant: props.variant ?? props.statusVariant ?? 'default',
  label: props.label ?? '',
  style: props.style ?? {
    iconStyles: {},
    textStyles: {},
    coreStyles: {},
  },
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
    variant,
    style,
    testID,
    'data-testid': dataTestId,
  } = normalizePillProps(_props);

  const testId = dataTestId ?? testID ?? '';

  const { iconStyles, textStyles, coreStyles } = style;

  const [selectedOverride, setSelected] = useUpstreamState(selected);
  const [isDeleted, setIsDeleted] = useState(false);

  const contentColor = disabled
    ? PillTypographyColor.disabled
    : PillTypographyColor[variant];

  function remove(event: SyntheticEvent) {
    if (disabled) return;
    setIsDeleted(true);
    onClick?.(event);
  }

  function toggle() {
    if (disabled) return;
    if (removable) return;
    if (!onClick) return;
    if (variant !== 'default') return;
    setSelected((prev) => !prev);
  }

  if (isDeleted) return null;

  const pillTestId = [
    baseTestId,
    `component${testId}`,
    selectedOverride ? 'selected' : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join('-');

  return (
    <Styled.Pill
      hasBorder={hasBorder}
      selected={selectedOverride}
      data-testid={pillTestId}
      disabled={disabled}
      onClick={toggle}
      removable={removable}
      tabIndex={!disabled && !removable ? 0 : -1}
      onKeyDown={(event) => onSpacePressTrigger(event, toggle)}
      hasPadding={hasPadding}
      variant={variant}
      style={coreStyles}
    >
      <Container
        alignItems="center"
        justifyContent="center"
        py="xs"
        px={PillPaddingXSize[size]}
        gap={PillGapSize[size]}
      >
        {icon && (
          <Styled.Icon
            data-testid={`${baseTestId}-icon`}
            disabled={disabled}
            style={iconStyles}
            variant={variant}
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
            data-testid={`${baseTestId}-clickable${testId}`}
            onClick={remove}
            tabIndex={!disabled ? 0 : -1}
            onKeyDown={(event) => onSpacePressTrigger(event, remove)}
            disabled={disabled}
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
