/**
	Webpack configuration file.
**/
module.exports = {
	entry: './js/app.js',
	output: {
		path: './js',
		filename: 'app.bundle.js',
	},
	module: {
		loaders: [{
			//let's use the babel loader for es6 module loading
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			//import css
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			//import html as string
			test: /\.html$/,
			loader: 'raw-loader'
		}, {
			//lets move all the assets as well
			test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/,
			loader: 'file-loader'
		}]
	}
}
