const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, './src'),
	node: {
		__dirname: true
	},
	entry: {
		app: [
			'./app'
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	devtool: '',
	module: {
	},
	plugins: [
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	devServer: {
		contentBase: path.resolve(__dirname, './src'),
	},
}