

module.exports = {
  entry: './src/index.js',

  devtool: 'source-map',

  output: {
    filename: './dist/url2html.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
