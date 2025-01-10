import { getRgba } from './getRgba';

describe('getRgba tests', () => {
  it('should convert RGB to RGBA', () => {
    // Assert
    expect(getRgba('rgb(10,20,30)', 0.5)).toBe('rgba(10,20,30, 0.5)');
    expect(getRgba('rgb(255,255,255)', 1)).toBe('rgba(255,255,255, 1)');
    expect(getRgba('rgb(0,0,0)', 0)).toBe('rgba(0,0,0, 0)');
  });

  it('should convert hex to RGBA', () => {
    // Assert
    expect(getRgba('#ff5733', 0.7)).toBe('rgba(255, 87, 51, 0.7)');
    expect(getRgba('#abc', 0.3)).toBe('rgba(170, 187, 204, 0.3)');
    expect(getRgba('#000000', 0.1)).toBe('rgba(0, 0, 0, 0.1)');
  });

  it('should handle shorthand hex and expand it', () => {
    // Assert
    expect(getRgba('#123', 0.6)).toBe('rgba(17, 34, 51, 0.6)');
    expect(getRgba('#abc', 0.4)).toBe('rgba(170, 187, 204, 0.4)');
  });

  it('should handle edge cases', () => {
    // Assert
    expect(getRgba('rgb(0,0,0)', 0.5)).toBe('rgba(0,0,0, 0.5)');
    expect(getRgba('#fff', 0)).toBe('rgba(255, 255, 255, 0)');
  });

  it('should return undefined for invalid input', () => {
    // Assert
    expect(getRgba('rgb(0,0,0, 0.5)', 0.5)).toBeUndefined();
    expect(getRgba('#ffgggg', 0.5)).toBeUndefined();
  });
});
