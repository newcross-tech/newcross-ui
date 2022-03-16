module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
    'storybook-design-token',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: { reactDocgen: 'react-docgen-typescript' },
};
