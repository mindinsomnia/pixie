/*

This is the configuration file used for Webpack, it's purpose is
to instruct Webpack how to bundle the web application into
the 'dist' directory for a build, whether that build is for
Electron or for a web server.

It performs the following tasks:

	- Static files (HTML) are copied from the static directory
	to the dist directory.

	- Vue component files are turned into JS bundles and
	placed in the js directory.

	- CSS is minified and placed in the css directory.

	- Icons are turned into Vue components and bundled
	automatically.
*/

const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');



module.exports = {
	entry: {
		app: {
			import: './src/app.js',
			filename: './app.js'
		}
	},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
	output: {
		path: path.resolve(__dirname, './dist'),
		clean: true
	},
	devServer: {
		static: './dist',
	},
	plugins: [
		new webpack.DefinePlugin({
	    __VUE_OPTIONS_API__: true,
	    __VUE_PROD_DEVTOOLS__: false,
	  }),
		new VueLoaderPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: "./src/html", to: "./" },
				{ from: "./src/css", to: "./css" }
			]
		})
	]
};
