const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
   entry: [
    './src/index.js'
  ],
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
      },
         {
            test: /\.(css|less)$/,
            use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
         {
            test: /\.(jpg|jpeg|svg|png|gif|ttf|woff|woff2|eot)$/,
            use: [{
               loader: 'url-loader',
               options: {
                  limit: 1000,
                  outputPath: 'urls'
               }
          }]
      }
    ]
   },
   resolveLoader: {
      modules: [
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ]
   },
   resolve: {
      modules: [
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ],
      extensions: [
      '.js',
      '.jsx'
    ]
   },
   devServer: {
      port: 9951,
      contentBase: './dist',
      writeToDisk: true
   },
   devtool: 'source-map',
   plugins: [
      new CleanWebpackPlugin({
         dry: false,
         verbose: true,
         cleanStaleWebpackAssets: false,
         cleanOnceBeforeBuildPatterns: ['**/*', '!urls/**','!quotes.json', '!index.html'],
         cleanAfterEveryBuildPatterns: ['**/*', '!urls/**','!quotes.json', '!index.html']
      }),
      new HtmlWebpackPlugin({
         template: 'src/template.html',
         inject: 'body'
      })
    ]
};

module.exports = config;