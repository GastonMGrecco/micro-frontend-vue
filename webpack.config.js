const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const Webpack = require('webpack');
const deps = require('./package.json').dependencies;
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8085 // Port in each micro frontend in which will running
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
    new Webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
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
