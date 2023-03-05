const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.module.rules.forEach((rule) => {
    if (rule.oneOf) {
      rule.oneOf.unshift({
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('@svgr/webpack'),
            options: {
              viewBox: false,
            },
          },
        ],
      })
    }
  })
  config.resolve.extensions.push('.svg')

  config.resolve.alias = {
    '@': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'assets'),
  }

  return config
}
