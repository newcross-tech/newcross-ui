const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom,
    '!src/**/BottomSheet/**', // Ignored coverage of Bottom Sheet because we cannot fire gesture events from unit tests
  ],
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  setupFiles: ['../../node_modules/react-native-gesture-handler/jestSetup.js'],
  modulePathIgnorePatterns: ['<rootDir>/build'],
  transformIgnorePatterns: [
    '../../node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
};
