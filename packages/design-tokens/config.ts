import StyleDictionary, { Config } from 'style-dictionary';
import { storybookTokens } from './transforms/constants';

const brands = ['healthforce'];

const getStyleDictionaryConfig = (brand: string): Config => ({
  transform: {
    'size/pxToRem': require('./transforms/pxToRem'),
    'size/px': require('./transforms/toPx'),
  },
  source: [
    'src/global/**/*.json',
    'src/components/*.json',
    `src/brands/${brand}/*.json`,
  ],
  platforms: {
    native: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/rgb'],
      buildPath: `build/js/${brand}/`,
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6',
        },
        {
          format: 'typescript/es6-declarations',
          destination: 'index.d.ts',
        },
      ],
    },
    web: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'color/rgb',
        'size/pxToRem',
      ],
      buildPath: `build/scss/${brand}/`,
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
    'web/category': {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/rgb', 'size/px'],
      buildPath: `build/css/${brand}/`,
      files: storybookTokens.map(
        ({ destination, headers, filterAttributes }) => ({
          destination,
          format: 'css/variables',
          options: {
            fileHeader: () => {
              return headers;
            },
          },
          filter: {
            attributes: {
              ...filterAttributes,
            },
          },
        })
      ),
    },
  },
});

brands.map((brand) => {
  StyleDictionary.extend(getStyleDictionaryConfig(brand)).buildAllPlatforms();
});
