import { getRgba } from './getRgba';

describe('getRgba tests', () => {
  it(`Rgba test`, () => {
    //Assert
    expect(getRgba('rgb(10,20,30)', 20)).toBe('rgba(10,20,30,20)');
  });
});
