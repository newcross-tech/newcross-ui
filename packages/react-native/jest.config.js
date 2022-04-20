const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom,
    '!src/**/BottomSheet/**', // Ignored coverage of Bottom Sheet because we cannot fire gesture events from unit tests
  ],
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: [
    '../../node_modules/react-native-gesture-handler/jestSetup.js',
    '../../node_modules/react-native-reanimated/lib/reanimated2/jestUtils',
  ],
  modulePathIgnorePatterns: ['<rootDir>/build'],
  transformIgnorePatterns: [
    '../../node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
};
