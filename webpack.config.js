const path = require('path');

const DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: DEVELOPMENT
    ? 'inline-source-map'
    : '',
  entry: DEVELOPMENT
    ? [
      '@babel/polyfill',
      './test/',
    ]
    : './src/',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
  output: {
    filename: DEVELOPMENT
      ? 'test.js'
      : 'fndata.js',
    libraryTarget: DEVELOPMENT
      ? 'var'
      : 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
  },
};