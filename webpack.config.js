'use strict';

const path = require('path');
const packageConfig = require('./package');
const HtmlPlugin = require('html-webpack-plugin');
const awsCredentials = require('./aws-credentials');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: "./index.js"
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer:{
    contentBase: 'dist'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jsxhint-loader'
      },
      {
		    test: /\.js?$/,
		    exclude: /node_modules/,
		    loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
		  }
		]
  },
  plugins: [
    new HtmlPlugin({
      title: packageConfig.name,
      template: 'index.ejs',
      inject: 'body',
      filename: '../index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.es6']
  },
}