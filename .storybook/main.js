module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: ['react-native-reanimated'],
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
    'storybook-design-token',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: { reactDocgen: 'react-docgen-typescript' },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // This is required to show props table in storybook.
      '@newcross-ui/react-native': '@newcross-ui/react-native/src/index',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
    };
    config.resolve.extensions.push('.stories.tsx');
    return config;
  },
};
