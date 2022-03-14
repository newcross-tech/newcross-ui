import StyleDictionary from 'style-dictionary';

const brands = ['healthforce'];

const getStyleDictionaryConfig = (brand: string) => ({
  transform: {
    'size/pxToRem': require('./transforms/pxToRem'),
  },
  source: [
    'src/global/**/*.json',
    'src/components/*.json',
    `src/brands/${brand}/*.json`,
  ],
  platforms: {
    native: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/rgb'],
      buildPath: `build/${brand}/`,
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
      buildPath: `scss/${brand}/`,
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
});

brands.map((brand) => {
  StyleDictionary.extend(getStyleDictionaryConfig(brand)).buildAllPlatforms();
});
