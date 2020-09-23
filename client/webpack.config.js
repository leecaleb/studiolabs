const path = require("path")
const webpack = require("webpack")

module.exports = {
	entry: ["react-hot-loader/patch", "./src/index.js"],
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: { extensions: ["*", ".js", ".jsx" ] },
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "public/"),
		host: '0.0.0.0',
		port: 8000,
		publicPath: "http://localhost:8000/dist/",
		hotOnly: true,
		proxy: {
			'/api': {
				target: {
					host: '0.0.0.0',
					protocol: 'http:',
					port: 3000
				},
				ignorePath: true,
	                        changeOrigin: true,
				secure: false

			}
		}
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};
