let path = require("path");

let config = {
	entry: "./src/main",
	output: {
		filename: "./scripts/bundle.js"
	},
	devServer: {
		contentBase: "src"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: "pre",
				exclude: /node_module/,
				loader: "eslint-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				exclude: /node_module/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.(woff|woff2|ttf|svg|eot)$/,
				exclude: /node_module/,
				loader: "url-loader?limit?10000"
			}
		]
	},
	resolve: {
		extensions: [".js"]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		https: true,
		overlay: true //To see errors in the browser
	}
};

module.exports = (env, argv) => {
    config.mode = argv.mode || "none";
	return config;
};
