import { configureAxe, toHaveNoViolations } from 'jest-axe';
const axe = configureAxe({
  rules: {
    region: { enabled: false },
  },
});

expect.extend(toHaveNoViolations);

export default axe;
