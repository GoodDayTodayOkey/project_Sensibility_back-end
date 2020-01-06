const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  entry:  "./src/App/App.ts",
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      "images": path.resolve('./src/images'),
      "modules": path.resolve('./src/modules'),
    }
  },
  module: {
    rules: [
      { test: /\.(ts)$/, use: 'ts-loader'},
      { test: /\.(png|svg|jpg|gif|ico)$/, use: 'file-loader'},
    ]
  },
  watch: true,
  externals: [nodeExternals()],
};