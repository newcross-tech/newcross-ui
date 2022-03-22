module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
    'storybook-design-token',
  ],
  framework: '@storybook/react',
  typescript: { reactDocgen: 'react-docgen-typescript' },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // This is required to show props table in storybook.
      '@newcross-ui/react-native': '@newcross-ui/react-native/src/index',
    };
    config.resolve.extensions.push('.stories.tsx');
    return config;
  },
};
