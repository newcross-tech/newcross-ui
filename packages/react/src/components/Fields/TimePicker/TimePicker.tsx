import Select from '../Select';
import { generateTimeOptions, parseTimeInput } from './utils';
import { TimePickerPropsStrict } from './TimePicker.types';
import { OptionalProps } from '../../../types';
import { format } from 'date-fns';

export type TimePickerProps = OptionalProps<
  TimePickerPropsStrict,
  | 'startTime'
  | 'offset'
  | 'step'
  | 'duration'
  | 'labelVariant'
  | 'subtitleVariant'
  | '$zIndex'
  | 'disabled'
  | 'hasError'
>;

const normaliseTimePickerProps = (
  _props: TimePickerProps
): TimePickerPropsStrict => ({
  ..._props,
  startTime: _props.startTime ?? '00:00',
  offset: _props.offset ?? 0,
  step: _props.step ?? 15,
  duration: _props.duration ?? 1440,
  labelVariant: _props.labelVariant ?? 'h3',
  subtitleVariant: _props.subtitleVariant ?? 'p2',
  hasError: _props.hasError ?? false,
  disabled: _props.disabled ?? false,
  $zIndex: _props.$zIndex ?? 2,
});

const TimePicker = (_props: TimePickerProps) => {
  const { baseDate, offset, step, duration, startTime, disabled, ...rest } =
    normaliseTimePickerProps(_props);

  const isDisabled = disabled || !baseDate;
  const adjustedStartDate = new Date(baseDate);
  const [startHours, startMinutes] = startTime.split(':').map(Number);
  adjustedStartDate.setHours(startHours, startMinutes, 0, 0);

  const options = generateTimeOptions({
    baseDate: adjustedStartDate,
    offset,
    step,
    duration,
  });

  const customFilterOption = (option: any, rawInput: string): boolean => {
    const normalizedInput = parseTimeInput(rawInput);
    if (normalizedInput) {
      const optionTime = format(option.data.value, 'HH:mm');
      return optionTime.includes(normalizedInput);
    }
    return option.data.label.toLowerCase().includes(rawInput.toLowerCase());
  };

  return (
    <Select
      {...rest}
      disabled={isDisabled}
      options={options}
      filterOption={customFilterOption}
    />
  );
};

export default TimePicker;
