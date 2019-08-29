const path = require('path');

module.exports = {
  entry: {
    polyfill: 'babel-polyfill',
    app: './src/client/index.js',
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    hot: true,
    publicPath: '/build/',
    proxy: {
      context: ['/api'],
      target: 'http://localhost:3000',
    },
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
