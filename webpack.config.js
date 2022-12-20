const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: {
    banner: path.resolve(__dirname, 'js', 'banner.ts'),
    site: path.resolve(__dirname, 'js', 'site.ts'),
  },
  output: {
    path: path.resolve(__dirname, '_site'),
    filename: '[name].js'
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      '...'
    ]
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env'
              ]
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use : 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.css', '.scss', '.js', '.json', '.ts', '.tsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}