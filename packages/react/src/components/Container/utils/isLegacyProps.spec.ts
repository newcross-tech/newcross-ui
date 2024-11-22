import { isLegacyProps } from './isLegacyProps';
import { ContainerProps } from '../Container';

const mockLegacyProps: ContainerProps = {
  m: 'SpacingBase16',
  p: 'SpacingBase24',
  gap: 'SpacingBase8',
};

const mockNewProps: ContainerProps = {
  m: 'sm',
  p: 'md',
  gap: 'lg',
  display: 'flex',
};

const mockDontCareProps: ContainerProps = {
  m: 'auto',
  p: 'auto',
  gap: 'inherit',
};

const mockEmptyProps: ContainerProps = {};

describe('isLegacyProps', () => {
  it('should return true for legacy props', () => {
    expect(isLegacyProps(mockLegacyProps)).toBe(true);
  });

  it('should return false for new props', () => {
    expect(isLegacyProps(mockNewProps)).toBe(false);
  });

  it('should return true for props with "dont care" values', () => {
    expect(isLegacyProps(mockDontCareProps)).toBe(true);
  });

  it('should return false for empty props', () => {
    expect(isLegacyProps(mockEmptyProps)).toBe(true);
  });
});
