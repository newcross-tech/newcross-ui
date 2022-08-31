import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-reanimated', () => ({
  ...require('react-native-reanimated/mock'),
  SlideInUp: { duration: jest.fn() },
  SlideOutUp: { duration: jest.fn() },
}));
