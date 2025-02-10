import { getTextColor } from '.';

describe('getTextColor', () => {
  const testCases = [
    {
      disabled: true,
      hasError: false,
      expectedPrimary: 'disabled',
      expectedSecondary: 'disabled',
    },
    {
      disabled: false,
      hasError: true,
      expectedPrimary: 'dangerError',
      expectedSecondary: 'dangerError',
    },
    {
      disabled: true,
      hasError: true,
      expectedPrimary: 'disabled',
      expectedSecondary: 'disabled',
    },
    {
      disabled: false,
      hasError: false,
      expectedPrimary: 'defaultDark',
      expectedSecondary: 'defaultDarkSecondary',
    },
  ];

  testCases.forEach(
    ({ disabled, hasError, expectedPrimary, expectedSecondary }) => {
      it(`should return correct values for disabled=${disabled} and hasError=${hasError}`, () => {
        expect(getTextColor.primaryText({ disabled, hasError })).toBe(
          expectedPrimary
        );
        expect(getTextColor.secondaryText({ disabled, hasError })).toBe(
          expectedSecondary
        );
      });
    }
  );
});
