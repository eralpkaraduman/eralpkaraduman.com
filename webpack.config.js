'use strict';

const path = require('path');
const packageConfig = require('./package');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CreateFilePlugin = require('webpack-create-file-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

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
  devServer:{},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
		    test: /\.js?$/,
		    exclude: /node_modules/,
		    loader: 'babel-loader'
		  },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader'
      }
		]
  },
  plugins: [
    new HtmlPlugin({
      title: packageConfig.name,
      template: 'index.ejs',
      inject: 'body',
      filename: '../index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new CreateFilePlugin({
      files: [ // generates empty files
        'bootstrap.min.css.map',
        'bootstrap-theme.min.css.map'
      ] 
    }),
    new WriteFilePlugin(), // forces dev server to write files
    new FaviconsWebpackPlugin({
      logo: "./favicon-source.jpg",
      persistentCache: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.es6', '.css', '.jpg']
  },
}