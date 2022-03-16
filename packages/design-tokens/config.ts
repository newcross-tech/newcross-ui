import StyleDictionary, { Config } from 'style-dictionary';

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
      files: [
        {
          destination: 'spacing.css',
          format: 'css/variables',
          options: {
            fileHeader: () => {
              return ['@tokens Spacing', '@presenter Spacing'];
            },
          },
          filter: {
            attributes: {
              category: 'spacing',
            },
          },
        },
        {
          destination: 'color.css',
          format: 'css/variables',
          options: {
            fileHeader: () => {
              return ['@tokens Color', '@presenter Color'];
            },
          },
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'brand-color.css',
          format: 'css/variables',
          options: {
            fileHeader: () => {
              return ['@tokens Brand Color', '@presenter Color'];
            },
          },
          filter: {
            attributes: {
              category: 'brand',
              type: 'color',
            },
          },
        },
      ],
    },
  },
});

brands.map((brand) => {
  StyleDictionary.extend(getStyleDictionaryConfig(brand)).buildAllPlatforms();
});
