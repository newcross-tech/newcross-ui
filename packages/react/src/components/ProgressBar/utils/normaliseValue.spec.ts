import { normaliseValue } from './normaliseValue';

describe('normaliseValue function', () => {
  it('it should return 50', () => {
    // Arrange
    const progress = 100;
    const minProgress = 50;
    const maxProgress = 150;
    // Act
    const value = normaliseValue(progress, minProgress, maxProgress);
    // Assert
    expect(value).toBe(50);
  });
});
