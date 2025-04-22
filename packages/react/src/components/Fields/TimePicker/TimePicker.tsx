import Select from '../Select';
import { generateTimeOptions, parseTimeInput } from './utils';
import { TimeOption, TimePickerPropsStrict } from './TimePicker.types';
import { OptionalProps } from '../../../types';
import { format } from 'date-fns';
import { SingleValue } from 'react-select';

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
  $zIndex: _props.$zIndex ?? 2,
  get disabled() {
    return _props.disabled || !_props.baseDate;
  },
});

const TimePicker = (_props: TimePickerProps) => {
  const {
    baseDate,
    offset,
    step,
    duration,
    startTime,
    disabled,
    value,
    onChange,
    ...rest
  } = normaliseTimePickerProps(_props);

  const adjustedStartDate = !baseDate ? new Date() : new Date(baseDate);
  const [startHours, startMinutes] = startTime.split(':').map(Number);
  adjustedStartDate.setHours(startHours, startMinutes, 0, 0);

  const options = generateTimeOptions({
    baseDate: adjustedStartDate,
    offset,
    step,
    duration,
  });

  const selectedOption = options.find((o) => o.value === value) || null;

  const customFilterOption = (
    option: TimeOption,
    rawInput: string
  ): boolean => {
    const normalizedInput = parseTimeInput(rawInput);
    if (normalizedInput) {
      const optionTime = format(new Date(option.value), 'HH:mm');
      return optionTime.includes(normalizedInput);
    }
    return option.label.toLowerCase().includes(rawInput.toLowerCase());
  };

  const handleChange = (newValue: SingleValue<TimeOption>) => {
    onChange?.(newValue?.value ?? '');
  };

  return (
    <Select<TimeOption, false>
      {...rest}
      isMulti={false}
      disabled={disabled}
      options={options}
      filterOption={customFilterOption}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};

export default TimePicker;
