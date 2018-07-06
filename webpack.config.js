const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['angular', 'angular-route']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].chunkhash.bundle.js',
    chunkFilename: '[name].chunkhash.bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader', query: { compact: false } }]
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader',
        options: {
          self: true,
          pretty: true
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    // extensions: ["*", "js"],
    modules: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: 'body',
      template: './src/index.html'
    })
  ],
  stats: 'minimal',
  devServer: {
    stats: 'minimal'
  }
};
