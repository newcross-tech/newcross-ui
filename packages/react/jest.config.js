const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  collectCoverageFrom: [...baseConfig.collectCoverageFrom, '!src/stories/**'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  modulePathIgnorePatterns: ['<rootDir>/build'],
  moduleNameMapper: {
    '^.+\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};
