type TextStateProps = {
  disabled: boolean;
  hasError: boolean;
};

export const getTextColor = {
  primaryText: ({ disabled, hasError }: TextStateProps) => {
    if (disabled) return 'disabled';
    if (hasError) return 'dangerError';
    return 'defaultDark';
  },
  secondaryText: ({ disabled, hasError }: TextStateProps) => {
    if (disabled) return 'disabled';
    if (hasError) return 'dangerError';
    return 'defaultDarkSecondary';
  },
};
