var path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';
var entry = PRODUCTION
  ? [path.join(__dirname, 'src', 'js/main.js')]
  : [
    path.join(__dirname, 'src', 'js/main.js'),
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
  ];

var plugins = PRODUCTION
  ? [
    new webpack.optimize.UglifyJsPlugin()
  ]
  : [new webpack.HotModuleReplacementPlugin()];

plugins.push(
  new webpack.DefinePlugin({
    TESTT: JSON.stringify(process.env.NODE_ENV),
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION)
  })
);

module.exports = {
  externals: {
    'jquery': 'jQuery'
  },
  entry: entry,
  output: {
    path: path.join(__dirname, 'app', 'js'),
    publicPath: '/app/js/',
    filename: 'main.js'
  },
  devtool: 'source-map',
  plugins: plugins,
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: '/node_modules/'
    }, {
      test: /\.(png|jpg|gif)$/,
      loaders: ['url-loader?limit=100000&name=images/[hash:12].[ext]'],
      exclude: '/node_modules/'
    }, /*{ TODO INLINE SVG!!! in vue files
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    },*/ {
      test: /\.(vue)$/,
      loader: 'vue-loader',
      exclude: '/node_modules/',
      /*options: {
        transformToRequire: {
          image: 'xlink:href'
        }
      }*/
    }],
  }
};
