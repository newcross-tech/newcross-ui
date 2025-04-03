const convertTo24Hour = (hourStr: string, period: string): string => {
  let hour = parseInt(hourStr, 10);
  if (period === 'am') {
    if (hour === 12) hour = 0;
  } else if (period === 'pm') {
    if (hour !== 12) hour += 12;
  }
  return hour.toString().padStart(2, '0');
};

export const parseTimeInput = (input: string): string | null => {
  if (!input) return '';

  const rawInput = input;

  // Trim and lowercase the input
  input = input.trim().toLowerCase();

  // Extract any am/pm suffix.
  const periodMatch = input.match(/(am|pm)$/);
  const period = periodMatch ? periodMatch[0] : '';
  // Remove the am/pm suffix from input.
  input = input.replace(/(am|pm)$/, '');

  // Define a separator regex (space, dot or colon)
  const separatorRegex = /[ .:]/;
  // Determine if the raw input had a trailing separator
  const forceSeparator = /[ .:]+$/.test(rawInput);
  // Decide whether to use the separator branch: if the trimmed input contains a separator or if forceSeparator is true
  const hasSeparator = separatorRegex.test(input) || forceSeparator;

  if (hasSeparator) {
    // Replace any occurrence of the separators with a colon (using global flag to replace all occurrences)
    input = input.replace(/[ .:]+/g, ':');
    // If after replacement no colon is found but forceSeparator is true, force one
    if (input.indexOf(':') === -1 && forceSeparator) {
      input = input + ':';
    }
    // Split the input on colon
    const tokens = input.split(':');
    let hourToken = tokens[0] || '';
    let minuteToken = tokens[1] || '';

    // Remove any non-digit characters (just in case)
    hourToken = hourToken.replace(/\D/g, '');
    minuteToken = minuteToken.replace(/\D/g, '');

    if (!hourToken) return '';

    // Always pad hourToken to two digits when a separator is used
    if (hourToken.length === 1) {
      hourToken = hourToken.padStart(2, '0');
    }

    // If period exists, convert hour to 24-hour format using helper function
    if (period) {
      hourToken = convertTo24Hour(hourToken, period);
    }

    return minuteToken ? `${hourToken}:${minuteToken}` : `${hourToken}:`;
  } else {
    // No separator found, fallback to digit-only processing
    // Remove colons and spaces just in case
    input = input.replace(/[:\s]/g, '');
    // Keep only digit characters
    const digits = input.replace(/\D/g, '');
    if (!digits) return '';

    // If only one digit is provided
    if (digits.length === 1) {
      if (period) {
        return convertTo24Hour(digits, period) + ':';
      } else {
        // Without period, if the digit is in [0-2], return as is; else pad with zero
        if (/^[0-2]$/.test(digits)) {
          return digits;
        } else {
          return '0' + digits + ':';
        }
      }
    }

    // For two or more digits without separator, if the first digit is not in [0-2],
    // force a single-digit hour interpretation with a leading zero.
    if (!period && !/^[0-2]$/.test(digits[0])) {
      const minutePart = digits.length >= 2 ? digits[1] : '';
      return '0' + digits[0] + ':' + minutePart;
    }

    // For two or more digits: treat the first two as the hour and the next two as minutes.
    let hourPart = digits.substring(0, 2);
    const minutePart = digits.substring(2, 4);

    // If period exists, convert the hour part using helper function
    if (period) {
      hourPart = convertTo24Hour(hourPart, period);
    }

    if (digits.length === 2) {
      return hourPart + ':';
    } else if (digits.length === 3) {
      return hourPart + ':' + digits[2];
    } else {
      return hourPart + ':' + minutePart;
    }
  }
};
