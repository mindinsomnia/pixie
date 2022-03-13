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

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "static", to: "dist" }
			]
		})
	]
};
