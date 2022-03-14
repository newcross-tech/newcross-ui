import StyleDictionary, { Platform } from 'style-dictionary';

const getBasePxFontSize = (options: Platform | undefined) => {
  return (options && options.basePxFontSize) || 16;
};

const throwSizeError = (name: string, value: string, unitType: string) => {
  throw `Invalid Number: '${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`;
};

StyleDictionary.registerTransform({
  type: 'value',
  name: 'size/pxToRem',
  matcher: (token) => {
    return token.attributes?.category === 'size' || token.type === 'size';
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
