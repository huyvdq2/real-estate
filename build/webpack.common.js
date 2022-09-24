const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.js$/,
				loader: 'esbuild-loader',
				include: path.resolve(__dirname, '../src'),
				options: {
					loader: 'jsx',
					target: 'es2015',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}
