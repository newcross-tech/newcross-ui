import { CombinedContainerProps } from '../Container';
import { isLegacyProps } from './isLegacyProps';

describe('isLegacyProps', () => {
  it('should return true for legacy spacing values', () => {
    const props: CombinedContainerProps = { m: 'SpacingBase12' };
    expect(isLegacyProps(props)).toBe(true);
  });

  it('should return false for new spacing values', () => {
    const props: CombinedContainerProps = { p: 'sm' };
    expect(isLegacyProps(props)).toBe(false);
  });

  it('should return true for unrelated properties', () => {
    const props: CombinedContainerProps = { display: 'flex' };
    expect(isLegacyProps(props)).toBe(true);
  });

  it('should return true for empty props', () => {
    const props: CombinedContainerProps = {};
    expect(isLegacyProps(props)).toBe(true);
  });

  it('should return true for undefined spacing values', () => {
    const props: CombinedContainerProps = { m: undefined };
    expect(isLegacyProps(props)).toBe(true);
  });

  it('should return false for a single new spacing value', () => {
    const props: CombinedContainerProps = { mt: 'lg' };
    expect(isLegacyProps(props)).toBe(false);
  });

  it('should return true for all legacy spacing values', () => {
    const props: CombinedContainerProps = {
      mx: 'SpacingBase16',
      gap: 'SpacingBase8',
    };
    expect(isLegacyProps(props)).toBe(true);
  });
});
