import StyleDictionary from 'style-dictionary';
import { throwSizeError } from './utils';

StyleDictionary.registerTransform({
  type: 'value',
  name: 'size/px',
  matcher: (token) => {
    return token.attributes?.category === 'size' || token.type === 'spacing';
  },
  transformer: (token) => {
    const val = parseFloat(token.value);
    if (isNaN(val)) throwSizeError(token.name, token.value, 'px');
    return val + 'px';
  },
});
