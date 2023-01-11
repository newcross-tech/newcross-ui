import { ApplyCenteredStyleArgs } from '../ProgressBar.types';
import { applyWidthStyles } from './applyWidthStyles';

describe.each([
  [
    {
      labelPosition: 'topCenter',
      progressLabelPosition: 'topCenter',
      forceWidthStyles: true,
    },
    true,
  ],
  [
    {
      labelPosition: 'topCenter',
      progressLabelPosition: 'topCenter',
      forceWidthStyles: false,
    },
    true,
  ],
  [
    {
      labelPosition: 'topCenter',
      progressLabelPosition: 'topRight',
      forceWidthStyles: false,
    },
    false,
  ],
  [
    {
      labelPosition: 'bottomCenter',
      progressLabelPosition: 'bottomRight',
      forceWidthStyles: false,
    },
    false,
  ],
  [
    {
      labelPosition: 'topLeft',
      progressLabelPosition: 'bottomRight',
      forceWidthStyles: false,
    },
    true,
  ],
])(
  'applyWidthStyles',
  ({ labelPosition, progressLabelPosition, forceWidthStyles }, output) => {
    it(`should return ${output}`, () => {
      //act
      const result = applyWidthStyles({
        labelPosition,
        progressLabelPosition,
        forceWidthStyles,
      } as ApplyCenteredStyleArgs);

      //assert
      expect(result).toBe(output);
    });
  }
);
