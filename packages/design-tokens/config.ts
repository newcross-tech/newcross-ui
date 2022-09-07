import StyleDictionary, { Config } from 'style-dictionary';
import {
  getBrandStorybookTokens,
  getGlobalStorybookTokens,
  getColorStorybookTokens,
} from './transforms/constants';

const brands = ['healthforce', 'homeclinic', 'yourcare', 'yourlife'];

const commonConfig = {
  transform: {
    'size/pxToRem': require('./transforms/pxToRem'),
    'size/px': require('./transforms/toPx'),
  },
};

const getStyleDictionaryConfig = (brand: string): Config => ({
  ...commonConfig,
  source: [
    'src/global/**/*.json',
    'src/components/*.json',
    'src/colors/*.json',
    `src/brands/${brand}/*.json`,
  ],
  platforms: {
    native: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'color/rgb'],
      buildPath: `build/js/native/${brand}/`,
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
        'name/cti/pascal',
        'color/rgb',
        'size/pxToRem',
      ],
      buildPath: `build/js/web/${brand}/`,
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
  },
});

const getGlobalStyleConfig = {
  ...commonConfig,
  source: ['src/global/**/*.json'],
  platforms: {
    'web/category': {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hex', 'size/px'],
      buildPath: `build/css/`,
      files: getGlobalStorybookTokens().map(
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
};

const getBrandStyleConfig = (brand: string) => ({
  source: [
    'src/global/**/*.json',
    'src/colors/*.json',
    `src/brands/${brand}/*.json`,
  ],
  platforms: {
    'web/category': {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hex', 'size/px'],
      buildPath: `build/css/${brand}/`,
      files: getBrandStorybookTokens(brand).map(
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

const getColorStyleConfig = {
  source: ['src/global/**/*.json', 'src/colors/*.json'],
  platforms: {
    'web/category': {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hex', 'size/px'],
      buildPath: 'build/css/colors/',
      files: getColorStorybookTokens().map(
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
};

// generate native & web tokens
brands.map((brand) => {
  StyleDictionary.extend(getStyleDictionaryConfig(brand)).buildAllPlatforms();
});

// generate global tokens for storybook
StyleDictionary.extend(getGlobalStyleConfig).buildAllPlatforms();

// generate brand tokens for storybook
brands.map((brand) => {
  StyleDictionary.extend(getBrandStyleConfig(brand)).buildAllPlatforms();
});

// generate color tokens for storybook
StyleDictionary.extend(getColorStyleConfig).buildAllPlatforms();
