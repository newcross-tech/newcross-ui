const PERIOD_REGEX = /(am|pm)$/;
const SEPARATOR_REGEX = /[ .:]/;
const SEPARATOR_GLOBAL_REGEX = /[ .:]+/g;
const COLON_SPACE_REGEX = /[:\s]/g;
const NON_DIGIT_REGEX = /\D/g;
const FIRST_HOUR_CHARACTER_REGEX = /^[0-2]$/;

const convertTo24Hour = ({
  hourStr,
  period,
}: {
  hourStr: string;
  period: string;
}): string => {
  let hour = parseInt(hourStr, 10);
  if (period === 'am' && hour === 12) hour = 0;
  else if (period === 'pm' && hour !== 12) hour += 12;
  return hour.toString().padStart(2, '0');
};

const processSeparatorBranch = (
  input: string,
  rawInput: string,
  period: string
): string | null => {
  // Normalize any separator (space, dot, colon) to a single colon.
  input = input.replace(SEPARATOR_GLOBAL_REGEX, ':');
  // If rawInput ended with a separator but none exists after normalization, force one.
  const lastChar = rawInput.charAt(rawInput.length - 1);
  if (input.indexOf(':') === -1 && [' ', '.', ':'].includes(lastChar)) {
    input = input + ':';
  }
  const [hourRaw, minuteRaw] = input.split(':');
  let hourToken = hourRaw.replace(NON_DIGIT_REGEX, '');
  const minuteToken = minuteRaw.replace(NON_DIGIT_REGEX, '');
  if (!hourToken) return '';
  if (hourToken.length === 1) hourToken = hourToken.padStart(2, '0');
  if (period) hourToken = convertTo24Hour({ hourStr: hourToken, period });
  return minuteToken ? `${hourToken}:${minuteToken}` : `${hourToken}:`;
};

const processDigitOnlyBranch = (
  input: string,
  period: string
): string | null => {
  // Remove any colon or whitespace.
  input = input.replace(COLON_SPACE_REGEX, '');
  const digits = input.replace(NON_DIGIT_REGEX, '');
  if (!digits) return '';
  if (digits.length === 1) {
    return period
      ? convertTo24Hour({ hourStr: digits, period }) + ':'
      : FIRST_HOUR_CHARACTER_REGEX.test(digits)
      ? digits
      : '0' + digits + ':';
  }
  // If no period and first digit is not in [0-2], force single-digit hour.
  if (!period && !FIRST_HOUR_CHARACTER_REGEX.test(digits[0])) {
    const minutePart = digits[1] || '';
    return '0' + digits[0] + ':' + minutePart;
  }
  let hourPart = digits.substring(0, 2);
  const minutePart = digits.substring(2, 4);
  if (period) hourPart = convertTo24Hour({ hourStr: hourPart, period });
  if (digits.length === 2) return hourPart + ':';
  else if (digits.length === 3) return hourPart + ':' + digits[2];
  else return hourPart + ':' + minutePart;
};

export const parseTimeInput = (input: string): string | null => {
  if (!input) return '';

  const rawInput = input; // Preserve raw input for trailing separator detection.
  input = input.trim().toLowerCase();

  // Extract period suffix using RegExp.exec() and remove it from the input.
  const periodMatch = PERIOD_REGEX.exec(input);
  const period = periodMatch ? periodMatch[0] : '';
  input = input.replace(PERIOD_REGEX, '');

  // Determine if the input contains a separator or if raw input ends with one.
  const hasSeparator =
    SEPARATOR_REGEX.test(input) ||
    [' ', '.', ':'].includes(rawInput.charAt(rawInput.length - 1));

  return hasSeparator
    ? processSeparatorBranch(input, rawInput, period)
    : processDigitOnlyBranch(input, period);
};
