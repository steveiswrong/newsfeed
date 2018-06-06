const path = require("path")

const config = {
  entry: [
    "babel-polyfill","./src/index.js",
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "newsfeed.bundle.js"
  },
  resolve: {
      extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/,
      },
    ],
  }
};

module.exports = config;