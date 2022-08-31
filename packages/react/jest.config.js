const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  collectCoverageFrom: [...baseConfig.collectCoverageFrom, '!src/stories/**'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  modulePathIgnorePatterns: ['<rootDir>/build'],
  moduleNameMapper: {
    '^.+\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};
