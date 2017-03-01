var webpack = require('webpack');
var independentCss = require('extract-text-webpack-plugin');

module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module:{
		loaders: [
			{test:/\.css$/, loader: independentCss.extract({
				fallback: "style-loader",
				use: "css-loader"
			})}
		]
	},
	plugins:[new independentCss("naaaa.css")]
}