const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[hash].bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      },
      {test: /\.scss$/, loaders: ['style-loader']},
      {test: /\.html$/, loaders: 'raw-loader'},
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        loader: 'file-loader?limit=100000&name=./assets/img/[name].[ext]'
      },
    ]
  },

  plugins: [new HtmlWebpackPlugin({
    template: './index.html.ejs'
  })],

  devServer: {
    contentBase: path.join(__dirname, 'dev-build'),
    port: 9000,
    watchContentBase: true,
    watch: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    open: true,
    inline: false,
  }
};