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
  typescript: { reactDocgen: 'react-docgen-typescript' },
};
