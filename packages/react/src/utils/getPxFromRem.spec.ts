import { getPxFromRem } from './getPxFromRem';

describe('getPxFromRem tests', () => {
  it(`getPxFromRem test`, () => {
    //Assert
    expect(getPxFromRem('2rem')).toBe(32);
  });
});
