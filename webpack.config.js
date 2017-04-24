const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
  	filename: 'bundle.js',
    path: path.join(__dirname, "/dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
            [ 'es2015', { modules: false } ]
          ] 
        }
      }, {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({ title: 'Tree-shaking' }) 
  ]
};