import { configureAxe, toHaveNoViolations } from 'jest-axe';

export const axe = configureAxe({
  rules: {
    region: { enabled: false },
  },
});

expect.extend(toHaveNoViolations);
