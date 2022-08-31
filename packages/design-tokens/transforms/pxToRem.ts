import StyleDictionary from 'style-dictionary';
import { getBasePxFontSize, throwSizeError } from './utils';

StyleDictionary.registerTransform({
  type: 'value',
  name: 'size/pxToRem',
  matcher: (token) => {
    return (
      token.attributes?.category === 'size' ||
      token.type === 'spacing' ||
      token.type === 'size'
    );
  },
  transformer: (token, options) => {
    const baseFont = getBasePxFontSize(options);
    const floatVal = parseFloat(token.value);
    if (isNaN(floatVal)) {
      throwSizeError(token.name, token.value, 'rem');
    }
    if (floatVal === 0) {
      return '0';
    }
    return `${floatVal / baseFont}rem`;
  },
});
