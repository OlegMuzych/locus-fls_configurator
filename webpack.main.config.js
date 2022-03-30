const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pack = require("./package.json");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  // Put your normal webpack config below here
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "node_modules/ms", to: "node_modules/ms"},
        { from: "node_modules/debug", to: "node_modules/debug"},
        { from: "node_modules/serialport", to: "node_modules/serialport"},
        { from: "node_modules/node-gyp-build", to: "node_modules/node-gyp-build"},
        { from: "node_modules/@serialport", to: "node_modules/@serialport"},
        { from: "node_modules/easy-crc", to: "node_modules/easy-crc"},
        { from: "node_modules/csv-string", to: "node_modules/csv-string"},
      ],
    }),
  ],

  module: {
    rules: require('./webpack.rules'),
  },
};
