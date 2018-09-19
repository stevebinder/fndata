const path = require('path');

const TEST = process.env.NODE_ENV === 'test';

module.exports = {
  entry: TEST ? './test/' : './src/',
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
    filename: TEST ? 'test.js' : 'reactdux.js',
    libraryTarget: TEST ? 'var' : 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
  },
};