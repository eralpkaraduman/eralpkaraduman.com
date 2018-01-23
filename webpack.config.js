const path = require('path');
const packageConfig = require('./package');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg)$/,
        use: 'file-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(txt|md)$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      title: packageConfig.name,
      description: packageConfig.description,
      author: packageConfig.author,
      googleAnalyticsUA: packageConfig.googleAnalyticsUA,
      template: 'index.ejs',
      inject: 'body',
      filename: 'index.html',
    }),
    new ExtractTextPlugin('styles.css'),
    new FaviconsWebpackPlugin({
      logo: './profilePicture.png',
      persistentCache: true,
      title: packageConfig.name,
      inject: true,
      emitStats: false,
    }),
  ],
  resolve: {
    extensions: ['.js', '.es6', '.css'],
  },
};
