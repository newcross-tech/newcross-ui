module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 20000,
  collectCoverage: true,
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
