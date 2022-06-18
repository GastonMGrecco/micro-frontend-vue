const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const Webpack = require('webpack');
const deps = require('./package.json').dependencies;
const path = require('path');

module.exports = {
    mode:'production',
    entry:'./src/index.js',
    output:{ 
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname,'build')
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-runtime'],
            presets: ['@babel/preset-env']
          }
        }
       
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader','postcss-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new Webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
    new ModuleFederationPlugin({
      name: 'navvue',
      filename: 'remoteEntry.js',
      // Use only  remote property when you are created a container to receive a microfrontend-child
      remotes: {
        // MF1:
        //   "MF1@http://domain/remoteEntry.js", //This is an example
      },
      // Use only when this component will be a child micro frontend
      exposes: {
         // This is an example
         './NavVue':'./src/bootstrap'
      },
      shared: {
        ...deps,
        vue: {
          singleton: true,
          requiredVersion: deps.vue
        }
      }
    }),
  new VueLoaderPlugin()
  ]
};
