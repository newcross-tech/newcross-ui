process.env.TZ = 'UTC';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 60000,
  collectCoverage: true,
  maxWorkers: '50%',
  collectCoverageFrom: [
    'src/**/*.tsx',
    'src/**/utils/*.ts',
    '!src/**/utils/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
