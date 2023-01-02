const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@libs': path.resolve(__dirname, '../src/libs'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@stories': path.resolve(__dirname, '../src/stories'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@public_images': path.resolve(__dirname, '../public/images'),
    }

    // config.module.rules.push({
    //   test: /\.(js|jsx|ts|tsx)$/,
    //   loader: require.resolve('babel-loader'),
    //   options: {
    //     cacheDirectory: true,
    //     presets: [require.resolve('@emotion/babel-preset-css-prop')],
    //   },
    // })

    return config
  },
}
